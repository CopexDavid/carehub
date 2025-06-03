import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadMedia, sendWhatsAppMedia } from '@/lib/whatsapp'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const chatId = formData.get('chatId') as string

    if (!file || !chatId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const chat = await prisma.whatsAppChat.findUnique({
      where: { id: chatId },
      include: { account: true }
    })

    if (!chat || !chat.account) {
      return NextResponse.json(
        { error: 'Chat or account not found' },
        { status: 404 }
      )
    }

    // Загружаем файл в WhatsApp Media API
    const mediaId = await uploadMedia({
      file,
      accessToken: chat.account.accessToken
    })

    // Отправляем медиафайл через WhatsApp API
    const response = await sendWhatsAppMedia({
      phoneNumberId: chat.account.phoneNumberId,
      to: chat.phoneNumber,
      accessToken: chat.account.accessToken,
      mediaId,
      type: file.type.startsWith('image/') ? 'image' : 'document',
      filename: file.name
    })

    // Сохраняем сообщение в базе данных
    const message = await prisma.whatsAppMessage.create({
      data: {
        whatsappId: response.messages[0].id,
        from: chat.account.phoneNumber,
        to: chat.phoneNumber,
        type: file.type.startsWith('image/') ? 'image' : 'document',
        content: {
          type: file.type.startsWith('image/') ? 'image' : 'document',
          url: response.url,
          filename: file.name
        },
        timestamp: new Date(),
        status: 'sent',
        accountId: chat.account.id,
        chatId: chat.id
      }
    })

    return NextResponse.json({
      success: true,
      messageId: message.id,
      url: response.url
    })
  } catch (error: any) {
    console.error('Error sending media:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send media' },
      { status: 500 }
    )
  }
} 