import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'

async function main() {
  const password = await hash('password123', 10)
  
  // Проверяем, существует ли уже пользователь
  const existingUser = await prisma.user.findUnique({
    where: {
      email: 'admin@carehub.com',
    },
  })

  if (existingUser) {
    console.log('Пользователь уже существует')
    return
  }

  // Создаем тестового админа
  const admin = await prisma.user.create({
    data: {
      name: 'Администратор',
      email: 'admin@carehub.com',
      password,
      role: 'ADMIN',
    },
  })
  console.log('Создан администратор:', admin.email)

  // Создаем тестового врача
  const doctor = await prisma.user.create({
    data: {
      name: 'Доктор Иванов',
      email: 'doctor@carehub.com',
      password,
      role: 'DOCTOR',
    },
  })
  console.log('Создан врач:', doctor.email)

  // Создаем тестового пациента
  const patientUser = await prisma.user.create({
    data: {
      name: 'Пациент Петров',
      email: 'patient@carehub.com',
      password,
      role: 'PATIENT',
    },
  })
  
  // Связываем пациента с профилем пациента
  const patient = await prisma.patient.create({
    data: {
      userId: patientUser.id,
      dateOfBirth: new Date('1990-01-01'),
      gender: 'Мужской',
      phone: '+7 (900) 123-45-67',
      address: 'г. Москва, ул. Примерная, д. 1',
    },
  })
  console.log('Создан пациент:', patientUser.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 