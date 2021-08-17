/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import { CommitRowTable } from 'src/components/commitRowTable'

// import jsonList from './fixtures/rails_rails_20200504214243.json'

const setup = (props) => render(<CommitRowTable {...props} />)

test('It should render nothing when jsonList props is undefined', () => {
  const { container } = setup({ jsonList: undefined })
  expect(container.querySelectorAll('li.commit-list-item')).toHaveLength(0)
})
