import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Проверяем, существует ли уже админ
    const existingAdmin = await prisma.user.findFirst({
      where: {
        role: 'ADMIN'
      }
    })

    if (existingAdmin) {
      // Обновляем пароль существующего админа
      const hashedPassword = await hash('admin123', 10)
      await prisma.user.update({
        where: { id: existingAdmin.id },
        data: { password: hashedPassword }
      })

      return NextResponse.json({
        message: 'Admin password reset successfully',
        email: existingAdmin.email
      })
    }

    // Создаем нового админа
    const hashedPassword = await hash('admin123', 10)
    const admin = await prisma.user.create({
      data: {
        name: 'Administrator',
        email: 'admin@carehub.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    })

    return NextResponse.json({
      message: 'Admin created successfully',
      email: admin.email
    })
  } catch (error) {
    console.error('Error seeding admin:', error)
    return NextResponse.json(
      { error: 'Failed to seed admin' },
      { status: 500 }
    )
  }
} 