'use client'
import PodcastContents from '@/components/PodcastContents'
import { useParams } from 'next/navigation'

export default function Podcast() {
  const { podcastId } = useParams()

  return <PodcastContents podcastId={podcastId as string} />
}
