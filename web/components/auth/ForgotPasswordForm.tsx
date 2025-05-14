'use client'

import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    
    try {
      await axios.post('/api/auth/forgot-password', data)
      setEmailSent(true)
      toast.success('Password reset link sent to your email!')
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  if (emailSent) {
    return (
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
          <svg
            className="h-6 w-6 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">
          Check your email
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          We've sent a password reset link to your email address.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="Email address"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button disabled={isLoading} fullWidth type="submit">
        Send reset link
      </Button>
    </form>
  )
}
