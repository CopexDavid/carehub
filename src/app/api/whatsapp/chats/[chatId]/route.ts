import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { WhatsAppChat, WhatsAppMessage } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface ChatResponse {
  id: string
  name: string
  displayName: string | null
  phoneNumber: string
  avatar: string | null
  isOnline: boolean
  lastSeen?: string
  messages: {
    id: string
    text: string
    time: string
    timestamp: string
    sender: 'customer' | 'manager'
    status?: 'sent' | 'delivered' | 'read'
  }[]
}

export async function GET(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const chat = await prisma.whatsAppChat.findUnique({
      where: {
        id: params.chatId,
      },
      include: {
        messages: {
          orderBy: {
            timestamp: 'asc'
          }
        },
        account: true
      }
    })

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      data: formatChat(chat)
    })
  } catch (error) {
    console.error('Error fetching chat:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chat' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { displayName, group } = body

    // Получаем активный аккаунт
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true }
    })

    if (!account) {
      return NextResponse.json(
        { error: 'No active WhatsApp account found' },
        { status: 404 }
      )
    }

    // Если указана группа, проверяем её существование
    if (group !== undefined) {
      if (group) {
        const existingGroup = await prisma.chatGroup.findFirst({
          where: {
            name: group,
            accountId: account.id
          }
        })

        if (!existingGroup) {
          return NextResponse.json(
            { error: 'Group not found' },
            { status: 404 }
          )
        }
      }
    }

    const chat = await prisma.whatsAppChat.update({
      where: { id: params.chatId },
      data: {
        ...(displayName !== undefined && { displayName }),
        ...(group !== undefined && { group })
      }
    })

    return NextResponse.json(chat)
  } catch (error) {
    console.error('Error updating chat:', error)
    return NextResponse.json(
      { error: 'Failed to update chat' },
      { status: 500 }
    )
  }
}

function formatChat(chat: WhatsAppChat & { messages: WhatsAppMessage[], account: any }): ChatResponse {
  return {
    id: chat.id,
    name: chat.displayName || chat.phoneNumber,
    displayName: chat.displayName,
    phoneNumber: chat.phoneNumber,
    avatar: null,
    isOnline: false,
    lastSeen: chat.lastMessageAt.toISOString(),
    messages: chat.messages.map(msg => ({
      id: msg.id,
      text: (msg.content as any).text || '',
      time: msg.timestamp.toLocaleTimeString('ru-RU'),
      timestamp: msg.timestamp.toISOString(),
      sender: msg.from === chat.account.phoneNumber ? 'manager' : 'customer',
      status: msg.status as any
    }))
  }
} 