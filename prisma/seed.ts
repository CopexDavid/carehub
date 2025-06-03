import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Создаем тестовый WhatsApp аккаунт
  const account = await prisma.whatsAppAccount.upsert({
    where: { phoneNumber: '+79001234567' },
    update: {},
    create: {
      name: 'Test Account',
      phoneNumber: '+79001234567',
      phoneNumberId: 'test_phone_id',
      businessAccountId: 'test_business_id',
      accessToken: 'test_access_token',
      isActive: true,
      verified: true
    }
  })

  console.log('Created WhatsApp account:', account)

  // Создаем тестовые чаты
  const chat1 = await prisma.whatsAppChat.create({
    data: {
      phoneNumber: '+79111111111',
      lastMessageAt: new Date(),
      unreadCount: 2,
      accountId: account.id
    }
  })

  const chat2 = await prisma.whatsAppChat.create({
    data: {
      phoneNumber: '+79222222222',
      lastMessageAt: new Date(Date.now() - 3600000),
      unreadCount: 0,
      accountId: account.id
    }
  })

  // Создаем тестовые сообщения
  await prisma.whatsAppMessage.create({
    data: {
      whatsappId: 'msg1',
      from: '+79111111111',
      to: account.phoneNumber,
      type: 'text',
      content: 'Привет! Как дела?',
      timestamp: new Date(),
      status: 'delivered',
      accountId: account.id,
      chatId: chat1.id
    }
  })

  await prisma.whatsAppMessage.create({
    data: {
      whatsappId: 'msg2',
      from: account.phoneNumber,
      to: '+79222222222',
      type: 'text',
      content: 'Добрый день! Чем могу помочь?',
      timestamp: new Date(Date.now() - 3600000),
      status: 'sent',
      accountId: account.id,
      chatId: chat2.id
    }
  })

  console.log('Created test chats and messages')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })