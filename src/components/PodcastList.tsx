'use client'
import { getPodcasts } from '@/core/ApiGateway'
import { useQuery } from '@tanstack/react-query'
import PodCastCard from './PodCastCard'
import { type Podcast } from '@/core/Providers/PodcastContext'

const PodcastList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  return (
    <div>
      <h2>PodcastList</h2>
      {isLoading && <p>Loading...</p>}
      {isSuccess && <p>Success</p>}
      {!!data &&
        data.feed.entry.map((podcast: Podcast) => (
          <PodCastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
        ))}
    </div>
  )
}

export default PodcastList
