'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePodcasts } from '@/core/PodcastRepository'
import styles from './PodcastProfile.module.css'
import { type Podcast } from '@/core/Providers/PodcastContext'
type Props = {
  podcastId: string
}

export default function PodcastProfile({ podcastId }: Props) {
  const { data, isLoading } = usePodcasts()

  const podcast = data?.feed?.entry?.find(
    (podcast: Podcast) => podcast.id.attributes['im:id'] === podcastId
  )

  return (
    <div className={styles.podcasterProfile}>
      {isLoading && <p>loading podcast details...</p>}
      {podcast && (
        <div className={styles.profileCard}>
          <div className={styles.imageSection}>
            <Link href={`/podcast/${podcastId}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={podcast['im:image'][2].label}
                  fill={true}
                  alt={podcast['im:name'].label}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          </div>
          <hr className={styles.horizontalRule} />
          <div className={styles.titleSection}>
            <h2>
              <Link href={`/podcast/${podcastId}`}>
                {podcast['im:name']?.label}
              </Link>
            </h2>
            <p>by {podcast['im:artist'].label}</p>
          </div>
          <hr className={styles.horizontalRule} />
          <div className={styles.description}>
            <p>
              <b>Description:</b>
            </p>
            <p>{podcast?.summary?.label}</p>
          </div>
        </div>
      )}
    </div>
  )
}
