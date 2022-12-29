import { expect, test } from 'vitest'
import { Readme } from '@/src/components/organisms/readme'
import { render } from '@testing-library/react'

test('Readme', () => {
  const { getByRole } = render(<Readme />)
  expect(getByRole('heading', { name: 'Commit Stalker' })).toBeDefined()
  expect(getByRole('heading', { name: 'More Details' })).toBeDefined()
})
