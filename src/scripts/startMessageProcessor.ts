import { startMessageProcessor } from '../workers/messageProcessor'
import { Redis } from '@upstash/redis'
import { WhatsAppAccount } from '../types/whatsapp'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

async function main() {
  try {
    // Получаем все активные WhatsApp аккаунты
    const accountsData = await redis.get<WhatsAppAccount[]>('whatsapp_accounts')
    const accounts = accountsData || []

    // Запускаем обработчик для каждого активного аккаунта
    const processors = accounts
      .filter((account: WhatsAppAccount) => account.isActive && account.verified)
      .map((account: WhatsAppAccount) => 
        startMessageProcessor(account.phoneNumberId, account.accessToken)
      )

    // Ждем завершения всех обработчиков (хотя они работают бесконечно)
    await Promise.all(processors)
  } catch (error) {
    console.error('Error starting message processors:', error)
    process.exit(1)
  }
}

main() 