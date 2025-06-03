'use client'

import { MessageSquare, Bot } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8 text-center">
      <div className="bg-blue-100 p-6 rounded-full mb-4">
        <MessageSquare className="h-12 w-12 text-blue-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">Выберите чат</h3>
      <p className="text-gray-500 max-w-md mb-6">
        Выберите чат из списка слева для управления коммуникацией с клиентами через WhatsApp
      </p>
      
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 max-w-md flex items-start">
        <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
          <Bot className="h-5 w-5 text-purple-600" />
        </div>
        <div className="text-left">
          <h4 className="text-sm font-medium text-purple-700 mb-1">ИИ-ассистент готов помочь</h4>
          <p className="text-xs text-gray-600">
            Используйте ИИ-ассистента для предоставления подробной информации о товарах, ответов на частые вопросы и обработки простых запросов клиентов.
          </p>
        </div>
      </div>
    </div>
  )
} 