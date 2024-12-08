import { podcastFilter } from '../helpers/podcastFilter'
import { podcasts } from '../fixtures/podcasts'

describe('Podcast Filter', () => {
  it('should return the whole array when input is an empty string', () => {
    const result = podcastFilter(podcasts, '')
    expect(result).toEqual(podcasts)
  })
})
