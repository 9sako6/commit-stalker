import React from 'react';
import emoji from 'node-emoji';
import 'src/styles/commit_row.scss';
import BrowseRepoButton from 'src/components/browseRepoButton';
import Hidden from '@material-ui/core/Hidden';

export type CommitInfo = {
  sha: string;
  author_name: string;
  author_url: string;
  avatar_url: string;
  repo_url: string;
  date: Date;
  isVerified: boolean;
  commit_message: string;
  commit_url: string;
};

type CommitRowProps = {
  json: CommitInfo;
  user: string;
  repo: string;
};
export default (props: CommitRowProps) => {
  const { json, user, repo } = props;
  const { sha, author_name, author_url, avatar_url, repo_url, date, isVerified, commit_message, commit_url } = json;
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
      <BrowseRepoButton link={repo_url} />
    </div>
  ) : (
    <></>
  );

  return (
    <li className="commit-list-item">
      <div className="table-list-cell" style={{ width: '800px' }}>
        <p className="commit-title">
          <a className="message-link" data-pjax="true" href={commit_url} target="_blank" rel="noopener noreferrer">
            {emoji.emojify(commit_message)}
          </a>
        </p>
        <div className="author-area">
          <a href={author_url} target="_blank" rel="noopener noreferrer">
            <img className="author-avatar" alt="author-avatar" src={avatar_url} />
          </a>
          <a
            className="author-link"
            data-pjax="true"
            href={`https://github.com/${user}/${repo}/commits?author=${author_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author_name}
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
