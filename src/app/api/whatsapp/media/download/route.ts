import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { downloadMedia } from '@/lib/whatsapp'

export async function POST(request: Request) {
  try {
    const { mediaId, messageId, type, mimeType } = await request.json()

    if (!mediaId || !messageId || !type || !mimeType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Получаем сообщение и аккаунт
    const message = await prisma.whatsAppMessage.findUnique({
      where: { id: messageId },
      include: { account: true }
    })

    if (!message || !message.account) {
      return NextResponse.json(
        { error: 'Message or account not found' },
        { status: 404 }
      )
    }

    // Скачиваем медиа файл
    const buffer = await downloadMedia(mediaId, message.account.accessToken)

    // Сохраняем медиа файл в базе
    const mediaFile = await prisma.mediaFile.create({
      data: {
        whatsappId: mediaId,
        type,
        mimeType,
        url: `/api/whatsapp/media/stream/${mediaId}`, // URL для стриминга файла
        size: buffer.byteLength,
        messageId: message.id
      }
    })

    // TODO: Сохранить buffer в файловой системе или облачном хранилище
    // Пока сохраняем только метаданные

    return NextResponse.json({
      success: true,
      mediaFile
    })
  } catch (error: any) {
    console.error('Error downloading media:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to download media' },
      { status: 500 }
    )
  }
} 