import React from 'react';
import emoji from 'node-emoji';
import 'src/styles/commit_row.scss';
import BrowseRepoButton from 'src/components/browseRepoButton';
import Hidden from '@material-ui/core/Hidden';

export type CommitInfo = {
  sha: string;
  authorName: string;
  authorUrl: string;
  avatarUrl: string;
  repoUrl: string;
  date: Date;
  isVerified: boolean;
  commitMessage: string;
  commitUrl: string;
};

type CommitRowProps = {
  json: CommitInfo;
  user: string;
  repo: string;
};
export const CommitRow = (props: CommitRowProps) => {
  const { json, user, repo } = props;
  const { sha, authorName, authorUrl, avatarUrl, repoUrl, date, isVerified, commitMessage, commitUrl } = json;
  const [messageTitle, messageBody] = commitMessage.split(/(?<=^[^\n]+?)\n/);
  const verifyMark =
    isVerified === true ? (
      <div className="table-list-cell">
        <div className="verify-mark">Verified</div>
      </div>
    ) : (
      <></>
    );
  const browseRepoButton = sha ? (
    <div className="table-list-cell">
      <BrowseRepoButton link={repoUrl} />
    </div>
  ) : (
    <></>
  );

  return (
    <li className="commit-list-item">
      <div className="table-list-cell" style={{ width: '800px' }}>
        <div className="commit-title">
          <a className="message-link" data-pjax="true" href={commitUrl} target="_blank" rel="noopener noreferrer">
            {emoji.emojify(messageTitle)}
          </a>
          <div>{emoji.emojify(messageBody)}</div>
        </div>
        <div className="author-area">
          <a href={authorUrl} target="_blank" rel="noopener noreferrer">
            <img className="author-avatar" alt="author-avatar" src={avatarUrl} />
          </a>
          <a
            className="author-link"
            data-pjax="true"
            href={`https://github.com/${user}/${repo}/commits?author=${authorName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {authorName}
          </a>
          <span className="date">
            committed on {date.toLocaleDateString()}
            &nbsp;
            {date.toLocaleTimeString()}
          </span>
        </div>
      </div>
      {verifyMark}
      <Hidden only={['xs']}>{browseRepoButton}</Hidden>
    </li>
  );
};
