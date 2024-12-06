import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Page from '../app/page'
import { describe } from 'node:test'

describe('Main page', () => {
  it('Main Page does not crash', () => {
    render(<Page />)
    expect(true).toBe(true)
  })
})
