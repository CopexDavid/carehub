import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const prisma = new PrismaClient()

// Функция для очистки текста от недопустимых символов
function sanitizeText(text: string): string {
  return text
    .replace(/[\n\r\t]+/g, ' ') // Заменяем переносы строк и табуляции на пробелы
    .replace(/\s{5,}/g, '    ') // Заменяем 5 и более пробелов на 4 пробела
    .trim() // Убираем пробелы в начале и конце
}

// Функция для преобразования компонентов шаблона
function transformTemplateComponents(components: any[]): any[] {
  return components.map(component => {
    if (component.type === 'header') {
      const header: any = {
        type: 'HEADER'
      }

      if (component.format && component.format !== 'text') {
        header.format = component.format.toUpperCase()
      } else if (component.text) {
        header.parameters = [{
          type: 'text',
          text: sanitizeText(component.text)
        }]
      }

      return header
    } 
    
    if (component.type === 'body') {
      return {
        type: 'BODY',
        parameters: [{
          type: 'text',
          text: sanitizeText(component.text)
        }]
      }
    } 
    
    if (component.type === 'footer') {
      return {
        type: 'FOOTER',
        text: sanitizeText(component.text)
      }
    } 
    
    if (component.type === 'button') {
      return {
        type: 'BUTTONS',
        buttons: [{
          type: 'QUICK_REPLY',
          text: sanitizeText(component.text)
        }]
      }
    }

    return component
  })
}

// Функция для отправки шаблона через WhatsApp API
async function sendWhatsAppTemplate(
  phoneNumber: string,
  templateId: string,
  account: any
): Promise<{ success: boolean; error?: string }> {
  try {
    const template = await prisma.messageTemplate.findUnique({
      where: { id: templateId }
    })

    if (!template) {
      return {
        success: false,
        error: 'Шаблон не найден'
      }
    }

    // Нормализуем номер телефона (убираем пробелы и добавляем + если нет)
    const normalizedPhone = phoneNumber.replace(/\s+/g, '').replace(/^([^+])/, '+$1')

    // Преобразуем имя шаблона в формат WhatsApp (только строчные буквы, цифры и подчеркивания)
    const templateName = template.name.toLowerCase().replace(/[^a-z0-9_]/g, '_')

    const url = `https://graph.facebook.com/v17.0/${account.phoneNumberId}/messages`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${account.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: normalizedPhone,
        type: 'template',
        template: {
          name: templateName,
          language: {
            code: template.language
          }
        }
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('WhatsApp API error:', data)
      return {
        success: false,
        error: data.error?.message || 'Ошибка при отправке сообщения'
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending WhatsApp template:', error)
    return {
      success: false,
      error: 'Ошибка при отправке сообщения'
    }
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await req.json()
    const { name, accountId, clientListId, templateId, scheduledAt } = data

    if (!name || !accountId || !clientListId || !templateId) {
      return NextResponse.json(
        { error: 'Необходимо заполнить все обязательные поля' },
        { status: 400 }
      )
    }

    // Проверяем существование аккаунта WhatsApp
    const account = await prisma.whatsAppAccount.findUnique({
      where: { id: accountId }
    })

    if (!account) {
      return NextResponse.json(
        { error: 'Аккаунт WhatsApp не найден' },
        { status: 404 }
      )
    }

    // Проверяем существование базы клиентов
    const clientList = await prisma.clientList.findUnique({
      where: { id: clientListId },
      include: {
        phoneNumbers: true
      }
    })

    if (!clientList) {
      return NextResponse.json(
        { error: 'База клиентов не найдена' },
        { status: 404 }
      )
    }

    // Проверяем существование и статус шаблона
    const template = await prisma.messageTemplate.findUnique({
      where: { id: templateId }
    })

    if (!template) {
      return NextResponse.json(
        { error: 'Шаблон не найден' },
        { status: 404 }
      )
    }

    if (template.status !== 'approved') {
      return NextResponse.json(
        { error: 'Шаблон не одобрен для использования' },
        { status: 400 }
      )
    }

    // Создаем рассылку
    const broadcast = await prisma.whatsAppBroadcast.create({
      data: {
        name,
        status: scheduledAt ? 'scheduled' : 'draft',
        scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
        recipients: clientList.phoneNumbers.length,
        account: {
          connect: { id: accountId }
        },
        clientList: {
          connect: { id: clientListId }
        },
        template: {
          connect: { id: templateId }
        }
      }
    })

    // Если рассылка не запланирована, начинаем отправку
    if (!scheduledAt) {
      let sentCount = 0
      let deliveredCount = 0
      const errors: { phone: string; error: string }[] = []
      
      // Отправляем сообщения всем получателям
      for (const phoneNumber of clientList.phoneNumbers) {
        const result = await sendWhatsAppTemplate(
          phoneNumber.phone,
          templateId,
          account
        )
        
        if (result.success) {
          sentCount++
          deliveredCount++
        } else {
          errors.push({
            phone: phoneNumber.phone,
            error: result.error || 'Неизвестная ошибка'
          })
        }
      }

      // Обновляем статус и счетчики рассылки
      await prisma.whatsAppBroadcast.update({
        where: { id: broadcast.id },
        data: {
          status: 'sent',
          sent: sentCount,
          delivered: deliveredCount
        }
      })

      // Если были ошибки, возвращаем их вместе с результатом
      if (errors.length > 0) {
        return NextResponse.json({
          id: broadcast.id,
          sent: sentCount,
          errors
        })
      }
    }

    return NextResponse.json({ id: broadcast.id })
  } catch (error) {
    console.error('Error creating broadcast:', error)
    return NextResponse.json(
      { error: 'Ошибка при создании рассылки' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const broadcasts = await prisma.whatsAppBroadcast.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        account: {
          select: {
            name: true,
            phoneNumber: true
          }
        },
        clientList: {
          select: {
            name: true
          }
        },
        template: {
          select: {
            name: true,
            category: true
          }
        }
      }
    })

    // Форматируем данные для отображения
    const formattedBroadcasts = broadcasts.map(broadcast => ({
      id: broadcast.id,
      name: broadcast.name,
      recipients: broadcast.recipients,
      sent: broadcast.sent,
      delivered: broadcast.delivered,
      read: broadcast.read,
      date: broadcast.scheduledAt 
        ? new Date(broadcast.scheduledAt).toLocaleString('ru-RU')
        : new Date(broadcast.createdAt).toLocaleString('ru-RU'),
      status: broadcast.status,
      account: broadcast.account,
      clientList: broadcast.clientList,
      template: broadcast.template
    }))

    return NextResponse.json(formattedBroadcasts)
  } catch (error) {
    console.error('Error fetching broadcasts:', error)
    return NextResponse.json(
      { error: 'Ошибка при загрузке рассылок' },
      { status: 500 }
    )
  }
} 