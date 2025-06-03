import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { phoneNumberId, accessToken } = await req.json()

    if (!phoneNumberId || !accessToken) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Тестовый запрос к WhatsApp API для проверки подключения
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.error?.message || 'Failed to connect to WhatsApp API' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      data: {
        id: data.id,
        displayPhoneNumber: data.display_phone_number,
        qualityRating: data.quality_rating,
      }
    })
  } catch (error) {
    console.error('Error testing WhatsApp connection:', error)
    return NextResponse.json(
      { error: 'Failed to test WhatsApp connection' },
      { status: 500 }
    )
  }
} 