import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Обновление группы
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
    const { name } = body

    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'Group name is required' },
        { status: 400 }
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

    // Проверяем, существует ли уже группа с таким именем
    const existingGroup = await prisma.chatGroup.findFirst({
      where: {
        name,
        accountId: account.id,
        id: { not: params.id }
      }
    })

    if (existingGroup) {
      return NextResponse.json(
        { error: 'Group with this name already exists' },
        { status: 400 }
      )
    }

    // Обновляем группу
    const group = await prisma.chatGroup.update({
      where: { id: params.id },
      data: { name }
    })

    return NextResponse.json({ data: group })
  } catch (error) {
    console.error('Error updating chat group:', error)
    return NextResponse.json(
      { error: 'Failed to update chat group' },
      { status: 500 }
    )
  }
}

// Удаление группы
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

    // Получаем группу
    const group = await prisma.chatGroup.findUnique({
      where: { id: params.id }
    })

    if (!group) {
      return NextResponse.json(
        { error: 'Group not found' },
        { status: 404 }
      )
    }

    // Проверяем, не является ли группа дефолтной
    if (group.isDefault) {
      return NextResponse.json(
        { error: 'Cannot delete default group' },
        { status: 400 }
      )
    }

    // Удаляем группу
    await prisma.chatGroup.delete({
      where: { id: params.id }
    })

    // Обновляем чаты, которые использовали эту группу
    await prisma.whatsAppChat.updateMany({
      where: { group: group.name },
      data: { group: null }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting chat group:', error)
    return NextResponse.json(
      { error: 'Failed to delete chat group' },
      { status: 500 }
    )
  }
} 