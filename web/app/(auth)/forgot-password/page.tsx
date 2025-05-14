import AuthCard from '@/components/auth/AuthCard'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your email to receive a reset link"
      footerText="Remember your password?"
      footerLink="/login"
      footerLinkText="Sign in"
    >
      <ForgotPasswordForm />
    </AuthCard>
  )
}