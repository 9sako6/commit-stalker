import { useQuery } from '@tanstack/react-query'
import { Commits } from '../models/commits';

export const URL = 'https://api.github.com'

export type SearchQueryParams = {
  owner: string;
  repository: string;
}

export const useSearchQuery = ({ owner, repository }: SearchQueryParams) =>
  useQuery({
    queryKey: ['searchCommits'],
    queryFn: () =>
      fetch(`${URL}/repos/${owner}/${repository}/commits?per_page=100`)
        .then(res => res.json())
        .then(json => Commits.parse(json)),
    enabled: !!owner && !!repository,
    refetchOnWindowFocus: false,
  })
