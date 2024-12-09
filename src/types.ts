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
