import { URL as GITHUB_API_URL } from '@/src/hooks/github-api'
import { rest } from 'msw'

type CreateHandlerMockParams = {
  url: string;
  responseBody: any;
  responseStatus: number;
}

export const createHandlerMock = ({ url, responseBody, responseStatus }: CreateHandlerMockParams) => {
  return rest.get(url, (_req, res, ctx) => {
    return res(
      ctx.status(responseStatus),
      ctx.json(responseBody)
    )
  })
}
