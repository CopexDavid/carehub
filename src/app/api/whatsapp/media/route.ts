import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')

    if (!url) {
      return new NextResponse('URL parameter is required', { status: 400 })
    }

    // Получаем активный аккаунт для доступа к токену
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true }
    })

    if (!account) {
      console.error('No active WhatsApp account found')
      return new NextResponse('No active WhatsApp account found', { status: 404 })
    }

    console.log('Fetching media from URL:', url)

    // Получаем медиа-файл от WhatsApp API
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${account.accessToken}`,
        'Accept': 'audio/*,*/*'
      }
    })

    if (!response.ok) {
      console.error('Failed to fetch media:', response.status, response.statusText)
      return new NextResponse(`Failed to fetch media: ${response.statusText}`, { status: response.status })
    }

    // Получаем тип контента
    let contentType = response.headers.get('content-type')
    console.log('Original content type:', contentType)
    
    // Если это аудио файл и тип не указан или некорректный, устанавливаем правильный тип
    if (!contentType || contentType === 'application/octet-stream') {
      // Пробуем определить тип по расширению URL или устанавливаем opus
      if (url.toLowerCase().endsWith('.ogg')) {
        contentType = 'audio/ogg'
      } else if (url.toLowerCase().endsWith('.mp3')) {
        contentType = 'audio/mpeg'
      } else if (url.toLowerCase().endsWith('.m4a')) {
        contentType = 'audio/mp4'
      } else {
        contentType = 'audio/ogg;codecs=opus'
      }
    }
    
    console.log('Using content type:', contentType)
    
    // Создаем Response с правильным типом контента
    const audioData = await response.arrayBuffer()
    console.log('Received audio data size:', audioData.byteLength, 'bytes')

    return new NextResponse(audioData, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': audioData.byteLength.toString(),
        'Cache-Control': 'public, max-age=31536000',
        'Accept-Ranges': 'bytes'
      }
    })
  } catch (error) {
    console.error('Error proxying media:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 