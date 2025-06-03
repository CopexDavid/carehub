import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const {
      name,
      accountId,
      clientListId,
      message,
      scheduled,
      scheduledDate,
      scheduledTime
    } = await request.json()

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    let scheduledAt: Date | null = null
    if (scheduled && scheduledDate && scheduledTime) {
      scheduledAt = new Date(`${scheduledDate}T${scheduledTime}`)
    }

    const draft = await prisma.whatsAppBroadcast.create({
      data: {
        name,
        message: message || '',
        status: 'draft',
        scheduledAt,
        accountId: accountId || null,
        clientListId: clientListId || null
      }
    })

    return NextResponse.json(draft)
  } catch (error) {
    console.error('Error saving broadcast draft:', error)
    return NextResponse.json(
      { error: 'Failed to save broadcast draft' },
      { status: 500 }
    )
  }
} 