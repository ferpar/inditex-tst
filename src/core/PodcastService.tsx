import { allOriginsWrapper } from '@/helpers/AllOrigins'
import { pageLimit } from './constants'

export const getPodcasts = () => {
  const url = allOriginsWrapper(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        const data = response.json()
        return data
      }
      throw new Error('Network response was not ok.')
    })
    .then((data) => {
      if (!data?.contents) {
        console.error('No contents')
      }
      return JSON.parse(data?.contents)
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      )
    })
}

export const getPodcastDetail = async (id: string) => {
  const url = allOriginsWrapper(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${pageLimit}`
  )

  const data = await fetch(url)
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error('Network response was not ok.')
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      )
    })

  return JSON.parse(data?.contents)
}
