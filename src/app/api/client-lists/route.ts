import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/client-lists - получение списка всех баз клиентов
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const clientLists = await prisma.clientList.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        phoneNumbers: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(clientLists)
  } catch (error) {
    console.error('Error fetching client lists:', error)
    return NextResponse.json(
      { error: 'Ошибка при загрузке баз клиентов' },
      { status: 500 }
    )
  }
}

// POST /api/client-lists - создание новой базы клиентов
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    console.log('Current session:', session)

    if (!session?.user?.id) {
      console.error('No user session found')
      return NextResponse.json(
        { error: 'Необходимо авторизоваться', code: 'UNAUTHORIZED' },
        { status: 401 }
      )
    }

    const data = await req.json()
    const { name, description, phoneNumbers } = data

    if (!name || !phoneNumbers || !Array.isArray(phoneNumbers)) {
      return NextResponse.json(
        { error: 'Необходимо указать название и список номеров' },
        { status: 400 }
      )
    }

    // Проверяем существование пользователя
    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user) {
      console.error('User not found:', session.user.id)
      return NextResponse.json(
        { error: 'Пользователь не найден', code: 'USER_NOT_FOUND' },
        { status: 404 }
      )
    }

    console.log('Found user:', { id: user.id, email: user.email })

    // Создаем базу клиентов
    console.log('Creating client list with data:', { name, description, userId: user.id })
    const clientList = await prisma.clientList.create({
      data: {
        name,
        description,
        userId: user.id
      }
    })

    console.log('Created client list:', clientList)

    // Создаем записи номеров телефонов пакетами по 1000
    console.log('Creating phone numbers...')
    const BATCH_SIZE = 1000
    for (let i = 0; i < phoneNumbers.length; i += BATCH_SIZE) {
      const batch = phoneNumbers.slice(i, i + BATCH_SIZE)
      await prisma.phoneNumber.createMany({
        data: batch.map(phone => ({
          phone,
          clientListId: clientList.id
        }))
      })
      console.log(`Created phone numbers batch ${i / BATCH_SIZE + 1}/${Math.ceil(phoneNumbers.length / BATCH_SIZE)}`)
    }

    // Создаем или обновляем клиентов пакетами
    console.log('Creating/updating clients...')
    const existingClients = await prisma.client.findMany({
      where: {
        phoneNumber: {
          in: phoneNumbers
        }
      },
      select: {
        phoneNumber: true
      }
    })

    const existingPhones = new Set(existingClients.map(c => c.phoneNumber))
    const newPhones = phoneNumbers.filter(phone => !existingPhones.has(phone))

    // Создаем новых клиентов пакетами
    if (newPhones.length > 0) {
      for (let i = 0; i < newPhones.length; i += BATCH_SIZE) {
        const batch = newPhones.slice(i, i + BATCH_SIZE)
        await prisma.client.createMany({
          data: batch.map(phone => ({
            phoneNumber: phone,
            tags: ''
          })),
          skipDuplicates: true
        })
        console.log(`Created new clients batch ${i / BATCH_SIZE + 1}/${Math.ceil(newPhones.length / BATCH_SIZE)}`)
      }
    }

    // Связываем всех клиентов со списком
    for (let i = 0; i < phoneNumbers.length; i += BATCH_SIZE) {
      const batch = phoneNumbers.slice(i, i + BATCH_SIZE)
      await prisma.$executeRaw`
        INSERT INTO "_ClientToClientList" ("A", "B")
        SELECT c.id, ${clientList.id}
        FROM "Client" c
        WHERE c."phoneNumber" IN (${batch})
        ON CONFLICT DO NOTHING
      `
      console.log(`Connected clients batch ${i / BATCH_SIZE + 1}/${Math.ceil(phoneNumbers.length / BATCH_SIZE)}`)
    }

    // Получаем финальный результат
    const result = await prisma.clientList.findUnique({
      where: { id: clientList.id },
      include: {
        phoneNumbers: true,
        clients: true
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating client list:', error)
    return NextResponse.json(
      { 
        error: 'Ошибка при создании базы клиентов',
        details: error instanceof Error ? error.message : 'Unknown error',
        code: error instanceof Error && 'code' in error ? (error as any).code : null
      },
      { status: 500 }
    )
  }
} 