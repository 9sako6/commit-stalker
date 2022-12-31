import { GITHUB_API_URL } from "@/src/hooks/github-api";
import { useRateLimit } from "@/src/hooks/github-api/use-rate-limit";
import { Resources } from "@/src/models/resources";
import { wrapper } from "@/tests/__mocks__/hooks/query-client-wrapper";
import { createHandlerMock } from "@/tests/__mocks__/rest/create-handler";
import { server } from "@/tests/__mocks__/server";
import { renderHook, waitFor } from "@testing-library/react";
import response from "../../fixtures/github-api-response/rate-limit.json"
import 'whatwg-fetch'

beforeAll(() => { server.listen() })
beforeEach(() => { server.resetHandlers() })
afterAll(() => { server.listen() })

test('useRateLimit', async () => {
  const handlerMock = createHandlerMock({
    url: `${GITHUB_API_URL}/rate_limit`,
    responseBody: response,
    responseStatus: 200
  })
  server.use(handlerMock)

  const { result } = renderHook(() => useRateLimit(), { wrapper })
  await waitFor(() => expect(result.current.isSuccess).toBe(true))

  Resources.parse(result.current.data)
})
