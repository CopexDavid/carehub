import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { downloadMedia } from '@/lib/whatsapp'

export async function GET(
  request: Request,
  { params }: { params: { mediaId: string } }
) {
  try {
    const { mediaId } = params

    // Находим медиа файл
    const mediaFile = await prisma.mediaFile.findUnique({
      where: { whatsappId: mediaId },
      include: { message: { include: { account: true } } }
    })

    if (!mediaFile || !mediaFile.message || !mediaFile.message.account) {
      return new NextResponse('Media file not found', { status: 404 })
    }

    // TODO: В будущем здесь нужно будет получать файл из файловой системы или облачного хранилища
    // Пока получаем заново из WhatsApp API
    const buffer = await downloadMedia(mediaId, mediaFile.message.account.accessToken)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': mediaFile.mimeType,
        'Content-Length': buffer.byteLength.toString()
      }
    })
  } catch (error) {
    console.error('Error streaming media:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 