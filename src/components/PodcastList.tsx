'use client'
import React from 'react'
import { getPodcasts } from '@/core/ApiGateway'
import { useQuery } from '@tanstack/react-query'
import PodcastCard from './PodcastCard'
import { podcastFilter } from '@/helpers/podcastFilter'
import { type Podcast } from '@/core/Providers/PodcastContext'
import styles from './PodcastList.module.css'

const PodcastList = () => {
  const [filterText, setFilterText] = React.useState('')
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })

  const podcasts = data?.feed?.entry
  const filteredPodcasts = podcastFilter(podcasts, filterText)

  const podcastNumber = filteredPodcasts?.length

  return (
    <div>
      <div className={styles.topSection}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && <p>Success</p>}
        <div className={styles.podcastCount}>{podcastNumber}</div>
        <input
          className={styles.filterInput}
          placeholder="Filter podcasts..."
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className={styles.mainGrid}>
        {!!filteredPodcasts &&
          filteredPodcasts.map((podcast: Podcast) => (
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
