'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Download, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-hot-toast'

interface PhoneNumber {
  id: string
  phone: string
  createdAt: string
}

interface ClientList {
  id: string
  name: string
  description?: string
  phoneNumbers: PhoneNumber[]
  createdAt: string
}

export default function ClientListDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [clientList, setClientList] = useState<ClientList | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchClientList = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/client-lists/${params.id}`)
        if (!response.ok) {
          if (response.status === 404) {
            toast.error('База клиентов не найдена')
            router.push('/dashboard/client-lists')
            return
          }
          throw new Error('Failed to fetch client list')
        }
        const data = await response.json()
        setClientList(data)
      } catch (err) {
        toast.error('Ошибка при загрузке базы клиентов')
      } finally {
        setLoading(false)
      }
    }

    fetchClientList()
  }, [params.id, router])

  const handleExportList = async () => {
    try {
      const response = await fetch(`/api/client-lists/${params.id}/export`)
      if (!response.ok) throw new Error('Failed to export client list')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${clientList?.name || 'client-list'}.csv`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      toast.error('Ошибка при экспорте базы клиентов')
    }
  }

  const filteredPhoneNumbers = clientList?.phoneNumbers.filter(number =>
    number.phone.includes(searchQuery)
  ) || []

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/dashboard/client-lists"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </Link>
        </div>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500">Загрузка данных...</p>
        </div>
      </div>
    )
  }

  if (!clientList) return null

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/client-lists"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">{clientList.name}</h1>
        </div>
        <button
          onClick={handleExportList}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Download className="h-4 w-4" />
          Экспорт
        </button>
      </div>

      {clientList.description && (
        <p className="text-gray-600 mb-6">{clientList.description}</p>
      )}

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по номеру телефона..."
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Номер телефона
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дата добавления
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPhoneNumbers.map((number) => (
              <tr key={number.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {number.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(number.createdAt).toLocaleDateString('ru-RU')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPhoneNumbers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            {searchQuery ? 'Номера не найдены' : 'База клиентов пуста'}
          </div>
        )}
      </div>
    </div>
  )
} 