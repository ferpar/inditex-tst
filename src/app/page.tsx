import PodcastList from '@/components/PodcastList'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <hr className={styles.horizontalRule} />
      <PodcastList />
    </div>
  )
}
