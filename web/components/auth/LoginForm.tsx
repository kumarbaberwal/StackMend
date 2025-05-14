'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    
    try {
      const callback = await signIn('credentials', {
        ...data,
        redirect: false
      })

      if (callback?.error) {
        toast.error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        toast.success('Logged in successfully!')
        router.push('/dashboard')
      }
    } catch (error) {
      toast.error('Something went wrong!')
    } finally {
      setIsLoading(false)
    }
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
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button disabled={isLoading} fullWidth type="submit">
        Sign in
      </Button>
    </form>
  )
}
