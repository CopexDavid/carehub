// Вспомогательная функция для отправки сообщений через WhatsApp API
export async function sendWhatsAppMessage(to: string, message: string, phoneNumberId: string, accessToken: string) {
  const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: to,
      type: 'text',
      text: { body: message }
    })
  })

  if (!response.ok) {
    throw new Error(`WhatsApp API error: ${response.statusText}`)
  }

  return response.json()
} 