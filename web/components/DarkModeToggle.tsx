'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log("SAved Theme: ", savedTheme)
    console.log("prefersDark: ", prefersDark);
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    
    if (newMode) {
      const dark = document.documentElement.classList.add('dark')
      console.log("dark", dark)
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="ml-4 flex items-center space-x-2">
      <span className="text-sm">Mode</span>
      <label className="relative inline-block w-12 h-6">
        <input 
          type="checkbox" 
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />
        <div className="toggle-bg w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
        <div className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 text-xs flex items-center justify-center ${
          darkMode ? 'translate-x-6' : ''
        }`}>
          {darkMode ? '🌙' : '☀'}
        </div>
      </label>
    </div>
  )
}
