import Link from 'next/link'
import { PodcastProvider } from '@/core/Providers/PodcastContext'
import { ReactQueryClientProvider } from '@/core/Providers/ReactQueryClientProvider'
import type { Metadata } from 'next'
import './globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Inditex Test App',
  description: 'test app created by Fernando Pérez de Ayala',
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
          <body>
            <div className={styles.header}>
              <Link
                className={styles.titleLink}
                href="/"
                style={{ display: 'inline-block' }}
              >
                <h1 className={styles.title}>PodCaster</h1>
              </Link>
            </div>
            <hr className={styles.horizontalRule} />
            {children}
          </body>
        </PodcastProvider>
      </ReactQueryClientProvider>
    </html>
  )
}
