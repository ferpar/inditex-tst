import Image from 'next/image'
import Link from 'next/link'
import { type Podcast } from '@/types'
import styles from './PodcastCard.module.css'

const PodcastCard = ({ podcast }: { podcast: Podcast }) => {
  const podcastId = podcast.id.attributes['im:id']
  return (
    <Link className={styles.card} href={`/podcast/${podcastId}`}>
      {podcast['im:image'][2] !== undefined ? (
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={podcast['im:image'][2].label}
              fill={true}
              alt={podcast['im:name'].label}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ) : null}
      <div className={styles.contentSection}>
        <h2 className={styles.contentTitle}>{podcast['im:name'].label}</h2>
        <p className={styles.contentAuthor}>
          Author: {podcast['im:artist'].label}
        </p>
      </div>
    </Link>
  )
}

export default PodcastCard
