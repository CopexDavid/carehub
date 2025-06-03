import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LucideHome, LucideCalendar, LucideMessageSquare, LucideActivity, LucideBell, LucideSettings, LucideLogOut, LucideMenu, LucideX } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DashboardLayoutProps {
  children: ReactNode
}

// Этот компонент будет использоваться на клиентской стороне
// export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   const pathname = usePathname()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   const navigation = [
//     { name: 'Главная', href: '/dashboard', icon: LucideHome },
//     { name: 'Записи', href: '/dashboard/appointments', icon: LucideCalendar },
//     { name: 'Чаты', href: '/dashboard/chats', icon: LucideMessageSquare },
//     { name: 'Аналитика', href: '/dashboard/analytics', icon: LucideActivity },
//     { name: 'Уведомления', href: '/dashboard/notifications', icon: LucideBell },
//     { name: 'Настройки', href: '/dashboard/settings', icon: LucideSettings },
//   ]

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Мобильная кнопка меню */}
//       <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow-sm">
//         <Link href="/dashboard" className="font-bold text-xl text-blue-600">CareHub</Link>
//         <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
//           {isMobileMenuOpen ? (
//             <LucideX className="h-6 w-6" />
//           ) : (
//             <LucideMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Боковая панель (десктоп) */}
//       <div className="hidden lg:flex lg:flex-shrink-0">
//         <div className="flex flex-col w-64">
//           <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r">
//             <div className="flex items-center flex-shrink-0 px-4 mb-5">
//               <Link href="/dashboard" className="font-bold text-xl text-blue-600">CareHub</Link>
//             </div>
//             <div className="flex-grow flex flex-col">
//               <nav className="flex-1 px-2 space-y-1 bg-white">
//                 {navigation.map((item) => {
//                   const isActive = pathname === item.href
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className={`${
//                         isActive
//                           ? 'bg-blue-50 text-blue-600'
//                           : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                       } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
//                     >
//                       <item.icon
//                         className={`${
//                           isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
//                         } mr-3 flex-shrink-0 h-5 w-5`}
//                       />
//                       {item.name}
//                     </Link>
//                   )
//                 })}
//               </nav>
//             </div>
//             <div className="px-2 pb-2">
//               <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50">
//                 <LucideLogOut className="mr-3 h-5 w-5" />
//                 Выйти
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Мобильное меню */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-40 flex">
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleMobileMenu}></div>
//           <div className="relative flex-1 flex flex-col max-w-xs w-full pt-16 pb-4 bg-white">
//             <div className="flex-grow flex flex-col overflow-y-auto">
//               <nav className="px-2 space-y-1 bg-white">
//                 {navigation.map((item) => {
//                   const isActive = pathname === item.href
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       onClick={toggleMobileMenu}
//                       className={`${
//                         isActive
//                           ? 'bg-blue-50 text-blue-600'
//                           : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                       } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
//                     >
//                       <item.icon
//                         className={`${
//                           isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
//                         } mr-3 flex-shrink-0 h-5 w-5`}
//                       />
//                       {item.name}
//                     </Link>
//                   )
//                 })}
//               </nav>
//             </div>
//             <div className="px-2 pb-2">
//               <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50">
//                 <LucideLogOut className="mr-3 h-5 w-5" />
//                 Выйти
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Контент */}
//       <div className="flex flex-col flex-1 pt-16 lg:pt-0">
//         <main className="flex-1 overflow-y-auto">
//           <div className="py-6">
//             <div className="px-4 sm:px-6 md:px-8">{children}</div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// Это заглушка для создания серверных компонентов на основе макета
const DashboardLayoutServer = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Боковая панель (десктоп) */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <Link href="/dashboard" className="font-bold text-xl text-blue-600">CareHub</Link>
            </div>
            <div className="flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1 bg-white">
                <Link
                  href="/dashboard"
                  className="bg-blue-50 text-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LucideHome className="text-blue-600 mr-3 flex-shrink-0 h-5 w-5" />
                  Главная
                </Link>
                <Link
                  href="/dashboard/appointments"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LucideCalendar className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5" />
                  Записи
                </Link>
                <Link
                  href="/dashboard/chats"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LucideMessageSquare className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5" />
                  Чаты
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LucideActivity className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5" />
                  Аналитика
                </Link>
                <Link
                  href="/dashboard/notifications"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LucideBell className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5" />
                  Уведомления
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LucideSettings className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5" />
                  Настройки
                </Link>
              </nav>
            </div>
            <div className="px-2 pb-2">
              <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50">
                <LucideLogOut className="mr-3 h-5 w-5" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильная навигация (только заглушка для серверного рендеринга) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow-sm">
        <Link href="/dashboard" className="font-bold text-xl text-blue-600">CareHub</Link>
        <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
          <LucideMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Контент */}
      <div className="flex flex-col flex-1 pt-16 lg:pt-0">
        <main className="flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export { DashboardLayoutServer as DashboardLayout } 