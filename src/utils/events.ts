// Хранилище активных подключений
export const activeConnections = new Map<string, (data: any) => Promise<void>>()

// Функция для отправки уведомлений всем подключенным клиентам
export async function notifyClients(data: any) {
  const promises = Array.from(activeConnections.values()).map(sendEvent => 
    sendEvent(data).catch(console.error)
  )
  await Promise.all(promises)
} 