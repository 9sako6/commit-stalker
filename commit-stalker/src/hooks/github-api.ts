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

export const useSearchQuery = ({ owner, repository, page }: SearchQueryParams) =>
  useQuery({
    queryKey: ['searchCommits'],
    queryFn: async () => {
      const res = await fetch(`${URL}/repos/${owner}/${repository}/commits?per_page=100&page=${page}`)
      const json = await res.json()
      if (!res.ok) {
        throw new NetworkError(json.message || 'An error has occurred. Please wait a moment and try again.')
      }

      const commits = Commits.parse(json)

      return await Promise.all(commits.map(async commit => {
        const html = await mdToHtml(commit.commit.message)
        commit.commit.message = html
        return commit
      }))
    },
    retry: false,
    enabled: !!owner && !!repository && !!page,
    refetchOnWindowFocus: false,
  })
