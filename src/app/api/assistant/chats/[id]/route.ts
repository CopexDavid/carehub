import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import OpenAI from 'openai'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const chat = await prisma.whatsAppChat.findUnique({
      where: { id: params.id },
      select: { assistantEnabled: true }
    })

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: chat })
  } catch (error) {
    console.error('Error fetching assistant state:', error)
    return NextResponse.json(
      { error: 'Failed to fetch assistant state' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
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
    const { assistantEnabled } = body

    const chat = await prisma.whatsAppChat.update({
      where: { id: params.id },
      data: { assistantEnabled },
      select: { assistantEnabled: true }
    })

    return NextResponse.json({ data: chat })
  } catch (error) {
    console.error('Error updating assistant state:', error)
    return NextResponse.json(
      { error: 'Failed to update assistant state' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const chat = await prisma.whatsAppChat.findUnique({
      where: { id: params.id },
      include: {
        account: {
          include: {
            assistantSettings: true
          }
        }
      }
    })

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      )
    }

    // Если есть существующий тред, удаляем его в OpenAI
    if (chat.threadId && chat.account.assistantSettings?.openAiKey) {
      const openai = new OpenAI({
        apiKey: chat.account.assistantSettings.openAiKey
      })

      try {
        await openai.beta.threads.del(chat.threadId)
      } catch (error) {
        console.error('Error deleting OpenAI thread:', error)
        // Продолжаем выполнение даже если удаление треда не удалось
      }
    }

    // Обновляем чат, очищая threadId
    await prisma.whatsAppChat.update({
      where: { id: params.id },
      data: { threadId: null }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error clearing assistant chat:', error)
    return NextResponse.json(
      { error: 'Failed to clear assistant chat' },
      { status: 500 }
    )
  }
} 