import { useState, useRef } from 'react'
import { X, Upload, Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface AddClientListModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function AddClientListModal({ isOpen, onClose, onSuccess }: AddClientListModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [phoneNumbers, setPhoneNumbers] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const text = await file.text()
      // Очищаем номера от пробелов и пустых строк
      const numbers = text
        .split('\n')
        .map(n => n.trim())
        .filter(n => n)
        .join('\n')
      setPhoneNumbers(numbers)
    } catch (err) {
      toast.error('Ошибка при чтении файла')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name) {
      toast.error('Укажите название базы')
      return
    }

    if (!phoneNumbers.trim()) {
      toast.error('Добавьте хотя бы один номер телефона')
      return
    }

    try {
      setLoading(true)
      const numbers = phoneNumbers
        .split('\n')
        .map(n => n.trim())
        .filter(n => n)

      // Простая валидация номеров
      const invalidNumbers = numbers.filter(n => !n.match(/^\+?[0-9]{10,15}$/))
      if (invalidNumbers.length > 0) {
        toast.error(`Некорректные номера: ${invalidNumbers.join(', ')}`)
        return
      }

      const response = await fetch('/api/client-lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          description,
          phoneNumbers: numbers
        })
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при создании базы клиентов')
      }

      toast.success('База клиентов успешно создана')
      onSuccess()
      onClose()
      
      // Очищаем форму
      setName('')
      setDescription('')
      setPhoneNumbers('')
    } catch (err) {
      console.error('Error creating client list:', err)
      toast.error(err instanceof Error ? err.message : 'Ошибка при создании базы клиентов')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Затемнение фона */}
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        {/* Модальное окно */}
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-medium">Создать новую базу клиентов</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="space-y-4">
              {/* Название базы */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Название базы*
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Например: Активные клиенты"
                />
              </div>

              {/* Описание */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Описание
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Необязательное описание базы"
                />
              </div>

              {/* Номера телефонов */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Номера телефонов*
                </label>
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Загрузить из файла
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".txt"
                    className="hidden"
                  />
                </div>
                <textarea
                  value={phoneNumbers}
                  onChange={(e) => setPhoneNumbers(e.target.value)}
                  className="w-full h-48 rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Введите номера телефонов по одному в строке&#10;Например:&#10;+79001234567&#10;+79001234568"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Введите номера телефонов, каждый с новой строки
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Создание...' : 'Создать базу'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 