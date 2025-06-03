'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash, CheckCircle, XCircle, Clock, Eye } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AddTemplateModal } from '@/components/modals/AddTemplateModal'
import { EditTemplateModal } from '@/components/modals/EditTemplateModal'
import { TemplateStatusModal } from '@/components/modals/TemplateStatusModal'

interface MessageTemplate {
  id: string
  name: string
  category: string
  language: string
  status: 'pending' | 'approved' | 'rejected'
  components: any
  whatsappId: string | null
  rejectionReason?: string | null
  createdAt: string
  account: {
    name: string
    phoneNumber: string
  }
}

export default function TemplatesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [templates, setTemplates] = useState<MessageTemplate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<MessageTemplate | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchTemplates()
    }
  }, [status])

  const fetchTemplates = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/templates')
      
      if (!response.ok) {
        const text = await response.text()
        let errorMessage = 'Ошибка при загрузке шаблонов'
        
        try {
          const errorData = JSON.parse(text)
          errorMessage = errorData.error || errorMessage
        } catch (e) {
          // Если ответ не является JSON, используем текст ошибки
          errorMessage = text || errorMessage
        }
        
        throw new Error(errorMessage)
      }
      
      const text = await response.text()
      try {
        const data = JSON.parse(text)
        setTemplates(data)
      } catch (e) {
        throw new Error('Получен некорректный ответ от сервера')
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Ошибка при загрузке шаблонов'
      setError(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (template: MessageTemplate) => {
    setSelectedTemplate(template)
    setIsEditModalOpen(true)
  }

  const handleDelete = async (templateId: string) => {
    if (!confirm('Вы уверены, что хотите удалить этот шаблон?')) {
      return
    }

    try {
      const response = await fetch(`/api/templates?id=${templateId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Ошибка при удалении шаблона')
      }

      toast.success('Шаблон успешно удален')
      fetchTemplates()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Ошибка при удалении шаблона'
      toast.error(message)
    }
  }

  const handleViewStatus = (template: MessageTemplate) => {
    setSelectedTemplate(template)
    setIsStatusModalOpen(true)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="flex items-center text-green-700 bg-green-50 rounded-full px-2 py-1 text-xs">
            <CheckCircle className="w-4 h-4 mr-1" />
            Одобрен
          </span>
        )
      case 'rejected':
        return (
          <span className="flex items-center text-red-700 bg-red-50 rounded-full px-2 py-1 text-xs">
            <XCircle className="w-4 h-4 mr-1" />
            Отклонен
          </span>
        )
      default:
        return (
          <span className="flex items-center text-yellow-700 bg-yellow-50 rounded-full px-2 py-1 text-xs">
            <Clock className="w-4 h-4 mr-1" />
            На проверке
          </span>
        )
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return null
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          <h3 className="text-lg font-medium mb-2">Произошла ошибка</h3>
          <p>{error}</p>
          <button
            onClick={fetchTemplates}
            className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Шаблоны сообщений</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/dashboard/templates/how-to-write')}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            <Eye className="w-5 h-5 mr-2" />
            Как писать шаблоны?
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Создать шаблон
          </button>
        </div>
      </div>

      {templates.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Нет шаблонов</h3>
          <p className="text-gray-500">
            Создайте свой первый шаблон для отправки сообщений
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Название
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Категория
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Язык
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Аккаунт
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {templates.map((template) => (
                <tr key={template.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {template.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {template.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {template.language}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {template.account.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {template.account.phoneNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleViewStatus(template)}
                      className="inline-flex items-center"
                    >
                      {getStatusBadge(template.status)}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewStatus(template)}
                      className="text-gray-600 hover:text-gray-900 mr-4"
                      title="Просмотреть статус"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleEdit(template)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      title="Редактировать"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(template.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Удалить"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <AddTemplateModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          setIsAddModalOpen(false)
          fetchTemplates()
        }}
      />

      {selectedTemplate && (
        <>
          <EditTemplateModal
            isOpen={isEditModalOpen}
            onClose={() => {
              setIsEditModalOpen(false)
              setSelectedTemplate(null)
            }}
            onSuccess={() => {
              setIsEditModalOpen(false)
              setSelectedTemplate(null)
              fetchTemplates()
            }}
            template={selectedTemplate}
          />

          <TemplateStatusModal
            isOpen={isStatusModalOpen}
            onClose={() => {
              setIsStatusModalOpen(false)
              setSelectedTemplate(null)
            }}
            template={selectedTemplate}
          />
        </>
      )}
    </div>
  )
} 