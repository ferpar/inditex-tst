'use client'
import { getPodcasts } from '@/core/ApiGateway'
import { useQuery } from '@tanstack/react-query'

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
      {!!data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default PodcastList
