'use client'

import { useState, useEffect } from 'react'
import { Bell, CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface Notification {
  id: string
  type: 'success' | 'warning' | 'error' | 'info'
  title: string
  message: string
  createdAt: string
  read: boolean
}

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/notifications')
        if (!response.ok) throw new Error('Failed to fetch notifications')
        const data = await response.json()
        setNotifications(data)
        setUnreadCount(data.filter((n: Notification) => !n.read).length)
      } catch (err) {
        console.error('Error fetching notifications:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/notifications/${id}/read`, {
        method: 'POST'
      })
      if (!response.ok) throw new Error('Failed to mark notification as read')
      
      setNotifications(prev => 
        prev.map(n => n.id === id ? { ...n, read: true } : n)
      )
      setUnreadCount(prev => Math.max(0, prev - 1))
    } catch (err) {
      console.error('Error marking notification as read:', err)
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-blue-500" />
    }
  }

  // Моковые данные для демонстрации
  useEffect(() => {
    if (notifications.length === 0) {
      setNotifications([
        {
          id: '1',
          type: 'warning',
          title: 'Обновление шаблона',
          message: 'Шаблон "Акция июня" ожидает проверки',
          createdAt: new Date().toISOString(),
          read: false
        },
        {
          id: '2',
          type: 'success',
          title: 'Успешная интеграция',
          message: 'WhatsApp Business API успешно подключен',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          read: true
        },
        {
          id: '3',
          type: 'error',
          title: 'Ошибка отправки',
          message: 'Не удалось отправить сообщение +7 (XXX) XXX-XX-XX',
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          read: false
        }
      ])
      setUnreadCount(2)
    }
  }, [notifications])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900">Уведомления</h3>
            <div className="mt-2 divide-y divide-gray-100">
              {loading ? (
                <div className="py-4 text-center text-sm text-gray-500">
                  Загрузка...
                </div>
              ) : notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex gap-3 py-3 ${!notification.read ? 'bg-blue-50' : ''}`}
                    onClick={() => !notification.read && markAsRead(notification.id)}
                  >
                    <div className="flex-shrink-0">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {notification.message}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {new Date(notification.createdAt).toLocaleDateString('ru-RU', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-4 text-center text-sm text-gray-500">
                  Нет новых уведомлений
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 