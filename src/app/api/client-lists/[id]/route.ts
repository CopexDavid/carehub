import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/client-lists/[id] - получение информации о базе клиентов
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    const clientList = await prisma.clientList.findUnique({
      where: { id },
      include: {
        phoneNumbers: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!clientList) {
      return NextResponse.json(
        { error: 'База клиентов не найдена' },
        { status: 404 }
      )
    }

    if (clientList.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Нет прав на просмотр этой базы клиентов' },
        { status: 403 }
      )
    }

    return NextResponse.json(clientList)
  } catch (error) {
    console.error('Error fetching client list:', error)
    return NextResponse.json(
      { error: 'Ошибка при загрузке базы клиентов' },
      { status: 500 }
    )
  }
}

// DELETE /api/client-lists/[id] - удаление базы клиентов
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    // Проверяем существование базы и права доступа
    const clientList = await prisma.clientList.findUnique({
      where: { id },
      select: { userId: true }
    })

    if (!clientList) {
      return NextResponse.json(
        { error: 'База клиентов не найдена' },
        { status: 404 }
      )
    }

    if (clientList.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Нет прав на удаление этой базы клиентов' },
        { status: 403 }
      )
    }

    // Удаляем базу и все связанные номера
    await prisma.clientList.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting client list:', error)
    return NextResponse.json(
      { error: 'Ошибка при удалении базы клиентов' },
      { status: 500 }
    )
  }
} 