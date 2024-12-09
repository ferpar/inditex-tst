'use client'
import { usePodcastDetail } from '@/core/PodcastRepository'
import styles from './EpisodeCard.module.css'
import DOMPurify from 'dompurify' // sanitizes HTML on the description

type Episode = {
  trackName: string //title
  description: string
  trackId: number
}

type Props = {
  podcastId: string
  episodeId: string
}

export default function EpisodeCard({ podcastId, episodeId }: Props) {
  const { data: podcast, isLoading } = usePodcastDetail(podcastId)
  const episode = podcast?.results?.find((episode: Episode) => {
    return episode.trackId === parseInt(episodeId)
  })

  const cleanDescription = DOMPurify.sanitize(episode?.description)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!episode) {
    return <div>Episode not found</div>
  }

  return (
    <div className={styles.episodeCard}>
      <h2 className={styles.episodeTitle}>{episode?.trackName}</h2>
      <div
        className={styles.episodeDescription}
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      />
    </div>
  )
}
