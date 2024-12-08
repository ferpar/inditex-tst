'use client'
import { getPodcasts } from '@/core/ApiGateway'
import { useQuery } from '@tanstack/react-query'
import PodCastCard from './PodCastCard'
import { type Podcast } from '@/core/Providers/PodcastContext'

const PodcastList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })

  return (
    <div>
      <h2>PodcastList</h2>
      {isLoading && <p>Loading...</p>}
      {isSuccess && <p>Success</p>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        }}
      >
        {!!data &&
          data.feed.entry.map((podcast: Podcast) => (
            <PodCastCard
              key={podcast.id.attributes['im:id']}
              podcast={podcast}
            />
          ))}
      </div>
    </div>
  )
}

export default PodcastList
