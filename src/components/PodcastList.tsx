'use client'
import { getPodcasts } from '@/core/ApiGateway'
import { useQuery } from '@tanstack/react-query'
import PodcastCard from './PodcastCard'
import { type Podcast } from '@/core/Providers/PodcastContext'
import styles from './PodcastList.module.css'

const PodcastList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })

  const podcasts = data?.feed?.entry

  return (
    <div>
      <h2>PodcastList</h2>
      {isLoading && <p>Loading...</p>}
      {isSuccess && <p>Success</p>}
      <div className={styles.mainGrid}>
        {!!podcasts &&
          podcasts.map((podcast: Podcast) => (
            <PodcastCard
              key={podcast.id.attributes['im:id']}
              podcast={podcast}
            />
          ))}
      </div>
    </div>
  )
}

export default PodcastList
