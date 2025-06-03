import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const accounts = await prisma.whatsAppAccount.findMany({
      where: {
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        phoneNumber: true,
        isActive: true,
      },
    })

    return NextResponse.json(accounts)
  } catch (error) {
    console.error('Error fetching active WhatsApp accounts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch active WhatsApp accounts' },
      { status: 500 }
    )
  }
} 