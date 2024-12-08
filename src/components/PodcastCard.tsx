import Image from 'next/image'
import { type Podcast } from '../core/Providers/PodcastContext'
import styles from './PodcastCard.module.css'
const PodcastCard = ({ podcast }: { podcast: Podcast }) => {
  return (
    <div className={styles.card}>
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
    </div>
  )
}

export default PodcastCard
