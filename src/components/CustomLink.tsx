'use client'

import { useTransition, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { usePageTransition } from '@/core/Providers/PageTransitionProvider'

import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  style?: React.CSSProperties
}

function CustomLink({
  href,
  children,
  className,
  activeClassName,
  style,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const { setIsTransitioning } = usePageTransition()
  const [, startTransition] = useTransition()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('handleClick')
    setIsTransitioning(true)
    startTransition(() => {
      router.push(href)
    })
  }

  useEffect(() => {
    console.log('useEffect')
    setIsTransitioning(false)
  }, [pathname, setIsTransitioning])

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={pathname === href ? activeClassName : className}
      style={style}
    >
      {children}
    </Link>
  )
}

export default CustomLink
