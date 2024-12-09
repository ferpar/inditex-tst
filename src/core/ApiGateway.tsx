import { allOriginsWrapper } from '@/helpers/AllOrigins'

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
}

export const getPodcastDetail = async (id: string) => {
  const url = allOriginsWrapper(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
  )

  const data = await fetch(url).then((response) => {
    if (response.ok) return response.json()
    throw new Error('Network response was not ok.')
  })

  return JSON.parse(data?.contents)
}
