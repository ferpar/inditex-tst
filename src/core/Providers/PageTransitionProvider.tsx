'use client'
import React from 'react'

type Context = {
  isTransitioning: boolean
  setIsTransitioning: (isTransitioning: boolean) => void
}

export const PageTransitionContext = React.createContext<Context>({
  isTransitioning: false,
  setIsTransitioning: () => {},
})

export function PageTransitionProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  return (
    <PageTransitionContext.Provider
      value={{ isTransitioning, setIsTransitioning }}
    >
      {children}
    </PageTransitionContext.Provider>
  )
}

export function usePageTransition() {
  return React.useContext(PageTransitionContext)
}
