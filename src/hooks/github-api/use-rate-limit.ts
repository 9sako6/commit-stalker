import { Resources } from "@/src/models/resources"
import { useQuery } from "@tanstack/react-query"
import { GITHUB_API_URL } from "."
import { useAccessToken } from "../use-access-token"

export class UnexpectedError extends Error { }

export const useRateLimit = () => {
  const [accessToken] = useAccessToken()

  return useQuery({
    queryKey: ['rateLimit'],
    queryFn: async () => {
      const headers = accessToken ? new Headers({
        authorization: accessToken ? `Bearer ${accessToken}` : ''
      }) : new Headers()
      const res = await fetch(`${GITHUB_API_URL}/rate_limit`, {
        headers
      })
      const json = await res.json()
      if (!res.ok) {
        throw new UnexpectedError(json.message || 'An unexpected error has occurred. Please wait a moment and try again.')
      }

      return Resources.parse(json)
    },
    refetchInterval: 500,
    refetchOnMount: 'always',
    cacheTime: 0
  })
}
