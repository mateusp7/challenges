import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito_sans = Nunito_Sans({ weight: ['300', '600', '800'] })

export const metadata: Metadata = {
  title: 'API Countries',
  description: 'Challenger to API Countries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={nunito_sans.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
