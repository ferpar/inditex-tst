'use client'
import React from 'react'
import PodcastProfile from '@/components/PodcastProfile'
import { useParams } from 'next/navigation'
import styles from './layout.module.css'

export default function PodcastLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { podcastId } = useParams()

  return (
    <div className={styles.detailWrapper}>
      <PodcastProfile podcastId={podcastId as string} />
      {children}
    </div>
  )
}
