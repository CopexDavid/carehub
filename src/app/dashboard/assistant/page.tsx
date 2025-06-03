'use client'

import { useState, useEffect } from 'react'
import { Bot, BarChart2, MessageSquare, Clock, Users, Sparkles, Settings, X, ArrowRight, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { AssistantSettingsModal } from '@/components/modals/AssistantSettingsModal'

interface AssistantSettings {
  id: string
  name: string
  model: string
  openAiKey: string
  assistantId?: string
  isConfigured: boolean
  status: string
  errorMessage?: string
  accountId: string
}

interface ChatStats {
  totalMessages: number
  avgResponseTime: string
  successRate: number
  activeChats: number
}

interface AssistantChat {
  id: string
  name: string
  phoneNumber: string
  isEnabled: boolean
  lastActivity: string
  messagesCount: number
}

interface Stats {
  totalMessages: number
  avgResponseTime: number
  successRate: number
  activeChats: number
  chats: {
    id: string
    name: string
    phoneNumber: string
    isEnabled: boolean
    lastActivity: string
    messagesCount: number
  }[]
}

interface AssistantStats {
  totalMessages: number
  avgResponseTime: number
  successRate: number
  activeChats: number
  chats: {
    id: string
    name: string
    phoneNumber: string
    isEnabled: boolean
    lastActivity: string
    messagesCount: number
  }[]
  assistant: {
    name: string
    status: string
    model: string
  }
}

export default function AssistantPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [settings, setSettings] = useState<AssistantSettings | null>(null)
  const [stats, setStats] = useState<AssistantStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'chats' | 'stats'>('overview')

  // Загрузка настроек
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/assistant/settings')
        const data = await response.json()
        
        if (!response.ok) {
          if (response.status === 404) {
            toast.error('Не найден активный WhatsApp аккаунт. Пожалуйста, сначала настройте и активируйте WhatsApp аккаунт.')
          } else {
            toast.error(data.error || 'Не удалось загрузить настройки')
          }
          return
        }
        
        setSettings(data)
      } catch (error) {
        console.error('Error loading settings:', error)
        toast.error('Не удалось загрузить настройки')
      } finally {
        setLoading(false)
      }
    }

    fetchSettings()
  }, [])

  // Загрузка статистики
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setStatsLoading(true)
        const response = await fetch('/api/assistant/stats')
        const data = await response.json()
        
        if (!response.ok) {
          if (response.status === 404) {
            toast.error('Не найден активный WhatsApp аккаунт')
          } else {
            toast.error(data.error || 'Не удалось загрузить статистику')
          }
          return
        }
        
        setStats(data)
      } catch (error) {
        console.error('Error loading stats:', error)
        toast.error('Не удалось загрузить статистику')
      } finally {
        setStatsLoading(false)
      }
    }

    fetchStats()
  }, [])

  // Сохранение настроек
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!settings) return

    try {
      setSaving(true)
      const response = await fetch('/api/assistant/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      })

      if (!response.ok) throw new Error('Failed to save settings')
      toast.success('Настройки сохранены')
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error saving settings:', error)
      toast.error('Не удалось сохранить настройки')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (field: keyof AssistantSettings, value: string | number) => {
    if (!settings) return
    setSettings({ ...settings, [field]: value })
  }

  // Включение/отключение ассистента для чата
  const toggleChatAssistant = async (chatId: string, enabled: boolean) => {
    try {
      const response = await fetch(`/api/assistant/chats/${chatId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assistantEnabled: enabled }),
      })

      if (!response.ok) throw new Error('Failed to update chat')
      
      // Обновляем локальное состояние
      setStats(prev => {
        if (!prev) return prev
        return {
          ...prev,
          chats: prev.chats.map(chat => 
            chat.id === chatId ? { ...chat, isEnabled: enabled } : chat
          )
        }
      })

      toast.success(`Ассистент ${enabled ? 'включен' : 'отключен'} для выбранного чата`)
    } catch (error) {
      console.error('Error toggling chat assistant:', error)
      toast.error('Не удалось обновить настройки чата')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            <Bot className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {stats?.assistant?.name || "ИИ Ассистент"}
          </h1>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <Settings className="h-4 w-4 mr-2" />
          Настройки
        </button>
      </div>

      {/* Карточка статуса */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={cn(
              "p-2 rounded-full",
              stats?.assistant?.status === 'active' ? "bg-green-100" : "bg-yellow-100"
            )}>
              <Sparkles className={cn(
                "h-5 w-5",
                stats?.assistant?.status === 'active' ? "text-green-600" : "text-yellow-600"
              )} />
            </div>
            <div className="ml-3">
              <h2 className="text-sm font-medium text-gray-900">Статус ассистента</h2>
              <p className={cn(
                "text-sm",
                stats?.assistant?.status === 'active' ? "text-green-600" : "text-yellow-600"
              )}>
                {stats?.assistant?.status === 'active' ? 'Активен и готов к работе' : 'Не настроен'}
              </p>
            </div>
          </div>
          <div className={cn(
            "px-2.5 py-1 rounded-full text-xs font-medium",
            stats?.assistant?.status === 'active' 
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          )}>
            {stats?.assistant?.status === 'active' ? 'Онлайн' : 'Офлайн'}
          </div>
        </div>
      </div>

      {/* Табы */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === 'overview'
              ? "bg-purple-100 text-purple-700"
              : "bg-white text-gray-600 hover:bg-gray-50"
          )}
        >
          <BarChart2 className="h-4 w-4 mr-2" />
          Обзор
        </button>
        <button
          onClick={() => setActiveTab('chats')}
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === 'chats'
              ? "bg-purple-100 text-purple-700"
              : "bg-white text-gray-600 hover:bg-gray-50"
          )}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Чаты
        </button>
      </div>

      {/* Контент активной вкладки */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {statsLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-pulse">
                <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
            ))
          ) : stats ? (
            <>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Всего сообщений</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalMessages}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Среднее время ответа</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.avgResponseTime.toFixed(1)}с</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Успешность</p>
                    <p className="text-2xl font-semibold text-gray-900">{(stats.successRate * 100).toFixed(1)}%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-amber-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Активные чаты</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.activeChats}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-4 text-center py-4 text-gray-500">
              Не удалось загрузить статистику
            </div>
          )}
        </div>
      )}

      {activeTab === 'chats' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Подключенные чаты</h3>
          </div>
          {statsLoading ? (
            <div className="p-4">
              <div className="animate-pulse space-y-4">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="h-4 w-48 bg-gray-200 rounded"></div>
                        <div className="h-3 w-32 bg-gray-200 rounded mt-2"></div>
                      </div>
                    </div>
                    <div className="h-8 w-20 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : stats?.chats && stats.chats.length > 0 ? (
            <ul role="list" className="divide-y divide-gray-200">
              {stats.chats.map((chat) => (
                <li key={chat.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{chat.name}</div>
                        <div className="text-sm text-gray-500">{chat.phoneNumber}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-500">
                        <div>Последняя активность: {new Date(chat.lastActivity).toLocaleString()}</div>
                        <div>Сообщений: {chat.messagesCount}</div>
                      </div>
                      <button
                        onClick={() => toggleChatAssistant(chat.id, !chat.isEnabled)}
                        className={cn(
                          "px-3 py-1 text-sm font-medium rounded-md",
                          chat.isEnabled
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        )}
                      >
                        {chat.isEnabled ? 'Включен' : 'Отключен'}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Нет доступных чатов
            </div>
          )}
        </div>
      )}

      {/* Модальное окно настроек */}
      <AssistantSettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
        onChange={handleChange}
        saving={saving}
      />
    </div>
  )
} 