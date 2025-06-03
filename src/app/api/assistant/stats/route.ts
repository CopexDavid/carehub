import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Получаем активный аккаунт с настройками ассистента
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true },
      include: {
        assistantSettings: true,
        chats: {
          where: { assistantEnabled: true },
          include: {
            messages: {
              orderBy: { timestamp: 'desc' },
              take: 1
            }
          }
        }
      }
    })

    if (!account) {
      return NextResponse.json(
        { error: 'Активный WhatsApp аккаунт не найден' },
        { status: 404 }
      )
    }

    // Получаем все сообщения для подсчета статистики
    const messages = await prisma.whatsAppMessage.findMany({
      where: {
        accountId: account.id,
        chat: { assistantEnabled: true }
      },
      orderBy: { timestamp: 'desc' }
    })

    // Подсчитываем статистику
    const totalMessages = messages.length
    const successfulMessages = messages.filter(msg => msg.status === 'delivered').length
    const successRate = totalMessages > 0 ? successfulMessages / totalMessages : 0

    // Вычисляем среднее время ответа (в секундах)
    let totalResponseTime = 0
    let responseCount = 0

    for (let i = 1; i < messages.length; i++) {
      if (messages[i].from !== messages[i-1].from) {
        const responseTime = (new Date(messages[i-1].timestamp).getTime() - new Date(messages[i].timestamp).getTime()) / 1000
        if (responseTime > 0 && responseTime < 300) { // Учитываем только ответы быстрее 5 минут
          totalResponseTime += responseTime
          responseCount++
        }
      }
    }

    const avgResponseTime = responseCount > 0 ? totalResponseTime / responseCount : 0

    // Форматируем данные чатов
    const activeChats = account.chats.map(chat => ({
      id: chat.id,
      name: chat.displayName || chat.phoneNumber,
      phoneNumber: chat.phoneNumber,
      isEnabled: chat.assistantEnabled,
      lastActivity: chat.messages[0]?.timestamp || chat.lastMessageAt,
      messagesCount: messages.filter(msg => msg.chatId === chat.id).length
    }))

    return NextResponse.json({
      totalMessages,
      avgResponseTime,
      successRate,
      activeChats: activeChats.length,
      chats: activeChats,
      assistant: {
        name: account.assistantSettings?.name || 'AI Ассистент',
        status: account.assistantSettings?.status || 'inactive',
        model: account.assistantSettings?.model || 'gpt-4'
      }
    })
  } catch (error) {
    console.error('Error fetching assistant stats:', error)
    return NextResponse.json(
      { error: 'Не удалось получить статистику ассистента' },
      { status: 500 }
    )
  }
} 