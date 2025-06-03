import { useState, useRef } from 'react'
import { X, Upload, AlertCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'
import * as XLSX from 'xlsx'

interface ImportClientListModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

interface ImportStatus {
  total: number
  processed: number
  duplicates: number
  invalid: number
  status: 'idle' | 'processing' | 'completed' | 'error'
  error?: string
}

export function ImportClientListModal({ isOpen, onClose, onSuccess }: ImportClientListModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [importStatus, setImportStatus] = useState<ImportStatus>({
    total: 0,
    processed: 0,
    duplicates: 0,
    invalid: 0,
    status: 'idle'
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // Сбрасываем статус импорта при выборе нового файла
      setImportStatus({
        total: 0,
        processed: 0,
        duplicates: 0,
        invalid: 0,
        status: 'idle'
      })
    }
  }

  const normalizePhoneNumber = (phone: string): string => {
    // Удаляем все нецифровые символы
    const digits = phone.replace(/\D/g, '')
    
    // Если номер начинается с 8, заменяем на 7
    if (digits.startsWith('8') && digits.length === 11) {
      return '7' + digits.slice(1)
    }
    
    // Если номер не начинается с 7, добавляем 7 в начало
    if (!digits.startsWith('7') && digits.length === 10) {
      return '7' + digits
    }
    
    return digits
  }

  const validatePhoneNumber = (phone: string): boolean => {
    const normalized = normalizePhoneNumber(phone)
    return /^7\d{10}$/.test(normalized)
  }

  const processExcelFile = async (file: File): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = e.target?.result
          const workbook = XLSX.read(data, { type: 'binary' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          
          // Получаем диапазон данных
          const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1')
          const phoneNumbers: string[] = []

          // Проходим по всем ячейкам в первом столбце, начиная со второй строки (пропускаем заголовок)
          for (let row = range.s.r + 1; row <= range.e.r; row++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: 0 }) // Берем только первый столбец (A)
            const cell = worksheet[cellAddress]
            
            if (cell && cell.v) {
              // Преобразуем значение в строку и удаляем пробелы
              const value = cell.v.toString().trim()
              if (value) {
                phoneNumbers.push(value)
              }
            }
          }
          
          console.log('First 5 phone numbers from Excel:', phoneNumbers.slice(0, 5))
          resolve(phoneNumbers)
        } catch (error) {
          console.error('Error processing Excel file:', error)
          reject(new Error('Ошибка при чтении Excel файла'))
        }
      }
      reader.onerror = () => reject(new Error('Ошибка при чтении файла'))
      reader.readAsBinaryString(file)
    })
  }

  const processCsvFile = async (file: File): Promise<string[]> => {
    const text = await file.text()
    return text.split('\n')
      .map(line => line.split(',')[0].trim()) // Берем первый столбец
      .filter(Boolean)
  }

  const processTextFile = async (file: File): Promise<string[]> => {
    const text = await file.text()
    return text.split('\n')
      .map(line => line.trim())
      .filter(Boolean)
  }

  const handleImport = async () => {
    if (!selectedFile) {
      toast.error('Выберите файл для импорта')
      return
    }

    if (!name) {
      toast.error('Укажите название базы')
      return
    }

    try {
      setImportStatus(prev => ({ ...prev, status: 'processing' }))
      
      // Определяем формат файла по расширению
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase()
      console.log('Processing file with extension:', fileExtension)
      
      let lines: string[] = []
      switch (fileExtension) {
        case 'xlsx':
        case 'xls':
          console.log('Processing Excel file...')
          lines = await processExcelFile(selectedFile)
          console.log('Excel processing complete. Raw lines:', lines.slice(0, 5), '...')
          break
        case 'csv':
          lines = await processCsvFile(selectedFile)
          break
        case 'txt':
          lines = await processTextFile(selectedFile)
          break
        default:
          throw new Error('Неподдерживаемый формат файла')
      }
      
      console.log('Total lines read:', lines.length)
      setImportStatus(prev => ({ ...prev, total: lines.length }))

      const processedNumbers = new Set<string>()
      const invalidNumbers: string[] = []
      const duplicateNumbers: string[] = []
      const validNumbers: string[] = []

      for (const line of lines) {
        const normalized = normalizePhoneNumber(line)
        
        if (!validatePhoneNumber(normalized)) {
          invalidNumbers.push(line)
          setImportStatus(prev => ({ ...prev, invalid: prev.invalid + 1 }))
          continue
        }

        if (processedNumbers.has(normalized)) {
          duplicateNumbers.push(line)
          setImportStatus(prev => ({ ...prev, duplicates: prev.duplicates + 1 }))
          continue
        }

        processedNumbers.add(normalized)
        validNumbers.push(normalized)
        setImportStatus(prev => ({ ...prev, processed: prev.processed + 1 }))
      }

      console.log('Numbers processed:', {
        total: lines.length,
        valid: validNumbers.length,
        invalid: invalidNumbers.length,
        duplicates: duplicateNumbers.length
      })

      console.log('Sending request to server...')
      // Отправляем данные на сервер
      const response = await fetch('/api/client-lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          description,
          phoneNumbers: validNumbers
        })
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Server error:', error)
        throw new Error(error.message || 'Ошибка при создании базы клиентов')
      }

      console.log('Import completed successfully')
      setImportStatus(prev => ({ ...prev, status: 'completed' }))
      toast.success('База клиентов успешно создана')
      onSuccess()
      
      // Очищаем форму только после успешного импорта
      setName('')
      setDescription('')
      setSelectedFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (err) {
      console.error('Import error:', err)
      setImportStatus(prev => ({
        ...prev,
        status: 'error',
        error: err instanceof Error ? err.message : 'Неизвестная ошибка при импорте'
      }))
      toast.error(err instanceof Error ? err.message : 'Ошибка при импорте базы клиентов')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-medium">Импорт базы клиентов из файла</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4">
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

              {/* Загрузка файла */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Файл с номерами*
                </label>
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Выбрать файл
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept=".txt,.csv,.xlsx,.xls"
                    className="hidden"
                  />
                  {selectedFile && (
                    <span className="text-sm text-gray-600 py-2">
                      Выбран файл: {selectedFile.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Статус импорта */}
              {importStatus.status !== 'idle' && (
                <div className="mt-4 p-4 rounded-lg bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Статус импорта
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Всего номеров:</span>
                      <span>{importStatus.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Обработано:</span>
                      <span>{importStatus.processed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Дубликатов:</span>
                      <span>{importStatus.duplicates}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Некорректных номеров:</span>
                      <span>{importStatus.invalid}</span>
                    </div>
                    {importStatus.status === 'processing' && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${(importStatus.processed / importStatus.total) * 100}%`
                          }}
                        ></div>
                      </div>
                    )}
                    {importStatus.error && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{importStatus.error}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
                type="button"
                onClick={handleImport}
                disabled={importStatus.status === 'processing' || !selectedFile}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {importStatus.status === 'processing' ? 'Импорт...' : 'Импортировать'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 