import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Удаляем всех существующих пользователей
    await prisma.user.deleteMany({})

    // Создаем нового администратора с простым паролем
    const hashedPassword = await hash('password123', 10)
    const admin = await prisma.user.create({
      data: {
        name: 'Administrator',
        email: 'admin@carehub.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    })

    console.log('Created admin:', { ...admin, password: '***' })

    return NextResponse.json({
      message: 'Admin reset successfully',
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Error resetting admin:', error)
    return NextResponse.json(
      { error: 'Failed to reset admin' },
      { status: 500 }
    )
  }
} 