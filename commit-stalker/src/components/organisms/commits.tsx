import type { Commits as CommitsType } from '@/src/models/commits';
import { Commit } from './commit';
import { InfoMessage } from './info-message';

type Props = {
  commits: CommitsType
}

export const Commits = ({ commits }: Props) => {
  if (commits.length === 0) {
    return <InfoMessage>No results found.</InfoMessage>
  }
  return (
    <div>
      {commits.map(commit =>
        <div key={commit.sha}>
          <Commit {...commit} />
        </div>)}
    </div>
  )
}
