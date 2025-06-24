'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ isopen }: { isopen: boolean }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);

  return (
    <aside
      id="sidebar"
      className="left-0 top-0 h-full w-72 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg transform md:translate-x-0 -translate-x-full transition-transform duration-300 z-40"
    >
      <nav className="p-4 space-y-2 overflow-y-auto">
        <div>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <span className="material-symbols-rounded">dashboard</span>
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Services Dropdown */}
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-rounded">calendar_today</span>
              <span>Services</span>
            </div>
            <span className="material-symbols-rounded">keyboard_arrow_down</span>
          </button>
          {servicesOpen && (
            <div className="pl-10 mt-1 space-y-1">
              <Link href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">
                IT Consulting
              </Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">
                Cloud Solutions
              </Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">
                Mobile Apps
              </Link>
            </div>
          )}
        </div>

        <div>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <span className="material-symbols-rounded">notifications</span>
            <span>Notifications</span>
          </Link>
        </div>

        <div>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <span className="material-symbols-rounded">local_library</span>
            <span>Resources</span>
          </Link>
        </div>

        {/* Bookmarks Dropdown */}
        <div>
          <button
            onClick={() => setBookmarksOpen(!bookmarksOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-rounded">star</span>
              <span>Bookmarks</span>
            </div>
            <span className="material-symbols-rounded">keyboard_arrow_down</span>
          </button>
          {bookmarksOpen && (
            <div className="pl-10 mt-1 space-y-1">
              <Link href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">
                Saved Tutorials
              </Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">
                Favorite Blogs
              </Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">
                Resource Guides
              </Link>
            </div>
          )}
        </div>

        <div>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <span className="material-symbols-rounded">settings</span>
            <span>Settings</span>
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t border-gray-700">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <span className="material-symbols-rounded">help</span>
            <span>Support</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white"
          >
            <span className="material-symbols-rounded">logout</span>
            <span>Sign Out</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
