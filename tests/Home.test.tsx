import { vi } from 'vitest'
import { render } from '@testing-library/react'
import Home from '@/src/pages'
import { wrapper } from './__mocks__/hooks/query-client-wrapper'

vi.mock('@next/font/google', async () => {
  return {
    Inter: vi.fn(() => ({ className: '' }))
  }
})

vi.mock('next/router', async () => {
  return {
    useRouter: vi.fn(() => ({
      query: vi.fn()
    }))
  }
})

test('home', () => {
  const { getByRole } = render(wrapper({ children: <Home /> }))
  getByRole('heading', { name: 'Commit Stalker' })
})
