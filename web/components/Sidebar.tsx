'use client'

import Link from 'next/link'
import SidebarDropdown from './SideBarDropdown'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      id="sidebar"
      className={`
        fixed left-0 top-0 h-full w-72
        bg-white dark:bg-gray-900 text-gray-900 dark:text-white
        shadow-lg transform transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <nav className="p-4 space-y-2 overflow-y-auto">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700"
        >
          <span className="material-symbols-rounded">dashboard</span>
          <span>Dashboard</span>
        </Link>

        <SidebarDropdown
          icon="calendar_today"
          title="Services"
          items={[
            { label: 'IT Consulting', href: '#' },
            { label: 'Cloud Solutions', href: '#' },
            { label: 'Mobile Apps', href: '#' },
          ]}
        />

        {/* …other links & dropdowns… */}

        <div className="mt-10 pt-4 border-t border-gray-700">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700"
          >
            <span className="material-symbols-rounded">help</span>
            <span>Support</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700"
          >
            <span className="material-symbols-rounded">logout</span>
            <span>Sign Out</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}




