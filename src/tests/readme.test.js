import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Readme } from 'src/components/readme'

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

it('readme should has two p tags and two h1 tags', () => {
  act(() => {
    render(<Readme />, container)
  })
  expect(container.querySelectorAll('p')).toHaveLength(2)
  expect(container.querySelectorAll('h1')).toHaveLength(2)
  expect(container.querySelector('h1').textContent).toBe('Commit Stalker')
})
