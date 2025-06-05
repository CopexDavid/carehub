import { NextRequest } from 'next/server'

const activeConnections = new Map<string, (data: any) => Promise<void>>()

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder()
  const stream = new TransformStream()
  const writer = stream.writable.getWriter()

  const headers = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  }

  const sendEvent = async (data: any) => {
    await writer.write(
      encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
    )
  }

  const clientId = crypto.randomUUID()
  activeConnections.set(clientId, sendEvent)

  req.signal.addEventListener('abort', () => {
    activeConnections.delete(clientId)
  })

  return new Response(stream.readable, { headers })
}

export async function notifyClients(data: any) {
  const promises = Array.from(activeConnections.values()).map(sendEvent => 
    sendEvent(data).catch(console.error)
  )
  await Promise.all(promises)
} 