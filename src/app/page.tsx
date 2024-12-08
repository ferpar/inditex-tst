import PodcastList from '@/components/PodcastList'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>PodCaster</h1>
      </div>
      <hr className={styles.horizontalRule} />
      <PodcastList />
    </div>
  )
}
