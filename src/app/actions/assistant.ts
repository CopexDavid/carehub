'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function getAssistantSettings() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')

  try {
    const settings = await prisma.assistantSettings.findFirst({
      include: {
        account: true
      }
    })
    return settings
  } catch (error) {
    console.error('Error fetching assistant settings:', error)
    throw new Error('Failed to fetch settings')
  }
}

export async function updateAssistantSettings(data: {
  name: string
  model: string
  temperature: number
  maxTokens: number
  prompt: string
  accountId: string
}) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')

  try {
    const settings = await prisma.assistantSettings.upsert({
      where: {
        accountId: data.accountId
      },
      update: {
        name: data.name,
        model: data.model,
        temperature: data.temperature,
        maxTokens: data.maxTokens,
        prompt: data.prompt
      },
      create: {
        name: data.name,
        model: data.model,
        temperature: data.temperature,
        maxTokens: data.maxTokens,
        prompt: data.prompt,
        accountId: data.accountId
      }
    })
    return settings
  } catch (error) {
    console.error('Error updating assistant settings:', error)
    throw new Error('Failed to update settings')
  }
} 