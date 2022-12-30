import { rest } from 'msw'
import { URL as GITHUB_API_URL } from '@/src/hooks/github-api'

import rustResponse from '@/tests/fixtures/github-api-response/rust-lang.rust.json'
import forbiddenResponse from '@/tests/fixtures/github-api-response/403.json'

export const handlers = [
  rest.get(`${GITHUB_API_URL}/repos/9sako6/commit-stalker/commits`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    )
  }),
  rest.get(`${GITHUB_API_URL}/repos/rust-lang/rust/commits`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(rustResponse)
    )
  }),
  rest.get(`${GITHUB_API_URL}/repos/9sako6/forbidden/commits`, (_req, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.json(forbiddenResponse)
    )
  })
]
