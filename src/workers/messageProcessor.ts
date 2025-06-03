import { Redis } from '@upstash/redis'
import { OpenAI } from 'openai'
import { sendWhatsAppMessage } from '../app/api/whatsapp/route'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

interface QueuedMessage {
  messageId: string
  from: string
  text: string
  timestamp: number
  status: 'pending' | 'processing' | 'completed' | 'failed'
  retryCount: number
}

async function processMessage(message: QueuedMessage, phoneNumberId: string, accessToken: string) {
  try {
    // Обновляем статус сообщения
    message.status = 'processing'
    await redis.lset('whatsapp_messages', message.messageId, JSON.stringify(message))

    // Получаем ответ от GPT
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `Вы - помощник компании по продаже товаров для инвалидов в Казахстане. 
          Ваша задача - помогать клиентам с выбором товаров, отвечать на вопросы о доставке и оплате.
          Будьте вежливы, профессиональны и эмпатичны.`
        },
        {
          role: "user",
          content: message.text
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })

    const response = completion.choices[0].message.content

    // Отправляем ответ через WhatsApp API
    await sendWhatsAppMessage(message.from, response!, phoneNumberId, accessToken)

    // Обновляем статус сообщения
    message.status = 'completed'
    await redis.lset('whatsapp_messages', message.messageId, JSON.stringify(message))

  } catch (error) {
    console.error('Error processing message:', error)
    message.status = 'failed'
    message.retryCount += 1
    await redis.lset('whatsapp_messages', message.messageId, JSON.stringify(message))

    // Если количество попыток меньше максимального, возвращаем сообщение в очередь
    if (message.retryCount < 3) {
      await redis.lpush('whatsapp_messages', JSON.stringify(message))
    }
  }
}

// Основной цикл обработки сообщений
export async function startMessageProcessor(phoneNumberId: string, accessToken: string) {
  while (true) {
    try {
      // Получаем сообщение из очереди
      const rawMessage = await redis.rpop('whatsapp_messages')
      
      if (rawMessage) {
        const message: QueuedMessage = JSON.parse(rawMessage)
        await processMessage(message, phoneNumberId, accessToken)
      }

      // Небольшая пауза между итерациями
      await new Promise(resolve => setTimeout(resolve, 100))
    } catch (error) {
      console.error('Error in message processor:', error)
      // Пауза перед следующей попыткой
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
} 