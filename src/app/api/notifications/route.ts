import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/notifications - получение списка уведомлений
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // В будущем здесь будет реальная логика получения уведомлений из базы данных
    // Пока возвращаем моковые данные
    const notifications = [
      {
        id: '1',
        type: 'warning',
        title: 'Обновление шаблона',
        message: 'Шаблон "Акция июня" ожидает проверки',
        createdAt: new Date().toISOString(),
        read: false
      },
      {
        id: '2',
        type: 'success',
        title: 'Успешная интеграция',
        message: 'WhatsApp Business API успешно подключен',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        read: true
      },
      {
        id: '3',
        type: 'error',
        title: 'Ошибка отправки',
        message: 'Не удалось отправить сообщение +7 (XXX) XXX-XX-XX',
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        read: false
      }
    ]

    return NextResponse.json(notifications)
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json(
      { error: 'Ошибка при загрузке уведомлений' },
      { status: 500 }
    )
  }
} 