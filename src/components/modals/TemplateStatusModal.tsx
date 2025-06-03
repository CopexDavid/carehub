'use client'

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface TemplateStatusModalProps {
  isOpen: boolean
  onClose: () => void
  template: {
    id: string
    name: string
    status: 'pending' | 'approved' | 'rejected'
    rejectionReason?: string | null
    whatsappId?: string | null
  }
}

export function TemplateStatusModal({ isOpen, onClose, template }: TemplateStatusModalProps) {
  const [loading, setLoading] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(template.status)
  const [currentReason, setCurrentReason] = useState(template.rejectionReason)

  const checkStatus = async () => {
    if (!template.whatsappId) {
      toast.error('Шаблон еще не был отправлен в WhatsApp')
      return
    }

    try {
      setLoading(true)
      const response = await fetch(`/api/templates/check-status?id=${template.id}`)
      
      if (!response.ok) {
        throw new Error('Не удалось проверить статус шаблона')
      }

      const data = await response.json()
      setCurrentStatus(data.status)
      setCurrentReason(data.rejectionReason)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Произошла ошибка')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen && template.whatsappId) {
      checkStatus()
    }
  }, [isOpen])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  <span>Статус проверки шаблона</span>
                  <button
                    onClick={checkStatus}
                    disabled={loading}
                    className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
                    title="Обновить статус"
                  >
                    <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Шаблон "{template.name}"
                  </p>

                  <div className="flex items-center mb-4">
                    {currentStatus === 'approved' && (
                      <>
                        <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                        <div>
                          <p className="font-medium text-green-700">Одобрен</p>
                          <p className="text-sm text-gray-500">
                            Шаблон прошел проверку и готов к использованию
                          </p>
                        </div>
                      </>
                    )}

                    {currentStatus === 'rejected' && (
                      <>
                        <XCircle className="h-8 w-8 text-red-500 mr-3" />
                        <div>
                          <p className="font-medium text-red-700">Отклонен</p>
                          {currentReason && (
                            <p className="text-sm text-gray-500">
                              Причина: {currentReason}
                            </p>
                          )}
                        </div>
                      </>
                    )}

                    {currentStatus === 'pending' && (
                      <>
                        <Clock className="h-8 w-8 text-yellow-500 mr-3" />
                        <div>
                          <p className="font-medium text-yellow-700">На проверке</p>
                          <p className="text-sm text-gray-500">
                            Шаблон отправлен на проверку. Это может занять некоторое время.
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {currentStatus === 'rejected' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-red-700">
                        Вы можете отредактировать шаблон и отправить его на проверку повторно.
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 