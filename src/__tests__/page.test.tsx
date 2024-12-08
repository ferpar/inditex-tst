import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Page from '../app/page'
import { describe } from 'node:test'
import { podcasts } from '../fixtures/podcasts'

// mocking the useQuery hook
//need to mock since changing the useQuery property is not allowed by 3rd party library
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn().mockImplementation(() => {
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
