'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface ResetPasswordFormProps {
  token: string
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match!')
      return
    }

    setIsLoading(true)
    
    try {
      await axios.post('/api/auth/reset-password', {
        token,
        password: data.password
      })
      toast.success('Password updated successfully!')
      router.push('/auth/login')
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="password"
        label="New Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="confirmPassword"
        label="Confirm New Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button disabled={isLoading} fullWidth type="submit">
        Reset Password
      </Button>
    </form>
  )
}
