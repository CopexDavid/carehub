import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadMedia, sendWhatsAppMedia } from '@/lib/whatsapp'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    const chatId = formData.get('chatId') as string

    console.log('Processing voice message request:', {
      chatId,
      audioType: audioFile?.type,
      audioSize: audioFile?.size
    })

    if (!audioFile || !chatId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Проверяем размер файла (максимум 16MB для WhatsApp)
    if (audioFile.size > 16 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Voice message is too large (max 16MB)' },
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

    console.log('Uploading audio to WhatsApp Media API...')

    // Загружаем аудио файл в WhatsApp Media API
    const mediaId = await uploadMedia({
      file: audioFile,
      accessToken: chat.account.accessToken,
      phoneNumberId: chat.account.phoneNumberId
    })

    console.log('Successfully uploaded media with ID:', mediaId)

    // Отправляем голосовое сообщение через WhatsApp API
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${chat.account.phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${chat.account.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
      to: chat.phoneNumber,
      type: 'audio',
          audio: {
            id: mediaId
          }
        })
      }
    )

    const responseData = await response.json()
    console.log('WhatsApp API send message response:', responseData)

    if (!response.ok) {
      console.error('WhatsApp API error:', responseData)
      throw new Error(responseData.error?.message || 'Failed to send voice message')
    }

    // Создаем запись в базе данных
    const message = await prisma.whatsAppMessage.create({
      data: {
        whatsappId: responseData.messages[0].id,
        from: chat.account.phoneNumber,
        to: chat.phoneNumber,
        type: 'voice',
        content: JSON.stringify({
          type: 'voice',
          mediaId: mediaId,
          mime_type: 'audio/ogg',
          voice: true
        }),
        timestamp: new Date(),
        status: 'sent',
        accountId: chat.account.id,
        chatId: chat.id,
        isAssistant: false
      }
    })

    return NextResponse.json({
      success: true,
      messageId: message.id,
      mediaId: mediaId
    })
  } catch (error: any) {
    console.error('Error sending voice message:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send voice message' },
      { status: 500 }
    )
  }
} 