import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

const prismaClientOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(prismaClientOptions)
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient(prismaClientOptions)
  }
  prisma = (global as any).prisma
}

// Настраиваем глобальные таймауты для всех запросов
prisma.$use(async (params, next) => {
  const before = Date.now()
  const result = await next(params)
  const after = Date.now()
  
  // Если запрос выполняется дольше 5 минут, прерываем его
  if (after - before > 300000) {
    throw new Error('Query timeout - operation took too long')
  }
  
  return result
})

export { prisma } 