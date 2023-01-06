import { useQuery } from '@tanstack/react-query'
import { GITHUB_API_URL } from '.';
import { mdToHtml } from '../../lib/md-to-html';
import { Commits } from '../../models/commits';
import { useAccessToken } from '../use-access-token';

export type SearchQueryParams = {
  owner: string;
  repository: string;
  page: number;
}

export class NetworkError extends Error { }

const extractTotalPage = (headers: Response['headers']) => {
  const link = headers.get('link')
  if (!link) return;
  const mathced = link.match(/page=(?<TotalPage>\d+)>; rel="last"/)
  if (!mathced || !mathced.groups) return;
  return Number(mathced.groups['TotalPage'])
}

const getTotalPageFromLocalStorage = (owner: string, repository: string) => {
  const stored = localStorage.getItem(`${owner}/${repository}`)
  if (!stored) return;

  return Number(stored)
}

export const useSearchQuery = ({ owner, repository, page }: SearchQueryParams) => {
  const [accessToken] = useAccessToken()

  return useQuery({
    queryKey: ['searchCommits', owner, repository, page],
    queryFn: async () => {
      const headers = accessToken ? new Headers({
        authorization: accessToken ? `Bearer ${accessToken}` : ''
      }) : new Headers()
      const res = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repository}/commits?per_page=100&page=${page}`, {
        headers
      })
      const json = await res.json()
      if (!res.ok) {
        throw new NetworkError(json.message || 'An error has occurred. Please wait a moment and try again.')
      }
      const totalPage = extractTotalPage(res.headers) || getTotalPageFromLocalStorage(owner, repository)

      if (totalPage) {
        localStorage.setItem(`${owner}/${repository}`, String(totalPage))
      }

      const commits = await Promise.all(Commits.parse(json).map(async commit => {
        const html = await mdToHtml(commit.commit.message)
        commit.commit.message = html
        return commit
      }))

      return {
        commits, totalPage
      }
    },
    retry: false,
    enabled: !!owner && !!repository && !!page,
    refetchOnWindowFocus: false,
  })
}
