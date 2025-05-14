'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SidebarDropdownProps {
  icon: string
  title: string
  items: Array<{ label: string, href: string }>
}

export default function SidebarDropdown({ icon, title, items }: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
      >
        <div className="flex items-center gap-3">
          <span className="material-symbols-rounded">{icon}</span>
          <span>{title}</span>
        </div>
        <span className={`material-symbols-rounded transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          keyboard_arrow_down
        </span>
      </button>
      {isOpen && (
        <div className="pl-10 mt-1 space-y-1">
          {items.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="block px-2 py-1 rounded hover:bg-indigo-600 hover:text-white dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
