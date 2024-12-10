'use client'
import { usePodcastDetail } from '@/core/PodcastRepository'
import { getFormattedDate, milliToClock } from '@/helpers/time'
import CustomLink from '@/components/CustomLink'
import { pageLimit } from '@/core/constants'
import styles from './PodcastContents.module.css'

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

  const podcastCount =
    podcastContents?.resultCount - 1 === pageLimit
      ? `${pageLimit}+`
      : podcastContents?.resultCount - 1

  return (
    <div className={styles.podcastsInfo}>
      <div className={styles.podcastsSummary}>
        Episodes: {isLoading ? 'Loading...' : podcastCount}
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
                    <CustomLink
                      href={`/podcast/${podcastId}/episode/${content.trackId}`}
                    >
                      {content.trackName.split('|')[1] || content.trackName}
                    </CustomLink>
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
