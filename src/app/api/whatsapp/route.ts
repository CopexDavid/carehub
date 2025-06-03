import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'
import { OpenAI } from 'openai'
import { sendWhatsAppMessage } from '@/utils/whatsapp'

// Инициализация Redis для очереди сообщений
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

// Инициализация OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

// Верификация webhook от WhatsApp
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  // Проверяем токен верификации
  if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 })
  }

  return new NextResponse('Forbidden', { status: 403 })
}

// Обработка входящих сообщений
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Проверяем, что это сообщение от WhatsApp
    if (body.object === 'whatsapp_business_account') {
      const entry = body.entry[0]
      const changes = entry.changes[0]
      const value = changes.value

      if (value.messages && value.messages.length > 0) {
        const message = value.messages[0]
        const from = message.from
        const messageId = message.id
        const text = message.text?.body

        // Добавляем сообщение в очередь Redis
        await redis.lpush('whatsapp_messages', JSON.stringify({
          messageId,
          from,
          text,
          timestamp: Date.now(),
          status: 'pending',
          retryCount: 0
        }))

        return new NextResponse('Message queued', { status: 200 })
      }
    }

    return new NextResponse('Not a WhatsApp message', { status: 400 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 