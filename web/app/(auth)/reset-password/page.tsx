import AuthCard from '@/components/auth/AuthCard'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm'

interface ResetPasswordPageProps {
  searchParams: {
    token?: string
  }
}

export default function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  if (!searchParams.token) {
    return (
      <AuthCard
        title="Invalid token"
        subtitle="The password reset link is invalid or has expired"
        footerText="Request a new reset link?"
        footerLink="/auth/forgot-password"
        footerLinkText="Forgot password"
      >
        <div className="text-center text-red-500">
          Please use a valid password reset link.
        </div>
      </AuthCard>
    )
  }

  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter a new password for your account"
      footerText="Remember your password?"
      footerLink="/auth/login"
      footerLinkText="Sign in"
    >
      <ResetPasswordForm token={searchParams.token} />
    </AuthCard>
  )
}
