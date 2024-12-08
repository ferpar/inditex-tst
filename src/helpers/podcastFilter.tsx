import { Podcast } from '@/core/Providers/PodcastContext'

export function podcastFilter(input: Podcast[], filter: string): Podcast[] {
  return input?.filter((podcast) => {
    const condition1 = podcast['im:name'].label
      .toLowerCase()
      .includes(filter.toLowerCase())
    const condition2 = podcast['im:artist'].label
      .toLowerCase()
      .includes(filter.toLowerCase())
    return condition1 || condition2
  })
}
