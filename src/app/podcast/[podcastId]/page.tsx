'use client'
import React from 'react'
import PodcastProfile from '@/components/PodcastProfile'
import PodcastContents from '@/components/PodcastContents'
import { useParams } from 'next/navigation'
import { type Podcast } from '@/core/Providers/PodcastContext'
import styles from './page.module.css'

export default function Podcast() {
  const { podcastId } = useParams()

  return (
    <div className={styles.detailWrapper}>
      <PodcastProfile podcastId={podcastId as string} />
      <PodcastContents podcastId={podcastId as string} />
    </div>
  )
}
