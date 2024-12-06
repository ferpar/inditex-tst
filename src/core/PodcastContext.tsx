'use client'
import React from 'react'

interface Podcast {
  id: string
  title: string
  description: string
  imageUrl: string
}

interface PodcastContextType {
  podcasts: Partial<Podcast>[]
  setPodcasts: (podcasts: Podcast[]) => void
  podCastDetail: Podcast
  setPodCastDetail: (podCastDetail: Podcast) => void
}

export const initialPodcastDetail: Podcast = {
  id: '',
  title: '',
  description: '',
  imageUrl: '',
}

export const PodcastContext = React.createContext<PodcastContextType>({
  podcasts: [],
  setPodcasts: () => {},
  podCastDetail: initialPodcastDetail,
  setPodCastDetail: () => {},
})

export const PodcastProvider = ({ children }: React.PropsWithChildren) => {
  const [podcasts, setPodcasts] = React.useState<Partial<Podcast>[]>([])
  const [podCastDetail, setPodCastDetail] =
    React.useState<Podcast>(initialPodcastDetail)
  return (
    <PodcastContext.Provider
      value={{ podcasts, setPodcasts, podCastDetail, setPodCastDetail }}
    >
      {children}
    </PodcastContext.Provider>
  )
}
