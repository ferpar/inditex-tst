import { ReactQueryClientProvider } from '@/core/Providers/ReactQueryClientProvider'
import { PageTransitionProvider } from '@/core/Providers/PageTransitionProvider'
import type { Metadata } from 'next'
import CustomLink from '@/components/CustomLink'
import TransitionIndicator from '@/components/TransitionIndicator'
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
        <PageTransitionProvider>
          <body>
            <div className={styles.header}>
              <CustomLink
                className={styles.titleLink}
                href="/"
                style={{ display: 'inline-block' }}
              >
                <h1 className={styles.title}>PodCaster</h1>
              </CustomLink>
              <TransitionIndicator />
            </div>
            <hr className={styles.horizontalRule} />
            {children}
          </body>
        </PageTransitionProvider>
      </ReactQueryClientProvider>
    </html>
  )
}
