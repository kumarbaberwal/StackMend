'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm, useFormState } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { RootState, useAppDispatch } from '@/store/store'
import { loginUser } from '@/features/auth/authSlice'
import { useSelector } from 'react-redux'

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { error, loading } = useSelector((state: RootState) => state.auth);

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
    const email = data.email;
    const password = data.password;

    console.log("email: ", email, "password: ", password);
    try {
      const { user, token } = await dispatch(loginUser({ email, password })).unwrap();
      // console.log(user, token);
      if (user && token) {
        toast.success('Logged in successfully!')
        router.push('/dashboard')
      }
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="Email address"
        type="email"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Button disabled={loading} fullWidth type="submit">
        Sign in
      </Button>
    </form>
  )
}
