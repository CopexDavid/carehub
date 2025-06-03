'use client'

import { Fragment } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import { Settings, X, CheckCircle2, XCircle, Clock } from 'lucide-react'

interface AssistantSettings {
  id: string
  name: string
  model: string
  openAiKey: string
  assistantId?: string
  isConfigured: boolean
  status: string
  errorMessage?: string
}

interface AssistantSettingsModalProps {
  isOpen: boolean
  onClose: () => void
  settings: AssistantSettings | null
  onSave: (e: React.FormEvent) => Promise<void>
  onChange: (field: keyof AssistantSettings, value: string | number) => void
  saving: boolean
}

export function AssistantSettingsModal({
  isOpen,
  onClose,
  settings,
  onSave,
  onChange,
  saving
}: AssistantSettingsModalProps) {
  if (!settings) return null

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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-gray-500" />
                    Настройки ассистента
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Title>

                <form onSubmit={onSave} className="mt-4">
                  <div className="space-y-4">
                    {/* OpenAI API Key */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        OpenAI API Ключ
                      </label>
                      <input
                        type="password"
                        value={settings.openAiKey}
                        onChange={(e) => onChange('openAiKey', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                        placeholder="sk-..."
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        API ключ от вашего аккаунта OpenAI
                      </p>
                    </div>

                    {/* Assistant ID */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        ID Ассистента
                      </label>
                      <input
                        type="text"
                        value={settings.assistantId || ''}
                        onChange={(e) => onChange('assistantId', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                        placeholder="asst_..."
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        ID вашего ассистента из OpenAI (можно найти в настройках ассистента на платформе OpenAI)
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Имя ассистента
                      </label>
                      <input
                        type="text"
                        value={settings.name}
                        onChange={(e) => onChange('name', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>

                    {/* Status */}
                    {settings.status !== 'inactive' && (
                      <div className="rounded-md bg-gray-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            {settings.status === 'active' ? (
                              <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                            ) : settings.status === 'error' ? (
                              <XCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                            ) : (
                              <Clock className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            )}
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-gray-800">
                              {settings.status === 'active'
                                ? 'Ассистент подключен и готов к работе'
                                : settings.status === 'error'
                                ? 'Ошибка подключения к ассистенту'
                                : 'Подключение к ассистенту...'}
                            </h3>
                            {settings.errorMessage && (
                              <div className="mt-2 text-sm text-red-700">
                                {settings.errorMessage}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      Отмена
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      {saving ? 'Сохранение...' : 'Сохранить'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 