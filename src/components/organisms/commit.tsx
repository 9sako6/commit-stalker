import { splitTitleBody } from '@/src/lib/split-title-body';
import type { Commit as CommitType } from '@/src/models/commit';
import { Avatar } from '../atom/avatar';
import { format } from 'date-fns'

export const Commit = ({ author, commit, url, html_url }: CommitType) => {
  const { message: commitMessage } = commit;
  const [messageTitle, messageBody] = splitTitleBody(commitMessage);
  const [owner, repository] = url.split('/').slice(4, 6)
  const date = commit.author?.date && format(new Date(commit.author.date), 'yyyy-MM-dd HH:mm:ss O')

  return (
    <div className='py-2 px-4 mb-4 break-words bg-slate-50 rounded'>
      <div>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className='hover:underline'
        >
          <h2
            className='commit-title text-lg font-bold'
            dangerouslySetInnerHTML={{ __html: messageTitle }}
          ></h2>
        </a>
        <div className='znc' dangerouslySetInnerHTML={{ __html: messageBody }} />
      </div>
      <div className='md:flex items-center pt-2 text-sm'>
        <div className='flex'>
          <a href={author?.html_url} target="_blank" rel="noopener noreferrer" className='md:flex items-center pr-1'>
            <Avatar url={author?.avatar_url} />
          </a>
          <a
            href={`https://github.com/${owner}/${repository}/commits?author=${commit.author?.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className='hover:underline'
          >
            {commit.author?.name}
          </a>
        </div>
        {date && <div className='text-gray-700 md:pl-1'>
          committed on {date}
        </div>}
      </div>
    </div>
  );
};
