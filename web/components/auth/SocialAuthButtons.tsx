'use client'

import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/Button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useState } from 'react'


export default function SocialAuthButtons() {
  const [isLoading, setIsLoading] = useState(false)

  const socialAction = (provider: 'github' | 'google') => {
    setIsLoading(true)

    signIn(provider, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error)
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Logged in successfully!')
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="flex flex-col gap-4">
      <Button
        outline
        disabled={isLoading}
        onClick={() => socialAction('github')}
      >
        <FaGithub className="mr-2" />
        Continue with GitHub
      </Button>
      <Button
        outline
        disabled={isLoading}
        onClick={() => socialAction('google')}
      >
        <FaGoogle className="mr-2" />
        Continue with Google
      </Button>
    </div>
  )
}
