'use client'

import Link from 'next/link'
import { 
  MessageSquare, 
  Send, 
  UserCheck, 
  Users, 
  Bot, 
  Bell, 
  Settings, 
  Plus 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Компонент для статистической карточки
const StatCard = ({ icon: Icon, title, value, color }: { 
  icon: typeof MessageSquare, 
  title: string, 
  value: string | number, 
  color: string 
}) => (
  <div className="bg-white rounded-lg shadow p-5">
    <div className="flex items-center">
      <div className={`rounded-md p-3 ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-5">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
)

export default function DashboardPage() {
  // Моковые данные для чатов
  const recentChats = [
    { id: 1, name: 'Иван Петров', message: 'Добрый день, мне нужна консультация по...' },
    { id: 2, name: 'Мария Сидорова', message: 'Когда будет доступна запись на прием?' },
    { id: 3, name: 'Алексей Иванов', message: 'Спасибо за помощь!' },
    { id: 4, name: 'Ольга Смирнова', message: 'У меня проблема с записью на прием...' },
    { id: 5, name: 'Дмитрий Козлов', message: 'Можно ли перенести прием на другое время?' },
  ]

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Панель управления</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Инфо-панель со статистикой */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            icon={MessageSquare} 
            title="Новых сообщений" 
            value={23} 
            color="bg-blue-500" 
          />
          <StatCard 
            icon={Bot} 
            title="Ответы AI" 
            value={215} 
            color="bg-purple-500" 
          />
          <StatCard 
            icon={UserCheck} 
            title="Ожидают оператора" 
            value={4} 
            color="bg-red-500" 
          />
          <StatCard 
            icon={Users} 
            title="Активных диалогов" 
            value={74} 
            color="bg-green-500" 
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Последние чаты (занимает 2 колонки на десктопе) */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Последние сообщения</h2>
                <Link 
                  href="/dashboard/chats" 
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Смотреть все
                </Link>
              </div>
              <ul className="divide-y divide-gray-200">
                {recentChats.map((chat) => (
                  <li key={chat.id} className="px-5 py-4 hover:bg-gray-50">
                    <Link href={`/dashboard/chats/${chat.id}`} className="block">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {chat.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{chat.name}</p>
                            <p className="text-xs text-gray-500">5м назад</p>
                          </div>
                          <p className="text-sm text-gray-500 truncate">
                            {chat.message}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Новый чат
                </Button>
              </div>
            </div>
          </div>

          {/* Сайдбар с блоками (занимает 1 колонку) */}
          <div className="space-y-6">
            {/* Блок аналитики */}
            <div className="bg-white shadow rounded-lg p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Активность диалогов</h3>
              <div className="aspect-w-1 aspect-h-1">
                <div className="h-48 w-full rounded-md bg-blue-50 flex items-center justify-center relative">
                  {/* Здесь будет диаграмма. В данном случае - заглушка */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-blue-100 relative flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full bg-blue-200 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center">
                          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 h-8 w-8 rounded-full bg-green-400"></div>
                      <div className="absolute bottom-0 left-4 h-10 w-10 rounded-full bg-purple-400"></div>
                      <div className="absolute top-4 left-0 h-6 w-6 rounded-full bg-red-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-gray-500">Чаты</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-green-400 mr-2"></span>
                  <span className="text-gray-500">Ответы AI</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-purple-400 mr-2"></span>
                  <span className="text-gray-500">Операторы</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-red-400 mr-2"></span>
                  <span className="text-gray-500">Ожидание</span>
                </div>
              </div>
            </div>

            {/* Блок быстрых действий */}
            <div className="bg-white shadow rounded-lg p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Быстрые действия</h3>
              <div className="space-y-3">
                <Link href="/dashboard/messages/create" className="flex items-center p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                  <Send className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Новая рассылка</span>
                </Link>
                <Link href="/dashboard/ai-settings" className="flex items-center p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                  <Bot className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Настроить AI ассистента</span>
                </Link>
                <Link href="/dashboard/notifications" className="flex items-center p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                  <Bell className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Уведомления</span>
                </Link>
                <Link href="/dashboard/settings" className="flex items-center p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                  <Settings className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Настройки аккаунта</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 