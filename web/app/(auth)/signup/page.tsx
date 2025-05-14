import AuthCard from '@/components/auth/AuthCard'
import SignupForm from '@/components/auth/SignupForm'
import SocialAuthButtons from '@/components/auth/SocialAuthButtons'

export default function SignupPage() {
  return (
    <AuthCard
      title="Create a new account"
      subtitle="Join StackMend to fix errors faster"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign in"
    >
      <SocialAuthButtons />
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Or sign up with email
          </span>
        </div>
      </div>
      <SignupForm />
    </AuthCard>
  )
}
