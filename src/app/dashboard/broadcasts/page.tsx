'use client'

import { useState, useEffect } from 'react'
import { Send, Users, Phone, CheckCircle, Calendar, Clock, FileText, X, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'react-hot-toast'
import { AddClientListModal } from '@/components/modals/AddClientListModal'

// Типы для интерфейса
type BroadcastStatus = 'draft' | 'scheduled' | 'sent' | 'failed'

interface WhatsAppAccount {
  id: string
  name: string
  phoneNumber: string
  isActive: boolean
}

interface MessageTemplate {
  id: string
  name: string
  category: string
  language: string
  status: 'approved'
  components: any
  whatsappId: string | null
  createdAt: string
  account: {
    name: string
    phoneNumber: string
  }
}

interface BroadcastHistory {
  id: string
  name: string
  recipients: number
  sent: number
  delivered: number
  read: number
  date: string
  status: BroadcastStatus
  account: {
    name: string
    phoneNumber: string
  }
  clientList: {
    name: string
  }
  template?: {
    name: string
    category: string
  }
}

interface ClientList {
  id: string
  name: string
  description: string | null
  count: number
  createdAt: string
}

// Моковые данные для истории (позже заменим на реальные)
const broadcastHistory: BroadcastHistory[] = [
  { 
    id: '1', 
    name: 'Анонс новых поступлений', 
    recipients: 1250, 
    sent: 1232, 
    delivered: 1145, 
    read: 890, 
    date: '15.06.2023', 
    status: 'sent',
    account: {
      name: 'Аккаунт 1',
      phoneNumber: '+7 (123) 456-78-90'
    },
    clientList: {
      name: 'База клиентов 1'
    }
  },
  { 
    id: '2', 
    name: 'Акция июня', 
    recipients: 867, 
    sent: 867, 
    delivered: 812, 
    read: 654, 
    date: '10.06.2023', 
    status: 'sent',
    account: {
      name: 'Аккаунт 2',
      phoneNumber: '+7 (123) 456-78-90'
    },
    clientList: {
      name: 'База клиентов 2'
    }
  },
  { 
    id: '3', 
    name: 'Важное обновление условий доставки', 
    recipients: 1254, 
    sent: 1254, 
    delivered: 1203, 
    read: 978, 
    date: '02.06.2023', 
    status: 'sent',
    account: {
      name: 'Аккаунт 3',
      phoneNumber: '+7 (123) 456-78-90'
    },
    clientList: {
      name: 'База клиентов 3'
    }
  },
  { 
    id: '4', 
    name: 'Летняя распродажа', 
    recipients: 1254, 
    sent: 0, 
    delivered: 0, 
    read: 0, 
    date: '25.06.2023 (запланировано)', 
    status: 'scheduled',
    account: {
      name: 'Аккаунт 4',
      phoneNumber: '+7 (123) 456-78-90'
    },
    clientList: {
      name: 'База клиентов 4'
    }
  },
  { 
    id: '5', 
    name: 'Черновик рассылки', 
    recipients: 0, 
    sent: 0, 
    delivered: 0, 
    read: 0, 
    date: '-', 
    status: 'draft',
    account: {
      name: 'Аккаунт 5',
      phoneNumber: '+7 (123) 456-78-90'
    },
    clientList: {
      name: 'База клиентов 5'
    }
  },
]

const getStatusBadge = (status: BroadcastStatus) => {
  switch (status) {
    case 'draft':
      return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Черновик</span>
    case 'scheduled':
      return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Запланировано</span>
    case 'sent':
      return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Отправлено</span>
    case 'failed':
      return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Ошибка</span>
    default:
      return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Неизвестно</span>
  }
}

export default function BroadcastsPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'history'>('create')
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  const [selectedClientList, setSelectedClientList] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [broadcastName, setBroadcastName] = useState('')
  const [scheduledTime, setScheduledTime] = useState<boolean>(false)
  const [scheduledDate, setScheduledDate] = useState('')
  const [scheduledTimeValue, setScheduledTimeValue] = useState('')
  const [whatsappAccounts, setWhatsappAccounts] = useState<WhatsAppAccount[]>([])
  const [templates, setTemplates] = useState<MessageTemplate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [clientLists, setClientLists] = useState<ClientList[]>([])
  const [loadingClientLists, setLoadingClientLists] = useState(true)
  const [clientListsError, setClientListsError] = useState<string | null>(null)
  const [broadcasts, setBroadcasts] = useState<BroadcastHistory[]>([])
  const [loadingBroadcasts, setLoadingBroadcasts] = useState(true)
  const [broadcastsError, setBroadcastsError] = useState<string | null>(null)
  const [isAddClientListModalOpen, setIsAddClientListModalOpen] = useState(false)

  // Загрузка активных WhatsApp аккаунтов
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/whatsapp/accounts/active')
        if (!response.ok) throw new Error('Failed to fetch accounts')
        const data = await response.json()
        setWhatsappAccounts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке аккаунтов')
        toast.error('Ошибка при загрузке аккаунтов WhatsApp')
      } finally {
        setLoading(false)
      }
    }

    fetchAccounts()
  }, [])

  // Загрузка подтвержденных шаблонов
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('/api/templates?status=approved')
        if (!response.ok) throw new Error('Failed to fetch templates')
        const data = await response.json()
        setTemplates(data)
      } catch (err) {
        toast.error('Ошибка при загрузке шаблонов')
      }
    }

    fetchTemplates()
  }, [])

  // Загрузка списков клиентов
  useEffect(() => {
    const fetchClientLists = async () => {
      try {
        setLoadingClientLists(true)
        const response = await fetch('/api/client-lists')
        if (!response.ok) throw new Error('Failed to fetch client lists')
        const data = await response.json()
        setClientLists(data)
      } catch (err) {
        setClientListsError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке списков клиентов')
        toast.error('Ошибка при загрузке списков клиентов')
      } finally {
        setLoadingClientLists(false)
      }
    }

    fetchClientLists()
  }, [])

  // Загрузка истории рассылок
  useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        setLoadingBroadcasts(true)
        const response = await fetch('/api/broadcasts')
        if (!response.ok) throw new Error('Failed to fetch broadcasts')
        const data = await response.json()
        setBroadcasts(data)
      } catch (err) {
        setBroadcastsError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке истории рассылок')
        toast.error('Ошибка при загрузке истории рассылок')
      } finally {
        setLoadingBroadcasts(false)
      }
    }

    fetchBroadcasts()
  }, [])

  const handleCreateBroadcast = async () => {
    if (!selectedAccount || !selectedClientList || !selectedTemplate || !broadcastName) {
      toast.error('Пожалуйста, заполните все обязательные поля')
      return
    }

    try {
      const broadcastData = {
        name: broadcastName,
        accountId: selectedAccount,
        clientListId: selectedClientList,
        templateId: selectedTemplate,
        scheduledAt: scheduledTime ? `${scheduledDate}T${scheduledTimeValue}` : null,
      }

      const response = await fetch('/api/broadcasts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(broadcastData),
      })

      if (!response.ok) throw new Error('Failed to create broadcast')

      toast.success('Рассылка успешно создана')
      
      // Сброс формы
      setBroadcastName('')
      setSelectedAccount(null)
      setSelectedClientList(null)
      setSelectedTemplate(null)
      setScheduledTime(false)
      setScheduledDate('')
      setScheduledTimeValue('')
      
      // Обновление истории рассылок
      const broadcastsResponse = await fetch('/api/broadcasts')
      if (broadcastsResponse.ok) {
        const data = await broadcastsResponse.json()
        setBroadcasts(data)
      }
    } catch (error) {
      toast.error('Ошибка при создании рассылки')
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Рассылки</h1>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab('create')}
          className={cn(
              "px-4 py-2 text-sm font-medium rounded-md",
            activeTab === 'create'
              ? "bg-blue-100 text-blue-700"
                : "bg-white text-gray-500 hover:bg-gray-50"
          )}
        >
          Создать рассылку
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={cn(
              "px-4 py-2 text-sm font-medium rounded-md",
            activeTab === 'history'
              ? "bg-blue-100 text-blue-700"
                : "bg-white text-gray-500 hover:bg-gray-50"
          )}
        >
          История рассылок
        </button>
        </div>
      </div>

      {activeTab === 'create' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Название рассылки
              </label>
              <input 
                type="text" 
                value={broadcastName}
                onChange={(e) => setBroadcastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Введите название рассылки"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp аккаунт
              </label>
              <select
                value={selectedAccount || ''}
                onChange={(e) => setSelectedAccount(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Выберите аккаунт</option>
                {whatsappAccounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name} ({account.phoneNumber})
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  База клиентов
                </label>
                <button
                  onClick={() => setIsAddClientListModalOpen(true)}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Создать новую базу
                </button>
                      </div>
              <select
                value={selectedClientList || ''}
                onChange={(e) => setSelectedClientList(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Выберите базу клиентов</option>
                {clientLists.map((list) => (
                  <option key={list.id} value={list.id}>
                    {list.name} ({list.count} контактов)
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Шаблон сообщения
              </label>
              <select
                value={selectedTemplate || ''}
                onChange={(e) => setSelectedTemplate(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Выберите шаблон</option>
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name} ({template.category})
                  </option>
                  ))}
              </select>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  id="scheduledTime"
                  checked={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="scheduledTime" className="ml-2 block text-sm text-gray-700">
                  Запланировать отправку
                </label>
              </div>
              
              {scheduledTime && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Дата
                    </label>
                      <input 
                        type="date" 
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Время
                    </label>
                      <input 
                        type="time" 
                      value={scheduledTimeValue}
                      onChange={(e) => setScheduledTimeValue(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={handleCreateBroadcast}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {scheduledTime ? 'Запланировать рассылку' : 'Создать рассылку'}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              История рассылок
            </h3>
          </div>
          
          {loadingBroadcasts ? (
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
          ) : broadcasts.length > 0 ? (
          <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Название
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Шаблон
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      База клиентов
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Статистика
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Дата
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Статус
                    </th>
                </tr>
              </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {broadcasts.map((broadcast) => (
                    <tr key={broadcast.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{broadcast.name}</div>
                        <div className="text-sm text-gray-500">{broadcast.account.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {broadcast.template?.name || 'Н/Д'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {broadcast.template?.category || 'Н/Д'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{broadcast.clientList.name}</div>
                        <div className="text-sm text-gray-500">{broadcast.recipients} получателей</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Отправлено: {broadcast.sent} / {broadcast.recipients}
                        </div>
                        <div className="text-sm text-gray-500">
                          Прочитано: {broadcast.read} / {broadcast.delivered}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {broadcast.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(broadcast.status)}
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              История рассылок пуста
            </div>
          )}
        </div>
      )}

      <AddClientListModal
        isOpen={isAddClientListModalOpen}
        onClose={() => setIsAddClientListModalOpen(false)}
        onSuccess={() => {
          setIsAddClientListModalOpen(false)
          // Обновляем список клиентов после создания нового
          const fetchClientLists = async () => {
            try {
              const response = await fetch('/api/client-lists')
              if (!response.ok) throw new Error('Failed to fetch client lists')
              const data = await response.json()
              setClientLists(data)
            } catch (err) {
              toast.error('Ошибка при обновлении списка клиентов')
            }
          }
          fetchClientLists()
        }}
      />
    </div>
  )
} 