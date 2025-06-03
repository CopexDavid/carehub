import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  try {
    const adminData = {
      id: 'cmadrbmpn0000ptqcinlumncg', // Используем тот же ID, что и в сессии
      name: 'Давид',
      email: 'admin@carehub.com',
      role: 'ADMIN',
      password: await bcrypt.hash('admin123', 10) // Замените на нужный пароль
    }

    const admin = await prisma.user.upsert({
      where: { email: adminData.email },
      update: {
        id: adminData.id,
        name: adminData.name,
        role: adminData.role,
        password: adminData.password
      },
      create: adminData
    })

    console.log('Admin user created/updated:', admin)
  } catch (error) {
    console.error('Error creating admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()