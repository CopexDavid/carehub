import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/client-lists/[id]/export - экспорт базы клиентов в CSV
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

    // Проверяем существование базы и права доступа
    const clientList = await prisma.clientList.findUnique({
      where: { id },
      include: {
        phoneNumbers: true
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
        { error: 'Нет прав на экспорт этой базы клиентов' },
        { status: 403 }
      )
    }

    // Формируем CSV
    const headers = ['Телефон']
    const rows = clientList.phoneNumbers.map(number => [number.phone])
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    // Возвращаем файл
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${clientList.name}.csv"`
      }
    })
  } catch (error) {
    console.error('Error exporting client list:', error)
    return NextResponse.json(
      { error: 'Ошибка при экспорте базы клиентов' },
      { status: 500 }
    )
  }
} 