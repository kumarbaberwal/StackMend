'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side render only
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="ml-4 flex items-center space-x-2">
      <label className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="sr-only"
          aria-label="Toggle dark mode"
        />
        <div className="toggle-bg w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
        <div
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 flex items-center justify-center ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {theme === 'light' ? '🌙' : '☀'}
        </div>
      </label>
    </div>
  );
}
