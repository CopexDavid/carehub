const { PrismaClient } = require('../src/generated/prisma')

const prisma = new PrismaClient()

async function main() {
  // Создаем тестового администратора
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@carehub.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@carehub.com',
      password: '$2b$10$N67.z/XuIvtMrC76Vnvdxu6o9n/d6ufGx94qFJv7jcs4xg59Riu6a', // 123456
      role: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  console.log(`Создан пользователь: ${adminUser.name} (${adminUser.email})`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 