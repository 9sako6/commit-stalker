import { Resources } from "@/src/models/resources"
import { useQuery } from "@tanstack/react-query"
import { GITHUB_API_URL } from "."

export class UnexpectedError extends Error { }

export const useRateLimit = () =>
  useQuery({
    queryFn: async () => {
      const res = await fetch(`${GITHUB_API_URL}/rate_limit`)
      const json = await res.json()
      if (!res.ok) {
        throw new UnexpectedError(json.message || 'An unexpected error has occurred. Please wait a moment and try again.')
      }

      return Resources.parse(json)
    }
  })
