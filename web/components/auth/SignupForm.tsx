"use client"

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { signupUser } from '@/features/auth/authSlice'
import { RootState, useAppDispatch } from '@/store/store'
import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'

export default function SignupForm() {
  const router = useRouter()
  const { loading, error } = useSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const username = data.username;
      const email = data.email;
      const password = data.password;
      console.log("username: ", username)
      const { user, token } = await dispatch(signupUser({ username, email, password })).unwrap();
      if (user && token) {
        toast.success('Account created successfully! Please sign in.')
        router.push('/login')
        // router.replace('/');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Something went wrong!')
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="username"
        label="Full Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
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
        Create account
      </Button>
    </form>
  )
}
