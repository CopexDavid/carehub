import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import OpenAI from 'openai'

// Получение настроек ассистента
export async function GET() {
  try {
    // Получаем первый активный аккаунт WhatsApp
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true },
      include: { assistantSettings: true }
    })

    if (!account) {
      return NextResponse.json(
        { error: 'Активный WhatsApp аккаунт не найден' },
        { status: 404 }
      )
    }

    // Если настройки ассистента не существуют, создаем их
    if (!account.assistantSettings) {
      const settings = await prisma.assistantSettings.create({
        data: {
          accountId: account.id,
        }
      })
      return NextResponse.json(settings)
    }

    return NextResponse.json(account.assistantSettings)
  } catch (error) {
    console.error('Error fetching assistant settings:', error)
    return NextResponse.json(
      { error: 'Не удалось получить настройки ассистента' },
      { status: 500 }
    )
  }
}

// Обновление настроек ассистента
export async function PUT(request: Request) {
  try {
    const data = await request.json()
    
    // Получаем текущие настройки
    const currentSettings = await prisma.assistantSettings.findUnique({
      where: { id: data.id }
    })

    if (!currentSettings) {
      return NextResponse.json(
        { error: 'Настройки не найдены' },
        { status: 404 }
      )
    }

    // Проверяем подключение к ассистенту только если изменились ключевые параметры
    if (data.openAiKey !== currentSettings.openAiKey || data.assistantId !== currentSettings.assistantId) {
      try {
        const openai = new OpenAI({ apiKey: data.openAiKey })
        
        // Проверяем существование и доступность ассистента
        const assistant = await openai.beta.assistants.retrieve(data.assistantId)
        
        // Если ассистент найден, сохраняем его модель
        data.model = assistant.model
        data.status = 'active'
        data.isConfigured = true
        data.errorMessage = null
      } catch (error) {
        data.status = 'error'
        data.isConfigured = false
        data.errorMessage = error instanceof Error ? error.message : 'Не удалось подключиться к ассистенту'
        
        return NextResponse.json(
          { error: data.errorMessage },
          { status: 400 }
        )
      }
    }

    // Обновляем настройки
    const settings = await prisma.assistantSettings.update({
      where: { id: data.id },
      data: {
        name: data.name,
        model: data.model,
        openAiKey: data.openAiKey,
        assistantId: data.assistantId,
        status: data.status,
        isConfigured: data.isConfigured,
        errorMessage: data.errorMessage
      }
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error updating assistant settings:', error)
    return NextResponse.json(
      { error: 'Не удалось обновить настройки ассистента' },
      { status: 500 }
    )
  }
} 