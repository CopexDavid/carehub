import OpenAI from 'openai'
import { WhatsAppMessage } from '@prisma/client'

export class OpenAIService {
  private openai: OpenAI
  private assistantId: string

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
    this.assistantId = process.env.OPENAI_ASSISTANT_ID || ''
  }

  async createThread() {
    const thread = await this.openai.beta.threads.create()
    return thread.id
  }

  async addMessageToThread(threadId: string, message: WhatsAppMessage) {
    await this.openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: JSON.stringify(message.content)
    })
  }

  async runAssistant(threadId: string) {
    const run = await this.openai.beta.threads.runs.create(threadId, {
      assistant_id: this.assistantId
    })

    // Ждем завершения выполнения
    let runStatus = await this.openai.beta.threads.runs.retrieve(threadId, run.id)
    while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
      await new Promise(resolve => setTimeout(resolve, 1000))
      runStatus = await this.openai.beta.threads.runs.retrieve(threadId, run.id)
    }

    if (runStatus.status === 'completed') {
      const messages = await this.openai.beta.threads.messages.list(threadId)
      const lastMessage = messages.data[0]
      
      if (lastMessage.content[0].type === 'text') {
        return lastMessage.content[0].text.value
      }
      
      throw new Error('Ответ ассистента не содержит текста')
    }

    throw new Error('Не удалось получить ответ от ассистента')
  }

  async deleteThread(threadId: string) {
    await this.openai.beta.threads.del(threadId)
  }
} 