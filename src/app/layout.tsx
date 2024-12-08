import Link from 'next/link'
import { PodcastProvider } from '@/core/Providers/PodcastContext'
import { ReactQueryClientProvider } from '@/core/Providers/ReactQueryClientProvider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import styles from './layout.module.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <PodcastProvider>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <div className={styles.header}>
              <Link href="/">
                <h1 className={styles.title}>PodCaster</h1>
              </Link>
            </div>
            {children}
          </body>
        </PodcastProvider>
      </ReactQueryClientProvider>
    </html>
  )
}
