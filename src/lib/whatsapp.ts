interface SendMessageParams {
  phoneNumberId: string
  to: string
  accessToken: string
  text: string
}

interface SendMediaParams {
  phoneNumberId: string
  to: string
  accessToken: string
  mediaId: string
  type: 'image' | 'document' | 'audio'
  filename?: string
}

interface WhatsAppResponse {
  messaging_product: string
  contacts: Array<{
    input: string
    wa_id: string
  }>
  messages: Array<{
    id: string
  }>
  url?: string
}

export async function uploadMedia({
  file,
  accessToken,
  phoneNumberId
}: {
  file: File
  accessToken: string
  phoneNumberId: string
}): Promise<string> {
  const formData = new FormData()
  
  console.log('Preparing media upload:', {
    originalType: file.type,
    size: file.size,
    phoneNumberId
  })

  formData.append('file', file)
  formData.append('type', 'audio')
  formData.append('messaging_product', 'whatsapp')

  const headers = new Headers({
    'Authorization': `Bearer ${accessToken}`
  })

  const response = await fetch(`https://graph.facebook.com/v19.0/${phoneNumberId}/media`, {
    method: 'POST',
    headers,
    body: formData
  })

  if (!response.ok) {
    const error = await response.json()
    console.error('Media upload error:', error)
    throw new Error(error.error?.message || 'Failed to upload media')
  }

  const data = await response.json()
  console.log('Media upload response:', data)
  return data.id
}

export async function sendWhatsAppMedia({
  phoneNumberId,
  to,
  accessToken,
  mediaId,
  type,
  filename
}: SendMediaParams): Promise<WhatsAppResponse> {
  const url = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type,
      [type]: {
        id: mediaId,
        ...(filename && { filename })
      }
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error?.message || 'Failed to send WhatsApp media')
  }

  return response.json()
}

export async function sendWhatsAppMessage({
  phoneNumberId,
  to,
  accessToken,
  text
}: SendMessageParams): Promise<WhatsAppResponse> {
  if (!phoneNumberId || !to || !accessToken || !text) {
    throw new Error('Missing required parameters for sending WhatsApp message')
  }

  // Валидация и форматирование номера телефона
  let formattedPhone = to.replace(/[^\d+]/g, '')
  if (!formattedPhone.startsWith('+')) {
    formattedPhone = '+' + formattedPhone
  }

  console.log('Sending WhatsApp message:', {
    phoneNumberId: phoneNumberId.substring(0, 5) + '...',
    to: formattedPhone,
    accessTokenLength: accessToken.length,
    textLength: text.length
  })

  const url = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`
  
  try {
    const requestBody = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: formattedPhone,
      type: 'text',
      text: {
        preview_url: false,
        body: text
      }
    }

    console.log('Request body:', JSON.stringify(requestBody, null, 2))

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    const data = await response.json()
    console.log('WhatsApp API raw response:', data)

    if (!response.ok) {
      console.error('WhatsApp API error:', {
        status: response.status,
        statusText: response.statusText,
        error: data.error,
        requestBody
      })
      
      const errorMessage = data.error?.message || 
        data.error?.error_data?.details || 
        `WhatsApp API error: ${response.status} ${response.statusText}`
      
      throw new Error(errorMessage)
    }

    if (!data.messages?.[0]?.id) {
      console.error('Invalid WhatsApp API response format:', data)
      throw new Error('Invalid response format from WhatsApp API')
    }

    return data
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    throw error instanceof Error 
      ? error 
      : new Error('Failed to send WhatsApp message')
  }
}

export async function downloadMedia(mediaId: string, accessToken: string) {
  try {
    // Сначала получаем URL для скачивания
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${mediaId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to get media URL')
    }

    const data = await response.json()

    // Скачиваем файл
    const mediaResponse = await fetch(data.url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!mediaResponse.ok) {
      throw new Error('Failed to download media')
    }

    const buffer = await mediaResponse.arrayBuffer()
    return buffer
  } catch (error) {
    console.error('Error downloading media:', error)
    throw error
  }
}

export async function getMediaUrl(mediaId: string, accessToken: string): Promise<string> {
  const response = await fetch(`https://graph.facebook.com/v19.0/${mediaId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error?.message || 'Failed to get media URL')
  }

  const data = await response.json()
  return data.url
} 