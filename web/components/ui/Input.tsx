import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

export default function Input({
  id,
  label,
  type = 'text',
  disabled,
  required,
  register,
  errors
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm
          ${errors[id] ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
          ${disabled ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          dark:text-white
        `}
      />
      {errors[id] && (
        <p className="mt-1 text-sm text-red-600">
          This field is required
        </p>
      )}
    </div>
  )
}
