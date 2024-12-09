'use client'
import { useParams } from 'next/navigation'
import EpisodeCard from '@/components/EpisodeCard'

export default function PodcastDetailPage() {
  const { podcastId, episodeId } = useParams()

  return (
    <div>
      <EpisodeCard
        podcastId={podcastId as string}
        episodeId={episodeId as string}
      />
    </div>
  )
}
