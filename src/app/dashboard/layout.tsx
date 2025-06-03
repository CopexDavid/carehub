'use client'

import { SessionProvider } from 'next-auth/react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Header } from '@/components/dashboard/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <div className="h-screen flex overflow-hidden bg-gray-50">
        {/* Десктопный сайдбар */}
        <div className="flex flex-shrink-0 z-20">
          <Sidebar />
        </div>

        {/* Основной контент */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Header />
          
          <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  )
} 