import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'RANO — A small corner of the internet',
  description: '20. Indonesia. Developer, gamer, creator. A little introduction to Rano and everything in between.',
  applicationName: 'RANO',
  authors: [{ name: 'Rano' }],
  openGraph: {
    title: 'RANO — Not a portfolio. Just me.',
    description: 'Developer / Gamer / Creator. A small corner of the internet, made out of curiosity.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RANO',
  },
  twitter: { card: 'summary_large_image', title: 'RANO — Not a portfolio. Just me.', description: 'A small corner of the internet. Developer / Gamer / Creator.' },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
