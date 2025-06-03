import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Получение списка групп
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

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

    // Получаем группы для текущего аккаунта
    const groups = await prisma.chatGroup.findMany({
      where: { accountId: account.id },
      orderBy: { createdAt: 'asc' }
    })

    return NextResponse.json({ data: groups })
  } catch (error) {
    console.error('Error fetching chat groups:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chat groups' },
      { status: 500 }
    )
  }
}

// Создание новой группы
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    console.log('Session:', session)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name } = body
    console.log('Creating group with name:', name)

    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'Group name is required' },
        { status: 400 }
      )
    }

    // Получаем активный аккаунт
    console.log('Searching for active WhatsApp account...')
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true }
    })
    console.log('Found account:', account)

    if (!account) {
      return NextResponse.json(
        { error: 'No active WhatsApp account found' },
        { status: 404 }
      )
    }

    // Проверяем, существует ли уже группа с таким именем
    console.log('Checking for existing group...')
    const existingGroup = await prisma.chatGroup.findFirst({
      where: {
        name,
        accountId: account.id
      }
    })
    console.log('Existing group:', existingGroup)

    if (existingGroup) {
      return NextResponse.json(
        { error: 'Group with this name already exists' },
        { status: 400 }
      )
    }

    // Создаем новую группу
    console.log('Creating new group...')
    const group = await prisma.chatGroup.create({
      data: {
        name,
        accountId: account.id
      }
    })
    console.log('Created group:', group)

    return NextResponse.json({ data: group })
  } catch (error) {
    console.error('Error creating chat group:', error)
    return NextResponse.json(
      { error: 'Failed to create chat group' },
      { status: 500 }
    )
  }
} 