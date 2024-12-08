import { podcastFilter } from '../helpers/podcastFilter'
import { podcasts } from '../fixtures/podcasts'

describe('Podcast Filter', () => {
  it('should return the whole array when input is an empty string', () => {
    const result = podcastFilter(podcasts, '')
    expect(result).toEqual(podcasts)
  })

  it('should return an empty array when no match is found', () => {
    const result = podcastFilter(podcasts, 'no match')
    expect(result).toEqual([])
  })

  it('should return the correct number of matches', () => {
    const result = podcastFilter(podcasts, 'podcast')
    expect(result).toHaveLength(28)
    const result2 = podcastFilter(podcasts, 'podcast 1')
    expect(result2).toHaveLength(0)
    const result3 = podcastFilter(podcasts, 'history')
    expect(result3).toHaveLength(2)
  })
})
