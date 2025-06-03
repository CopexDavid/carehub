const { hash } = require('bcrypt')
const { PrismaClient } = require('../src/generated/prisma')

const prisma = new PrismaClient()

async function main() {
  const password = 'admin123' // Пароль для входа
  const hashedPassword = await hash(password, 10)

  const user = await prisma.user.upsert({
    where: {
      email: 'admin@carehub.com',
    },
    update: {
      password: hashedPassword,
    },
    create: {
      email: 'admin@carehub.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Администратор создан/обновлен:', {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
}

main()
  .catch((e) => {
    console.error('Ошибка:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 