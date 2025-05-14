import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  fullWidth?: boolean
  outline?: boolean
}

export default function Button({
  children,
  disabled,
  type = 'button',
  onClick,
  fullWidth,
  outline
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        relative flex justify-center items-center py-2 px-4 rounded-md
        ${fullWidth ? 'w-full' : ''}
        ${outline ? 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        transition
      `}
    >
      {children}
    </button>
  )
}
