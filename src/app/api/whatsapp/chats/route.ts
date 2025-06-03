import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const getLastMessageText = (message: any) => {
  if (!message) return 'Нет сообщений'
  
  if (typeof message === 'string') return message
  
  // Если сообщение - объект
  if (message.text) return message.text
  if (message.body) return message.body
  
  switch (message.type) {
    case 'image': return '🖼 Изображение'
    case 'video': return '🎥 Видео'
    case 'document': return '📎 Документ'
    case 'audio': return '🎵 Аудио'
    case 'sticker': return '🏷 Стикер'
    case 'location': return '📍 Локация'
    case 'contact': return '👤 Контакт'
    default: return 'Сообщение'
  }
}

export async function GET() {
  try {
    const chats = await prisma.whatsAppChat.findMany({
      orderBy: { lastMessageAt: 'desc' },
      include: {
        messages: {
          orderBy: { timestamp: 'desc' },
          take: 15, // Получаем только последние 15 сообщений для каждого чата
        }
      }
    })

    const formattedChats = chats.map(chat => ({
      id: chat.id,
      phoneNumber: chat.phoneNumber || '',
      name: chat.displayName || null,
      lastMessage: getLastMessageText(chat.messages[0]?.content),
      time: chat.lastMessageAt || new Date().toISOString(),
      unreadCount: chat.unreadCount || 0,
      isOnline: false,
      messages: chat.messages.map(msg => ({
        id: msg.id,
        content: msg.content,
        from: msg.from,
        timestamp: msg.timestamp.toISOString(),
        status: msg.status,
        isAssistant: msg.isAssistant || false
      })),
      hasMoreMessages: chat.messages.length === 15 // Флаг, указывающий на наличие дополнительных сообщений
    }))

    // Фильтруем чаты без номера телефона
    const validChats = formattedChats.filter(chat => chat.phoneNumber)

    return NextResponse.json(validChats)
  } catch (error) {
    console.error('Error fetching chats:', error)
    return NextResponse.json({ error: 'Failed to fetch chats' }, { status: 500 })
  }
} 