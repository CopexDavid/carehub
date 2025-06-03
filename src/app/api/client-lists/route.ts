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

    // Создаем все записи в одной транзакции
    const result = await prisma.$transaction(async (tx) => {
      console.log('Starting transaction...')
      console.log('Creating client list with data:', { name, description, userId: user.id })

      try {
        // 1. Создаем базу клиентов (только основные данные)
        const clientList = await tx.clientList.create({
      data: {
        name,
        description,
            userId: user.id
          }
        })

        console.log('Created client list:', clientList)

        // 2. Создаем записи номеров телефонов
        console.log('Creating phone numbers...')
        const phoneNumbersCreated = await tx.phoneNumber.createMany({
          data: phoneNumbers.map(phone => ({
            phone,
            clientListId: clientList.id
          }))
        })

        console.log('Created phone numbers:', phoneNumbersCreated)

        // 3. Создаем клиентов
        console.log('Creating/updating clients...')
        const createdClients = []
        for (const phone of phoneNumbers) {
          try {
            const client = await tx.client.upsert({
              where: { phoneNumber: phone },
              create: {
                phoneNumber: phone,
                tags: '',
                lists: {
                  connect: { id: clientList.id }
                }
              },
              update: {
                lists: {
                  connect: { id: clientList.id }
                }
              }
            })
            createdClients.push(client)
          } catch (error) {
            console.error('Error creating/updating client with phone:', phone, error)
            throw error
          }
        }

        console.log('Created/updated clients count:', createdClients.length)

        // 4. Получаем финальный результат
        const finalResult = await tx.clientList.findUnique({
          where: { id: clientList.id },
      include: {
            phoneNumbers: true,
            clients: true
          }
        })

        console.log('Transaction completed successfully')
        return finalResult
      } catch (error) {
        console.error('Transaction error:', error)
        throw error
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating client list:', error)
    // Возвращаем более подробную информацию об ошибке
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