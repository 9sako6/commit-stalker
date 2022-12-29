import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../pages'

vi.mock('@next/font/google', async () => {
  return {
    Inter: vi.fn(() => ({ className: '' }))
  }
})

test('home', () => {
  const { getByRole } = render(<Home />)
  expect(getByRole('img', { name: /next\.js logo/i })).toBeDefined()
})
