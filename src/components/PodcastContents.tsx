'use client'
import { usePodcastDetail } from '@/core/PodcastRepository'
import { getFormattedDate, milliToClock } from '@/helpers/time'
import styles from './PodcastContents.module.css'
import Link from 'next/link'

type PodcastContent = {
  trackId: number
  trackName: string
  releaseDate: string
  trackTimeMillis: number
}

type Props = {
  podcastId: string
}

export default function PodcastContents({ podcastId }: Props) {
  const {
    data: podcastContents,
    isLoading,
    isSuccess,
  } = usePodcastDetail(podcastId)

  console.log(podcastContents)

  return (
    <div className={styles.podcastsInfo}>
      <div className={styles.podcastsSummary}>
        Episodes: {podcastContents?.resultCount - 1}
      </div>
      <div className={styles.podcastsTable}>
        <div className={styles.podcastsTableHeader}>
          <p>Title</p>
          <p>Date</p>
          <p>Duration</p>
        </div>

        {isLoading && <p>Loading...</p>}
        {podcastContents &&
          isSuccess &&
          podcastContents.results.map(
            (content: PodcastContent, index: number) => {
              if (index === 0) return null
              return (
                <div className={styles.podcastsTableRow} key={content.trackId}>
                  <p className={styles.title}>
                    <Link
                      href={`/podcast/${podcastId}/episode/${content.trackId}`}
                    >
                      {content.trackName.split('|')[1] || content.trackName}
                    </Link>
                  </p>
                  <p className={styles.date}>
                    {getFormattedDate(content.releaseDate)}
                  </p>
                  <p className={styles.duration}>
                    {content?.trackTimeMillis
                      ? milliToClock(content.trackTimeMillis)
                      : 'N/A'}
                  </p>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}
