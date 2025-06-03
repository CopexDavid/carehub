const { PrismaClient } = require('../src/generated/prisma')

const prisma = new PrismaClient()

async function main() {
  // Получаем существующий активный аккаунт
  const account = await prisma.whatsAppAccount.findFirst({
    where: { isActive: true }
  })

  if (!account) {
    console.error('No active WhatsApp account found')
    return
  }

  console.log('Found active account:', account.phoneNumber)

  // Создаем тестовые чаты
  const chat1 = await prisma.whatsAppChat.create({
    data: {
      phoneNumber: '+79111111111',
      lastMessageAt: new Date(),
      unreadCount: 2,
      accountId: account.id,
      messages: {
        create: {
          whatsappId: 'test_msg1',
          from: '+79111111111',
          to: account.phoneNumber,
          type: 'text',
          content: { text: 'Привет! Как дела?' },
          timestamp: new Date(),
          status: 'delivered',
          accountId: account.id
        }
      }
    },
    include: {
      messages: true
    }
  })

  const chat2 = await prisma.whatsAppChat.create({
    data: {
      phoneNumber: '+79222222222',
      lastMessageAt: new Date(Date.now() - 3600000),
      unreadCount: 0,
      accountId: account.id,
      messages: {
        create: {
          whatsappId: 'test_msg2',
          from: account.phoneNumber,
          to: '+79222222222',
          type: 'text',
          content: { text: 'Добрый день! Чем могу помочь?' },
          timestamp: new Date(Date.now() - 3600000),
          status: 'sent',
          accountId: account.id
        }
      }
    },
    include: {
      messages: true
    }
  })

  console.log('Created test chats:', {
    chat1: {
      id: chat1.id,
      phoneNumber: chat1.phoneNumber,
      messages: chat1.messages.length
    },
    chat2: {
      id: chat2.id,
      phoneNumber: chat2.phoneNumber,
      messages: chat2.messages.length
    }
  })
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 