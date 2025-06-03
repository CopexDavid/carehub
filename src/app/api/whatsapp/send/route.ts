import { prisma } from '@/lib/prisma'
import { sendWhatsAppMessage } from '@/lib/whatsapp'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, text } = body

    // Нормализуем номер телефона (убираем плюс если есть)
    const normalizedPhone = to.replace(/^\+/, '')

    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true }
    })

    if (!account) {
      throw new Error('No active WhatsApp account found')
    }

    // Создаем или получаем существующий чат
    const chat = await prisma.whatsAppChat.upsert({
      where: {
        phoneNumber_accountId: {
          phoneNumber: normalizedPhone,
          accountId: account.id
        }
      },
      create: {
        phoneNumber: normalizedPhone,
        accountId: account.id,
        lastMessageAt: new Date(),
        unreadCount: 0
      },
      update: {
        lastMessageAt: new Date()
      }
    })

    // Отправляем сообщение через WhatsApp API
    const whatsappResponse = await sendWhatsAppMessage({
      phoneNumberId: account.phoneNumberId,
      to: normalizedPhone,
      accessToken: account.accessToken,
      text
    })

    // Сохраняем сообщение в базе данных
    const message = await prisma.whatsAppMessage.create({
      data: {
        whatsappId: whatsappResponse.messages[0].id,
        from: account.phoneNumber,
        to: normalizedPhone,
        type: 'text',
        content: text,
        timestamp: new Date(),
        status: 'sent',
        accountId: account.id,
        chatId: chat.id
      }
    })

    return new Response(JSON.stringify({ 
      success: true,
      messageId: message.id,
      whatsappId: message.whatsappId
    }), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
} 