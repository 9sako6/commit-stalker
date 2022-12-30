import type { Commits as CommitsType } from '@/src/models/commits';
import { Commit } from './commit';

type Props = {
  commits: CommitsType
}

export const Commits = ({ commits }: Props) => {
  return (
    <div>
      {commits.map(commit =>
        <div key={commit.sha}>
          <Commit {...commit} />
        </div>)}
    </div>
  )
}
