export interface WhatsAppAccount {
  id: string
  name: string
  phoneNumber: string
  isActive: boolean
  verified: boolean
  phoneNumberId: string
  businessAccountId: string
  accessToken: string
  webhookSecret: string
  queueSettings: {
    maxConcurrentMessages: number
    retryAttempts: number
  }
  gptSettings: {
    model: string
    maxTokens: number
    temperature: number
  }
  metrics: {
    totalMessages: number
    avgResponseTime: number
    lastActive: string | null
  }
  expiresAt: string | null
}

export interface QueuedMessage {
  messageId: string
  from: string
  text: string
  timestamp: number
  status: 'pending' | 'processing' | 'completed' | 'failed'
  retryCount: number
  accountId: string // ID аккаунта WhatsApp, через который пришло сообщение
} 