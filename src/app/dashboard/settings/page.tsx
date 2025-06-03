'use client'

import { useState, useEffect } from 'react'
import { Settings, Phone, Check, X, Trash, PlusCircle, RefreshCw, AlertTriangle, Info, Power, Pencil } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WhatsAppAccount } from '@/types/whatsapp'
import { toast } from 'react-hot-toast'
import { TestMessageModal } from '@/components/modals/TestMessageModal'

type NewWhatsAppAccount = Omit<WhatsAppAccount, 'id' | 'verified' | 'expiresAt' | 'metrics'>

export default function SettingsPage() {
  const [accounts, setAccounts] = useState<WhatsAppAccount[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newAccount, setNewAccount] = useState<NewWhatsAppAccount>({
    name: '',
    phoneNumber: '',
    isActive: true,
    phoneNumberId: '',
    businessAccountId: '',
    accessToken: '',
    webhookSecret: '',
    queueSettings: {
      maxConcurrentMessages: 10,
      retryAttempts: 3,
    },
    gptSettings: {
      model: 'gpt-3.5-turbo',
      maxTokens: 1000,
      temperature: 0.7,
    }
  })
  const [selectedAccount, setSelectedAccount] = useState<WhatsAppAccount | null>(null)
  const [isTestModalOpen, setIsTestModalOpen] = useState(false)

  // Загрузка аккаунтов при монтировании компонента
  useEffect(() => {
    fetchAccounts()
  }, [])

  // Получение списка аккаунтов
  const fetchAccounts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/whatsapp/accounts')
      if (!response.ok) throw new Error('Failed to fetch accounts')
      const data = await response.json()
      setAccounts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке аккаунтов')
    } finally {
      setLoading(false)
    }
  }

  // Добавление нового аккаунта
  const handleAddAccount = async () => {
    try {
      if (!newAccount.name || !newAccount.phoneNumber || !newAccount.accessToken) {
        return
      }

      const accountToCreate: WhatsAppAccount = {
        ...newAccount,
        id: '', // будет заполнено на сервере
        verified: false,
        expiresAt: null,
        metrics: {
          totalMessages: 0,
          avgResponseTime: 0,
          lastActive: null
        }
      }

      const response = await fetch('/api/whatsapp/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(accountToCreate)
      })

      if (!response.ok) throw new Error('Failed to create account')
      
      await fetchAccounts()
      setShowAddForm(false)
      setNewAccount({
        name: '',
        phoneNumber: '',
        isActive: true,
        phoneNumberId: '',
        businessAccountId: '',
        accessToken: '',
        webhookSecret: '',
        queueSettings: {
          maxConcurrentMessages: 10,
          retryAttempts: 3,
        },
        gptSettings: {
          model: 'gpt-3.5-turbo',
          maxTokens: 1000,
          temperature: 0.7,
        }
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при создании аккаунта')
    }
  }

  // Удаление аккаунта
  const handleDeleteAccount = async (id: string) => {
    try {
      const response = await fetch(`/api/whatsapp/accounts?id=${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete account')
      
      await fetchAccounts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при удалении аккаунта')
    }
  }

  // Изменение статуса активности
  const handleToggleActive = async (id: string) => {
    try {
      const account = accounts.find(a => a.id === id)
      if (!account) return

      const response = await fetch('/api/whatsapp/accounts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...account,
          isActive: !account.isActive
        })
      })

      if (!response.ok) throw new Error('Failed to update account')
      
      await fetchAccounts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при обновлении статуса')
    }
  }

  // Верификация номера
  const handleVerify = async (id: string) => {
    try {
      const account = accounts.find(a => a.id === id)
      if (!account) return

      const response = await fetch('/api/whatsapp/accounts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...account,
          verified: true,
          expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // +1 год
        })
      })

      if (!response.ok) throw new Error('Failed to verify account')
      
      await fetchAccounts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при верификации')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setNewAccount({
      ...newAccount,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  // Функция тестирования подключения
  const handleTestConnection = async (account: WhatsAppAccount | NewWhatsAppAccount) => {
    setSelectedAccount('id' in account ? account : {
      ...account,
      id: '',
      verified: false,
      expiresAt: null,
      metrics: {
        totalMessages: 0,
        avgResponseTime: 0,
        lastActive: null
      }
    })
    setIsTestModalOpen(true)
  }

  // Обновление аккаунта
  const handleUpdateAccount = async () => {
    try {
      if (!selectedAccount) return;

      const response = await fetch('/api/whatsapp/accounts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...selectedAccount,
          ...newAccount,
        })
      })

      if (!response.ok) throw new Error('Failed to update account')
      
      await fetchAccounts()
      setShowAddForm(false)
      setIsEditing(false)
      setSelectedAccount(null)
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при обновлении аккаунта')
    }
  }

  const resetForm = () => {
    setNewAccount({
      name: '',
      phoneNumber: '',
      isActive: true,
      phoneNumberId: '',
      businessAccountId: '',
      accessToken: '',
      webhookSecret: '',
      queueSettings: {
        maxConcurrentMessages: 10,
        retryAttempts: 3,
      },
      gptSettings: {
        model: 'gpt-3.5-turbo',
        maxTokens: 1000,
        temperature: 0.7,
      }
    })
  }

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-100 p-2 rounded-full mr-3">
          <Settings className="h-6 w-6 text-gray-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Настройки</h1>
      </div>
      
      {/* WhatsApp Business API настройки */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">WhatsApp Business API</h2>
            <p className="text-sm text-gray-600 mt-1">
              Управление номерами WhatsApp Business API, которые используются для коммуникации с клиентами.
            </p>
          </div>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Добавить номер
          </button>
        </div>
        
        {/* Форма добавления/редактирования */}
        {showAddForm && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-md font-medium text-gray-900 mb-3">Добавить новый номер WhatsApp</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Название</label>
                <input
                  type="text"
                  name="name"
                  value={newAccount.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Например: Служба поддержки"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Номер телефона</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newAccount.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number ID</label>
                <input
                  type="text"
                  name="phoneNumberId"
                  value={newAccount.phoneNumberId}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Из WhatsApp Cloud API"
                />
                <p className="mt-1 text-xs text-gray-500">
                  ID номера из WhatsApp Cloud API (можно найти в настройках номера)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Account ID</label>
                <input
                  type="text"
                  name="businessAccountId"
                  value={newAccount.businessAccountId}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Из Meta Business Suite"
                />
                <p className="mt-1 text-xs text-gray-500">
                  ID бизнес-аккаунта из Meta Business Suite
                </p>
              </div>
              
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Access Token</label>
                <input
                  type="password"
                  name="accessToken"
                  value={newAccount.accessToken}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Постоянный токен доступа"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Постоянный токен доступа из WhatsApp Cloud API
                </p>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Webhook Secret</label>
                <input
                  type="password"
                  name="webhookSecret"
                  value={newAccount.webhookSecret}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Секретный ключ для вебхуков"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Секретный ключ для верификации вебхуков (опционально)
                </p>
              </div>
              
              <div className="sm:col-span-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    id="isActive"
                    checked={newAccount.isActive}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isActive" className="ml-2 block text-sm text-gray-700">
                    Активен (доступен для использования)
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowAddForm(false)
                  setIsEditing(false)
                  setSelectedAccount(null)
                  resetForm()
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              {isEditing ? (
                <button
                  onClick={handleUpdateAccount}
                  className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
                  disabled={!newAccount.name || !newAccount.phoneNumber || !newAccount.phoneNumberId || !newAccount.businessAccountId || !newAccount.accessToken}
                >
                  Сохранить изменения
                </button>
              ) : (
                <button
                  onClick={async () => {
                    await handleTestConnection(newAccount)
                    handleAddAccount()
                  }}
                  className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
                  disabled={!newAccount.name || !newAccount.phoneNumber || !newAccount.phoneNumberId || !newAccount.businessAccountId || !newAccount.accessToken}
                >
                  Протестировать и добавить
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Таблица аккаунтов */}
        {accounts.length > 0 ? (
          <div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">НАЗВАНИЕ</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">НОМЕР</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">СТАТУС</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ВЕРИФИКАЦИЯ</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">API-КЛЮЧ</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ДЕЙСТВИЯ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {accounts.map((account) => (
                  <tr key={account.id} className="hover:bg-gray-50">
                    <td className="py-4 pl-4 pr-3 text-sm">
                      <div className="font-medium text-gray-900">{account.name}</div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">{account.phoneNumber}</td>
                    <td className="px-3 py-4 text-sm">
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        account.isActive 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      )}>
                        {account.isActive ? "Активен" : "Неактивен"}
                      </span>
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {account.verified ? (
                        <span className="inline-flex items-center text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          Верифицирован
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-yellow-600">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Требуется верификация
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <code className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">
                        {account.accessToken.substring(0, 8)}...
                      </code>
                    </td>
                    <td className="px-3 py-4 text-sm">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleToggleActive(account.id)}
                          className={cn(
                            "text-sm font-medium",
                            account.isActive ? "text-green-600 hover:text-green-700" : "text-gray-600 hover:text-gray-700"
                          )}
                          title={account.isActive ? "Деактивировать" : "Активировать"}
                        >
                          <Power className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleTestConnection(account)}
                          className="text-blue-600 hover:text-blue-700"
                          title="Проверить подключение"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedAccount(account)
                            setNewAccount({
                              name: account.name,
                              phoneNumber: account.phoneNumber,
                              isActive: account.isActive,
                              phoneNumberId: account.phoneNumberId,
                              businessAccountId: account.businessAccountId,
                              accessToken: account.accessToken,
                              webhookSecret: account.webhookSecret,
                              queueSettings: account.queueSettings,
                              gptSettings: account.gptSettings,
                            })
                            setIsEditing(true)
                            setShowAddForm(true)
                          }}
                          className="text-indigo-600 hover:text-indigo-700"
                          title="Редактировать"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteAccount(account.id)}
                          className="text-red-600 hover:text-red-700"
                          title="Удалить"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <Phone className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Нет добавленных номеров</h3>
            <p className="mt-1 text-sm text-gray-500">
              Начните с добавления номера WhatsApp для коммуникации с клиентами.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Добавить номер WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Информационная секция */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start">
        <Info className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-yellow-800">О WhatsApp Business API</h3>
          <p className="text-sm text-yellow-700 mt-1">
            Для работы с WhatsApp Business API требуется верифицированный бизнес-аккаунт Facebook и подключение к
            официальному API WhatsApp. Стоимость использования API зависит от количества сообщений и может
            варьироваться в зависимости от вашего региона.
          </p>
          <a 
            href="https://business.whatsapp.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-yellow-800 hover:text-yellow-900 underline mt-2 inline-block"
          >
            Подробнее на официальном сайте
          </a>
        </div>
      </div>

      {/* Модальное окно тестирования */}
      {selectedAccount && isTestModalOpen && (
        <TestMessageModal
          isOpen={isTestModalOpen}
          onClose={() => {
            setIsTestModalOpen(false)
            setSelectedAccount(null)
          }}
          account={selectedAccount}
        />
      )}
    </div>
  )
} 