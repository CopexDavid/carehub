import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { chatId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { chatId } = params
    const since = request.nextUrl.searchParams.get('since')

    if (!since) {
      return new NextResponse('Missing since parameter', { status: 400 })
    }

    // Получаем сообщения после указанного timestamp
    const messages = await prisma.whatsAppMessage.findMany({
      where: {
        chatId,
        timestamp: {
          gt: new Date(since)
        }
      },
      orderBy: {
        timestamp: 'asc'
      }
    })

    // Получаем информацию о чате
    const chat = await prisma.whatsAppChat.findUnique({
      where: { id: chatId },
      select: {
        id: true,
        unreadCount: true,
        lastMessageAt: true
      }
    })

    if (!chat) {
      return new NextResponse('Chat not found', { status: 404 })
    }

    return NextResponse.json({
      messages,
      chat
    })
  } catch (error) {
    console.error('Error fetching missed messages:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 