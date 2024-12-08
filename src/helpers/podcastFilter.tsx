import { Podcast } from '@/core/Providers/PodcastContext'

export function podcastFilter(input: Podcast[], filter: string): Podcast[] {
  return input.filter((podcast) => {
    return podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase())
  })
}
