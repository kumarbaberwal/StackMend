'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function JoinNowDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Join Now
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-md z-50">
          <Link 
            href="/login" 
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  )
}
