import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-firacode' })

export const metadata: Metadata = {
  title: 'StackMend – Mend Your Errors',
  description: 'AI-powered fixes + community solutions at your fingertips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="bg-slate-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    >
      <body className={`${inter.className} ${firaCode.variable} min-h-screen`}>
        <div className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="flex-grow pt-24 pb-16 bg-slate-50 dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
