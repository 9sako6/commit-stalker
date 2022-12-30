import { useQuery } from '@tanstack/react-query'
import { mdToHtml } from '../lib/md-to-html';
import { Commits } from '../models/commits';

export const URL = 'https://api.github.com'

export type SearchQueryParams = {
  owner: string;
  repository: string;
  page: number;
}

export class NetworkError extends Error { }

const extractTotalPage = (headers: Response['headers']) => {
  const link = headers.get('link')
  console.log(link)
  if (!link) return;
  const mathced = link.match(/page=(?<TotalPage>\d+)>; rel="last"/)
  if (!mathced || !mathced.groups) return;
  return Number(mathced.groups['TotalPage'])
}

export const useSearchQuery = ({ owner, repository, page }: SearchQueryParams) =>
  useQuery({
    queryKey: ['searchCommits'],
    queryFn: async () => {
      const res = await fetch(`${URL}/repos/${owner}/${repository}/commits?per_page=100&page=${page}`)
      const json = await res.json()
      if (!res.ok) {
        throw new NetworkError(json.message || 'An error has occurred. Please wait a moment and try again.')
      }
      const totalPage = extractTotalPage(res.headers)

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
