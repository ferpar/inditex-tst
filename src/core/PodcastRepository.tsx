import { getPodcasts, getPodcastDetail } from '@/core/ApiGateway'
import { useQuery } from '@tanstack/react-query'

const usePodcasts = () => {
  return useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })
}

const usePodcastDetail = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcastDetail', podcastId],
    queryFn: () => getPodcastDetail(podcastId),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })
}

export { usePodcasts, usePodcastDetail }
