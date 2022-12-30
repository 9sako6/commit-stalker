import { splitTitleBody } from '@/src/lib/split-title-body';
import type { Commit as CommitType } from '@/src/models/commit';
import { Avatar } from '../atom/avatar';

export const Commit = ({ author, sha, commit, commiter }: CommitType) => {
  const { message: commitMessage } = commit;
  const [messageTitle, messageBody] = splitTitleBody(commitMessage);

  return (
    <div className='py-2 px-4 mb-4 break-words'>
      <div>
        {/* <a className="message-link" data-pjax="true" href={commitUrl} target="_blank" rel="noopener noreferrer">
            {emoji.emojify(messageTitle)}
          </a> */}
        {/* <div>{emoji.emojify(messageBody)}</div> */}
        <h2
          className='commit-title text-lg font-bold'
          dangerouslySetInnerHTML={{ __html: messageTitle }}
        ></h2>
        <div className='znc' dangerouslySetInnerHTML={{ __html: messageBody }} />
        {/* <ReactMarkdown source={emoji.emojify(messageBody)} /> */}
      </div>
      <div>
        <a href={author?.html_url} target="_blank" rel="noopener noreferrer">
          <Avatar url={author?.avatar_url} />
        </a>
        <a
          data-pjax="true"
          // href={`https://github.com/${user}/${repo}/commits?author=${authorName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {commit.author?.name}
        </a>
        <time>
          committed on {commit.author?.date}
          &nbsp;
          {commit.author?.date}
        </time>
      </div>
      {/* {verifyMark} */}
      {/* <Hidden only={['xs']}>{browseRepoButton}</Hidden> */}
    </div>
  );
};
