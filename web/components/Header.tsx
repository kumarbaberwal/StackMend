'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import DarkModeToggle from './DarkModeToggle'
import JoinNowDropdown from './JoinNowDropdown'
import Sidebar from './Sidebar'

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-15 left-0 h-full w-72 z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <Sidebar isopen={sidebarOpen} />
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex bg-transparent text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition absolute left-0 items-center justify-center"
          >
            <span className="material-symbols-rounded text-xl flex items-center justify-center">menu</span>
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" rx="40" fill="#4F46E5" />
              <path d="M60 70C60 55 75 45 95 45H130V65H95C88 65 85 68 85 72C85 76 88 80 95 80H110C130 80 145 90 145 110C145 130 130 145 110 145H65V125H110C117 125 120 121 120 117C120 113 117 110 110 110H95C75 110 60 95 60 80V70Z" fill="white" />
            </svg>
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">StackMend</span>
          </div>

          {/* Navigation */}
          <div className="flex space-x-6 text-sm sm:text-base items-center justify-center">
            <Link href="/" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Home</Link>
            <Link href="/error" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Questions</Link>
            <Link href="/dashboard" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Dashboard</Link>
            <Link href="/help" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Help</Link>
            <Link href="/about" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">About</Link>

            <JoinNowDropdown />
          </div>

          <DarkModeToggle />
        </div>
      </header>
    </>
  )
}
