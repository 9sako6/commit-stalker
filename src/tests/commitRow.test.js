import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { CommitRow } from 'src/components/commitRow'

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders with json from GitHub', () => {
  const json = {
    sha: '',
    authorName: '',
    authorUrl: '',
    avatarurl: '',
    repoUrl: '',
    date: new Date('2020-05-04T11:03:36Z'),
    isVerified: true,
    commitMessage: '',
    commitUrl: ''
  }

  act(() => {
    render(<CommitRow user='' repo='' json={json} rowHeight={100} />, container)
  })
})
