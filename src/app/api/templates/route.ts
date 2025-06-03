import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { WhatsAppService } from '@/lib/services/whatsapp'
import { Prisma } from '@prisma/client'

const parameterSchema = z.object({
  type: z.enum(['text', 'image', 'document', 'video', 'payload']),
  text: z.string().optional(),
  image: z.object({
    link: z.string().url()
  }).optional(),
  document: z.object({
    link: z.string().url()
  }).optional(),
  video: z.object({
    link: z.string().url()
  }).optional(),
  payload: z.string().optional()
})

const componentSchema = z.object({
  type: z.enum(['header', 'body', 'footer', 'button']),
  text: z.string().optional(),
  format: z.enum(['text', 'image', 'document', 'video']).optional(),
  parameters: z.array(z.any()).optional()
})

const createTemplateSchema = z.object({
  name: z.string()
    .min(1, 'Название обязательно')
    .regex(/^[a-z0-9_]+$/, 'В названии шаблона могут быть только буквы нижнего регистра, цифры и символы подчеркивания'),
  category: z.enum(['marketing', 'utility', 'authentication'], {
    errorMap: () => ({ message: 'Выберите одну из доступных категорий: marketing, utility, authentication' })
  }),
  language: z.string().min(1, 'Выберите язык'),
  components: z.array(componentSchema).min(1, 'Добавьте хотя бы один компонент')
})

type ComponentType = {
  type: 'header' | 'body' | 'footer' | 'button'
  text: string
  headerType?: 'text' | 'image' | 'video' | 'document'
  media?: {
    type: 'image' | 'video' | 'document'
    file?: File
  }
  url?: string
}

const getSortedComponents = (components: ComponentType[]) => {
  const order = { header: 0, body: 1, footer: 2, button: 3 }
  return [...components].sort((a, b) => order[a.type] - order[b.type])
}

// Функция для подготовки компонентов к отправке в WhatsApp API
function prepareComponentsForWhatsApp(components: any[]) {
  return components.map(component => {
    const whatsappComponent: any = {
      type: component.type.toUpperCase()
    }

    // Добавляем текст для всех компонентов
    if (component.text) {
      whatsappComponent.text = component.text
    }

    // Для header и body добавляем format, если он есть
    if ((component.type === 'header' || component.type === 'body') && component.format) {
      whatsappComponent.format = component.format.toUpperCase()
    }

    // Для кнопок добавляем URL, если он есть
    if (component.type === 'button' && component.url) {
      whatsappComponent.url = component.url
    }

    // Добавляем example только если он есть
    if (component.example) {
      whatsappComponent.example = {
        body_text: [component.example]
      }
    }

    return whatsappComponent
  })
}

type WhatsAppTemplate = {
  messaging_product: string;
  name: string;
  category: string;
  language: {
    code: string;
  };
  components: any[];
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Необходима авторизация' }, { status: 401 })
    }

    const templates = await prisma.messageTemplate.findMany({
      where: {
        account: {
          isActive: true
        }
      },
      include: {
        account: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(templates)
  } catch (error) {
    console.error('Error fetching templates:', error)
    return NextResponse.json(
      { error: 'Не удалось загрузить шаблоны' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Необходима авторизация' }, { status: 401 })
    }

    // Получаем FormData
    const formData = await request.formData()
    const name = formData.get('name') as string
    const category = formData.get('category') as string
    const language = formData.get('language') as string
    const componentsStr = formData.get('components') as string
    
    console.log('Received form data:', {
      name,
      category,
      language,
      componentsStr
    })
    
    let components
    try {
      components = JSON.parse(componentsStr)
      console.log('Parsed components:', components)
    } catch (error) {
      console.error('Failed to parse components:', error)
      return NextResponse.json(
        { error: 'Некорректный формат компонентов' },
        { status: 400 }
      )
    }

    // Валидируем входные данные
    const validatedData = createTemplateSchema.parse({
      name,
      category,
      language,
      components
    })

    console.log('Validated data:', validatedData);

    // Преобразуем данные для WhatsApp API
    const whatsappTemplate = {
      name: validatedData.name,
      category: validatedData.category,
      language: validatedData.language,
      components: validatedData.components
    }

    console.log('Prepared WhatsApp template:', whatsappTemplate);

      // Получаем активный аккаунт пользователя
      const account = await prisma.whatsAppAccount.findFirst({
        where: {
          isActive: true
        }
      })

      if (!account) {
        console.error('No active WhatsApp account found')
        return NextResponse.json(
          { error: 'Не найден активный WhatsApp аккаунт' },
          { status: 400 }
        )
      }

      // Создаем шаблон в базе данных
      const template = await prisma.messageTemplate.create({
        data: {
          name: validatedData.name,
          category: validatedData.category,
          language: validatedData.language,
          components: validatedData.components as unknown as Prisma.InputJsonValue,
          status: 'pending',
          accountId: account.id
        },
        include: {
          account: true
        }
      })

      try {
      // Отправляем шаблон в WhatsApp
        const whatsapp = new WhatsAppService(account)
      const result = await whatsapp.createTemplate(whatsappTemplate)

        // Обновляем шаблон с полученным ID
        const updatedTemplate = await prisma.messageTemplate.update({
          where: { id: template.id },
          data: {
            whatsappId: result.id,
            status: 'pending'
          },
          include: {
            account: true
          }
        })

        return NextResponse.json(updatedTemplate)
      } catch (error) {
      // В случае ошибки WhatsApp API
        console.error('WhatsApp API error:', error)
        
        const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
        
        const rejectedTemplate = await prisma.messageTemplate.update({
          where: { id: template.id },
          data: { 
            status: 'rejected',
            rejectionReason: errorMessage
          },
          include: {
            account: true
          }
        })

        return NextResponse.json(
          { 
            error: 'Не удалось отправить шаблон в WhatsApp',
            details: errorMessage,
            template: rejectedTemplate 
          },
          { status: 500 }
        )
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors)
        return NextResponse.json(
          { 
            error: 'Некорректные данные', 
            details: error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join('\n')
          },
          { status: 400 }
        )
      }
      throw error
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Необходима авторизация' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const templateId = searchParams.get('id')

    if (!templateId) {
      return NextResponse.json(
        { error: 'Не указан ID шаблона' },
        { status: 400 }
      )
    }

    // Проверяем существование шаблона
    const template = await prisma.messageTemplate.findFirst({
      where: {
        id: templateId,
        account: {
          isActive: true
        }
      }
    })

    if (!template) {
      return NextResponse.json(
        { error: 'Шаблон не найден' },
        { status: 404 }
      )
    }

    // Удаляем шаблон
    await prisma.messageTemplate.delete({
      where: {
        id: templateId
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting template:', error)
    return NextResponse.json(
      { error: 'Не удалось удалить шаблон' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Необходима авторизация' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const templateId = searchParams.get('id')

    if (!templateId) {
      return NextResponse.json(
        { error: 'Не указан ID шаблона' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = createTemplateSchema.parse(body)

    // Получаем существующий шаблон
    const existingTemplate = await prisma.messageTemplate.findUnique({
      where: { 
        id: templateId,
        account: {
          isActive: true
        }
      },
      include: { account: true }
    })

    if (!existingTemplate) {
      return NextResponse.json(
        { error: 'Шаблон не найден' },
        { status: 404 }
      )
    }

    // Обновляем шаблон в базе данных
    const updatedTemplate = await prisma.messageTemplate.update({
      where: { id: templateId },
      data: {
        name: validatedData.name,
        category: validatedData.category,
        language: validatedData.language,
        components: validatedData.components as unknown as Prisma.InputJsonValue,
        status: 'pending' // При обновлении шаблон снова отправляется на проверку
      },
      include: {
        account: true
      }
    })

    try {
      // Отправляем обновленный шаблон на проверку в WhatsApp
      const whatsapp = new WhatsAppService(existingTemplate.account)
      await whatsapp.updateTemplate(updatedTemplate)

      return NextResponse.json(updatedTemplate)
    } catch (error) {
      // В случае ошибки WhatsApp API, помечаем шаблон как отклоненный
      console.error('WhatsApp API error:', error)
      const rejectedTemplate = await prisma.messageTemplate.update({
        where: { id: templateId },
        data: { status: 'rejected' },
        include: {
          account: true
        }
      })

      return NextResponse.json(
        { 
          error: 'Не удалось обновить шаблон в WhatsApp', 
          details: error instanceof Error ? error.message : 'Неизвестная ошибка',
          template: rejectedTemplate 
        },
        { status: 500 }
      )
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Некорректные данные', 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    console.error('Error updating template:', error)
    return NextResponse.json(
      { error: 'Не удалось обновить шаблон' },
      { status: 500 }
    )
  }
} 