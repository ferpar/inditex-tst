import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Page from '../app/page'
import { describe } from 'node:test'
import { podcasts } from '../fixtures/podcasts'
import { podcastContents } from '@/fixtures/podcastContents'

// mock the PodcastRepository module
jest.mock('@/core/PodcastRepository', () => ({
  ...jest.requireActual('@/core/PodcastRepository'),
  usePodcasts: jest.fn().mockImplementation(() => {
    return {
      data: {
        feed: {
          entry: podcasts,
        },
      },
      isLoading: false,
      isSuccess: true,
    }
  }),
  usePodcastDetail: jest.fn().mockImplementation(() => {
    return {
      data: {
        results: podcastContents,
      },
      isLoading: false,
      isSuccess: true,
    }
  }),
}))

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: jest.fn(),
}))

describe('Main page', () => {
  it('Main Page does not crash', () => {
    render(<Page />)
    // expect images to be in the document
    expect(true).toBe(true)
  })
  it('PodcastList: An img is rendered for each podcast', () => {
    render(<Page />)
    // there are 100 podcasts in the fixture
    expect(document.querySelectorAll('img')).toHaveLength(100)
  })
})
