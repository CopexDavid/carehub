import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как писать шаблоны | CareHub',
  description: 'Инструкция по написанию шаблонов WABA'
}

export default function HowToWriteTemplates() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/dashboard/templates" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться к шаблонам
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Как писать шаблоны WABA</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Категории шаблонов WABA</h2>
            <div className="prose prose-blue max-w-none">
              <p className="mb-4 text-gray-600">При создании шаблона нужно указать категорию. От нее зависит, во сколько обойдется новая переписка с клиентом.</p>
              <p className="mb-4 text-gray-600">Каждая категория шаблонов имеет свои требования. Если Facebook решит, что ваше сообщение подходит под другую категорию, оно будет автоматически перенесено туда.</p>
              <p className="mb-4 text-gray-600">Когда проверяете статус шаблона, обращайте внимание на категорию. Так заметите, если Facebook ее изменит, и будете точно знать, сколько стоит использование шаблона.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Маркетинг</h2>
            <div className="prose prose-blue max-w-none">
              <p className="mb-4 text-gray-600">К этой категории относятся:</p>
              <div className="ml-6 mb-6">
                <h3 className="font-semibold mb-3 text-gray-800">1. Все продающие штуки:</h3>
                <ul className="list-disc ml-6 mb-4 text-gray-600 space-y-2">
                  <li>сообщения об акциях и новых продуктах</li>
                  <li>персональные рекомендации</li>
                  <li>новости бренда и т.п.</li>
                </ul>
                <h3 className="font-semibold mb-2 text-gray-800">2. Основная информация о компании</h3>
                <p className="text-gray-600">включая адрес и контактные данные.</p>
                <h3 className="font-semibold mt-4 mb-2 text-gray-800">3. Вопросы и шаблоны с призывом к действию</h3>
                <p className="text-gray-600">Шаблоны с кнопками или вопросами, побуждающими клиента к действию (нажатию или ответу), чаще всего относятся к категории «Маркетинг». Даже если там не про маркетинг ¯\_(ツ)_/¯</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-3 text-gray-800">Примеры шаблонов:</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Дорогой {'{contactName}'}! Недавно вы купили у нас {'{phoneModel}'}. Рады сообщить, что в этом месяце для вас действует скидка 20% на гарнитуру и чехлы!</p>
                  <p>Спасибо за визит! Оцените работу мастера от 1 до 10. В ответ пришлите только цифру</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <p className="font-semibold mb-3 text-gray-800">Важно:</p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Для некоторых шаблонов в этой категории рекомендуем добавлять кнопку «Отписаться»</li>
                  <li>Можно отправлять не больше 2 маркетинговых шаблонов подряд в течение одной 24-часовой сессии</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Услуги</h2>
            <div className="prose prose-blue max-w-none">
              <p className="mb-4 text-gray-600">В разделе «Шаблоны сообщений» → «Шаблоны WABA» → «Категория: Оповещения, напоминания, вопросы для клиентов».</p>
              
              <p className="mb-6 text-gray-600">Шаблоны этой категории используются для отправки клиентам уведомлений, связанных с текущими сделками или взаимодействиями. Они отправляются в ответ на определенный запрос или действие клиента и обязательно должны содержать конкретные сведения о транзакции, к которой они относятся.</p>

              <div className="ml-6 mb-6">
                <p className="font-semibold mb-3 text-gray-800">Примеры:</p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>сообщения о статусе заказа — этап обработки или доставки</li>
                  <li>подтверждение или напоминание об оплате</li>
                  <li>напоминания о записи, включая уточнения или изменения даты и времени</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="font-semibold mb-2 text-gray-800">Важное замечание:</p>
                <p className="text-gray-600">Никакого призыва к действию. Шаблоны, содержащие маркетинговые элементы, такие как скидки или промо-акции, относятся к категории «Маркетинг».</p>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Подойдет для категории «Услуги»</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Перейдет в «Маркетинг»</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Почему перейдет в «Маркетинг»</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Недавно вы общались с нами онлайн по поводу заказа №12345. Каким был ваш опыт? Нажмите, чтобы заполнить короткую анкету: [ссылка]</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Мы предлагаем вам новую линейку товаров! Подскажите, что вас интересует?</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Содержит маркетинговый контекст и прямую рекламу.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Привет! Я вижу, вы обращались в службу поддержки через наш онлайн-чат. Я являюсь виртуальным помощником в WhatsApp. Чем могу помочь?</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Добрый день! Напишите нам в ответ, если хотите узнать о наших текущих акциях!</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Вопрос имеет маркетинговую природу, направленную на увеличение продаж.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b whitespace-pre-line">Это Валера. Звонил по поводу заказа 12345. Не смог дозвониться.
Изменился статус заказа: его передали в доставку, но доставка будет 16.08.23 вместо завтра.</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Это Валера. Не смог до вас дозвониться. Подскажите, когда вам будет удобно поговорить?</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Во втором примере присутствует вопрос клиенту, и из контекста неясно, что речь идет о конкретном заказе, что делает сообщение более общим и потенциально маркетинговым.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b whitespace-pre-line">Вас ожидает {'{carColor}'}{'{carModel}'}{'{carRegCode}'}. Время бесплатного ожидания — 3 минуты. Счастливого пути!
Номер водителя: {'{phoneNumber}'}

Такси «В добрый путь».</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b whitespace-pre-line">Вас ожидает {'{carColor}'}{'{carModel}'}{'{carRegCode}'}. Время бесплатного ожидания — 3 минуты. Чтобы связаться с водителем, нажмите кнопку ниже:
{'{Позвонить водителю}'}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b">Есть кнопка и призыв к действию</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">Здравствуйте. Напоминаем, что вы записаны на прием 13.09.25 в 12:00
Будем ждать вас!</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Здравствуйте. Напоминаем, что вы записаны на прием 13.09.25 в 12:00
⚠️Также напоминаем, что мы переехали. Новый адрес: ул. Ленина 122. Вход со двора</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Есть общая информация о компании. Хотя шаблон подходит под обе категории, Facebook выберет «Маркетинг»</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Одноразовые пароли</h2>
            <div className="prose prose-blue max-w-none">
              <p className="mb-6 text-gray-600">Данная категория включает исключительно шаблоны с кодами, которые применяются для подтверждения входа в аккаунт, совершения операций и иных процессов.</p>

              <div className="ml-6 mb-6">
                <p className="font-semibold mb-3 text-gray-800">Требования:</p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>использовать предустановленные шаблоны сообщений WhatsApp, которые содержат отказ от ответственности и предупреждения об истечении срока действия кода</li>
                  <li>настроить кнопку для копирования одноразового пароля</li>
                  <li>избавиться от URL, медиа и эмодзи. Максимальная длина кода — 15 символов</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="italic text-gray-600">Хотя эта категория отображается в личном кабинете, в настоящее время мы её не поддерживаем. Если вам нужны шаблоны с категорией «Одноразовые пароли», напишите нам в поддержку. Так будем знать, что на категорию есть спрос.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Что делать, если Facebook изменил категорию?</h2>
            <div className="prose prose-blue max-w-none">
              <p className="mb-4 text-gray-600">Сказать точно, в какую категорию попадет сообщение — нельзя. Не исключено, что вы подготовите шаблон про оплату заказа, а Facebook решит, что он должен быть в «Маркетинге».</p>
              <p className="mb-6 text-gray-600">Категорию активного шаблона изменить нельзя. Если вы считаете решение Facebook ошибочным, можно поступить так:</p>
              
              <ol className="list-decimal ml-6 text-gray-600 space-y-2">
                <li>Измените текст и создайте с ним новый шаблон. Согласовать текст один в один с предыдущим не получится.</li>
                <li>Отправьте этот шаблон на модерацию с нужной вам категорией.</li>
              </ol>

              <p className="mt-6 text-gray-600">Прошлый шаблон, в котором Facebook изменил категорию, удалите или оставьте на всякий случай. Использовать его не обязательно.</p>
            </div>
          </section>

          <section className="mt-12 border-t pt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Дополнительные материалы</h2>
            <p className="text-gray-600 mb-6">Посмотрите это видео — оно будет полезным для лучшего понимания работы с шаблонами:</p>
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bcsbQiTjdNE"
                title="Как работать с шаблонами WABA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 