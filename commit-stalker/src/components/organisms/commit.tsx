import type { Commit as CommitType } from '@/src/models/commit';
import { Avatar } from '../atom/avatar';

export const Commit = ({ author, sha, commit, commiter }: CommitType) => {
  const { message: commitMessage } = commit;
  const [messageTitle, messageBody] = commitMessage.split(/(?<=^[^\n]+?)\n/);

  return (
    <div>
      <div>
        {/* <a className="message-link" data-pjax="true" href={commitUrl} target="_blank" rel="noopener noreferrer">
            {emoji.emojify(messageTitle)}
          </a> */}
        {/* <div>{emoji.emojify(messageBody)}</div> */}
        <h2>{messageTitle}</h2>
        <div>{messageBody}</div>
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
