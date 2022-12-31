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
