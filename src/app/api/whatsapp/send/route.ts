import { prisma } from '@/lib/prisma'
import { sendWhatsAppMessage } from '@/lib/whatsapp'
import { notifyClients } from '../events/route'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, text } = body

    if (!to || !text) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to and text' }), 
        { status: 400 }
      )
    }

    // Нормализуем номер телефона (убираем плюс если есть)
    const normalizedPhone = to.replace(/^\+/, '')

    console.log('Searching for active WhatsApp account...')
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true }
    })

    console.log('Found account:', {
      id: account?.id,
      phoneNumber: account?.phoneNumber,
      hasPhoneNumberId: !!account?.phoneNumberId,
      hasAccessToken: !!account?.accessToken,
      isActive: account?.isActive
    })

    if (!account) {
      return new Response(
        JSON.stringify({ error: 'No active WhatsApp account found' }), 
        { status: 404 }
      )
    }

    if (!account.phoneNumberId || !account.accessToken) {
      return new Response(
        JSON.stringify({ error: 'WhatsApp account is not properly configured' }), 
        { status: 500 }
      )
    }

    console.log('Attempting to send message:', {
      to: normalizedPhone,
      phoneNumberId: account.phoneNumberId.substring(0, 5) + '...',
      accessTokenLength: account.accessToken.length
    })

    // Отправляем сообщение через WhatsApp API
    const whatsappResponse = await sendWhatsAppMessage({
      phoneNumberId: account.phoneNumberId,
      to: normalizedPhone,
      accessToken: account.accessToken,
      text
    })

    console.log('WhatsApp API response:', whatsappResponse)

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

    // Уведомляем клиентов о новом сообщении
    await notifyClients({
      type: 'new_message',
      chat: {
        id: chat.id,
        phoneNumber: normalizedPhone,
        lastMessage: text,
        time: message.timestamp.toISOString()
      },
      message: {
        id: message.id,
        content: text,
        from: account.phoneNumber,
        timestamp: message.timestamp.toISOString(),
        status: 'sent'
      }
    })

    return new Response(JSON.stringify({ 
      success: true,
      messageId: message.id,
      whatsappId: message.whatsappId
    }), { status: 200 })
  } catch (error: any) {
    console.error('Error sending WhatsApp message:', {
      error: error.message,
      cause: error.cause,
      response: error.response?.data,
      stack: error.stack
    })
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to send message',
        details: {
          cause: error.cause,
          response: error.response?.data,
          stack: error.stack
        }
      }), 
      { status: 500 }
    )
  }
} 