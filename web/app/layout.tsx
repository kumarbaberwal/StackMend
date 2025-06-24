import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/components/Providers'; // ← use unified provider

const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-firacode' });

export const metadata: Metadata = {
  title: 'StackMend – Mend Your Errors',
  description: 'AI-powered fixes + community solutions at your fingertips',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />

      </head>
      <body className={`${inter.className} ${firaCode.variable} min-h-screen`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16 bg-slate-50 dark:bg-gray-900">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
