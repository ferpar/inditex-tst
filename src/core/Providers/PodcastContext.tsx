'use client'
import React from 'react'

export type Podcast = {
  category: {
    attributes: {
      'im:id': string
      term: string
      label: string
      scheme: string
    }
  }
  id: {
    attributes: {
      'im:id': string
    }
    label: string
  }
  'im:artist': {
    label: string
    attributes?: {
      href: string
    }
  }
  'im:contentType': {
    attributes: {
      term: string
      label: string
    }
  }
  'im:image': {
    label: string
    attributes: {
      height: string
    }
  }[]
  'im:name': {
    label: string
  }
  'im:releaseDate': {
    label: string
    attributes: {
      label: string
    }
  }
  link: {
    attributes: {
      rel: string
      type: string
      href: string
    }
  }
  rights?: {
    label: string
  }
  summary: {
    label: string
  }
  'im:price'?: {
    label: string
    attributes: {
      amount: string
      currency: string
    }
  }
  title: {
    label: string
  }
}

export interface PodcastContextType {
  podcasts: Partial<Podcast>[]
  setPodcasts: (podcasts: Podcast[]) => void
  podCastDetail: Podcast
  setPodCastDetail: (podCastDetail: Podcast) => void
}

export const initialPodcastDetail: Podcast = {
  category: { attributes: { 'im:id': '', term: '', label: '', scheme: '' } },
  id: { attributes: { 'im:id': '' }, label: '' },
  'im:artist': { label: '', attributes: { href: '' } },
  'im:contentType': { attributes: { term: '', label: '' } },
  'im:image': [{ label: '', attributes: { height: '' } }],
  'im:name': { label: '' },
  'im:releaseDate': { label: '', attributes: { label: '' } },
  link: { attributes: { rel: '', type: '', href: '' } },
  rights: { label: '' },
  summary: { label: '' },
  title: { label: '' },
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
