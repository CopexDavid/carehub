const { hash } = require('bcrypt')
const { PrismaClient } = require('../src/generated/prisma')

const prisma = new PrismaClient()

const operators = [
  { email: 'operator1@carehub.com', password: 'operator111', name: 'Оператор 1' },
  { email: 'operator2@carehub.com', password: 'operator222', name: 'Оператор 2' },
  { email: 'operator3@carehub.com', password: 'operator333', name: 'Оператор 3' },
  { email: 'operator4@carehub.com', password: 'operator444', name: 'Оператор 4' },
  { email: 'operator5@carehub.com', password: 'operator555', name: 'Оператор 5' },
  { email: 'operator6@carehub.com', password: 'operator666', name: 'Оператор 6' },
]

async function main() {
  console.log('Начинаю создание операторов...')

  for (const operator of operators) {
    const hashedPassword = await hash(operator.password, 10)

    const user = await prisma.user.upsert({
      where: {
        email: operator.email,
      },
      update: {
        password: hashedPassword,
      },
      create: {
        email: operator.email,
        name: operator.name,
        password: hashedPassword,
        role: 'OPERATOR',
      },
    })

    console.log('Оператор создан/обновлен:', {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  }

  console.log('Все операторы успешно созданы!')
}

main()
  .catch((e) => {
    console.error('Ошибка:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 