import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { WhatsAppService } from '@/lib/services/whatsapp'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Необходима авторизация' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const templateId = searchParams.get('id')

    if (!templateId) {
      return NextResponse.json(
        { error: 'ID шаблона не указан' },
        { status: 400 }
      )
    }

    // Получаем шаблон из базы данных
    const template = await prisma.messageTemplate.findUnique({
      where: { id: templateId },
      include: { account: true }
    })

    if (!template) {
      return NextResponse.json(
        { error: 'Шаблон не найден' },
        { status: 404 }
      )
    }

    if (!template.whatsappId) {
      return NextResponse.json(
        { error: 'Шаблон не был отправлен в WhatsApp' },
        { status: 400 }
      )
    }

    try {
      // Проверяем статус в WhatsApp
      const whatsapp = new WhatsAppService(template.account)
      const status = await whatsapp.checkTemplateStatus(template.whatsappId)

      // Обновляем статус в базе данных
      const updatedTemplate = await prisma.messageTemplate.update({
        where: { id: templateId },
        data: {
          status: status.status
        }
      })

      return NextResponse.json(updatedTemplate)
    } catch (error) {
      console.error('Error checking template status:', error)
      
      // Если ошибка связана с тем, что шаблон не найден в WhatsApp,
      // возвращаем текущий статус из базы данных
      return NextResponse.json(template)
    }
  } catch (error) {
    console.error('Error checking template status:', error)
    return NextResponse.json(
      { error: 'Не удалось проверить статус шаблона' },
      { status: 500 }
    )
  }
} 