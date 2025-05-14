import AuthCard from '@/components/auth/AuthCard'
import LoginForm from '@/components/auth/LoginForm'
import SocialAuthButtons from '@/components/auth/SocialAuthButtons'

export default function LoginPage() {
  return (
    <AuthCard
      title="Sign in to your account"
      subtitle="Mend your code faster with StackMend"
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Sign up"
    >
      <SocialAuthButtons />
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>
      <LoginForm />
      <div className="text-sm text-center mt-4">
        <a
          href="/forgot-password"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Forgot your password?
        </a>
      </div>
    </AuthCard>
  )
}
