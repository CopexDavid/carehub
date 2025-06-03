import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { headers } from 'next/headers'

// Функция для форматирования сообщений
const formatMessage = (message: any) => ({
  id: message.id,
  content: message.content,
  type: message.type,
  status: message.status,
  timestamp: message.timestamp,
  from: message.from,
  to: message.to
})

export async function GET(
  request: NextRequest,
  { params }: { params: { chatId: string } }
) {
  const chatId = params.chatId
  
  // Устанавливаем заголовки для SSE
  const headers = new Headers({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })

  const stream = new TransformStream()
  const writer = stream.writable.getWriter()
  const encoder = new TextEncoder()

  // Функция для отправки данных клиенту
  const sendData = async (data: any) => {
    await writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
  }

  // Запускаем бесконечный цикл проверки новых сообщений
  const interval = setInterval(async () => {
    try {
      // Получаем последние сообщения
      const messages = await prisma.whatsAppMessage.findMany({
        where: { chatId },
        orderBy: { timestamp: 'desc' },
        take: 50
      })

      // Получаем информацию о чате
      const chat = await prisma.whatsAppChat.findUnique({
        where: { id: chatId }
      })

      await sendData({
        messages: messages.map(formatMessage),
        chat: {
          id: chat?.id,
          unreadCount: chat?.unreadCount,
          lastMessageAt: chat?.lastMessageAt
        }
      })
    } catch (error) {
      console.error('Error fetching updates:', error)
    }
  }, 2000) // Проверяем каждые 2 секунды

  // Очищаем интервал при закрытии соединения
  request.signal.addEventListener('abort', () => {
    clearInterval(interval)
  })

  return new Response(stream.readable, { headers })
} 