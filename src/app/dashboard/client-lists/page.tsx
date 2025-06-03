'use client'

import { useState, useEffect } from 'react'
import { Plus, FileText, Users, Trash, Download, Upload, Search, Eye } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { AddClientListModal } from '@/components/modals/AddClientListModal'
import { ImportClientListModal } from '@/components/modals/ImportClientListModal'
import Link from 'next/link'

interface ClientList {
  id: string
  name: string
  description?: string
  phoneNumbers: { phone: string }[]
  createdAt: string
  updatedAt: string
}

export default function ClientListsPage() {
  const [clientLists, setClientLists] = useState<ClientList[]>([])
  const [loading, setLoading] = useState(true)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Загрузка списков клиентов
  useEffect(() => {
    const fetchClientLists = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/client-lists')
        if (!response.ok) throw new Error('Failed to fetch client lists')
        const data = await response.json()
        setClientLists(data)
      } catch (err) {
        toast.error('Ошибка при загрузке списков клиентов')
      } finally {
        setLoading(false)
      }
    }

    fetchClientLists()
  }, [])

  const handleDeleteList = async (id: string) => {
    if (!confirm('Вы уверены, что хотите удалить эту базу клиентов?')) return

    try {
      const response = await fetch(`/api/client-lists/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete client list')

      setClientLists(prev => prev.filter(list => list.id !== id))
      toast.success('База клиентов успешно удалена')
    } catch (err) {
      toast.error('Ошибка при удалении базы клиентов')
    }
  }

  const handleExportList = async (id: string) => {
    try {
      const response = await fetch(`/api/client-lists/${id}/export`)
      if (!response.ok) throw new Error('Failed to export client list')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'client-list.csv'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      toast.error('Ошибка при экспорте базы клиентов')
    }
  }

  const filteredLists = searchQuery
    ? clientLists.filter(list => 
        list.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        list.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : clientLists

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Базы клиентов</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Upload className="h-4 w-4" />
            Импорт из файла
          </button>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Создать базу
        </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по названию или описанию..."
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500">Загрузка баз клиентов...</p>
        </div>
      ) : filteredLists.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLists.map((list) => (
            <div
              key={list.id}
              className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{list.name}</h3>
                  {list.description && (
                    <p className="mt-1 text-sm text-gray-500">{list.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleExportList(list.id)}
                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <Link
                    href={`/dashboard/client-lists/${list.id}`}
                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-blue-500"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => handleDeleteList(list.id)}
                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{list.phoneNumbers.length} контактов</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span>
                    {new Date(list.createdAt).toLocaleDateString('ru-RU')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Users className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Нет баз клиентов</h3>
          <p className="mt-1 text-sm text-gray-500">
            Создайте свою первую базу клиентов, чтобы начать работу
          </p>
          <div className="mt-6">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Создать базу
            </button>
          </div>
        </div>
      )}

      <AddClientListModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          setIsAddModalOpen(false)
          // Обновляем список после создания
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

      <ImportClientListModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onSuccess={() => {
          setIsImportModalOpen(false)
          // Обновляем список после импорта
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