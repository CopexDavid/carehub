import { prisma } from '../src/lib/prisma'

async function deleteChats() {
  try {
    // Сначала удаляем все сообщения
    await prisma.whatsAppMessage.deleteMany({})
    
    // Затем удаляем все чаты
    await prisma.whatsAppChat.deleteMany({})
    
    console.log('Все чаты и сообщения успешно удалены')
  } catch (error) {
    console.error('Ошибка при удалении:', error)
  } finally {
    await prisma.$disconnect()
  }
}

deleteChats() 