import React from 'react';
import emoji from 'node-emoji';
import 'src/styles/commit_row.scss';
import { GitHubAPIResponse } from 'src/typings/github-api';
import BrowseRepoButton from 'src/components/browseRepoButton';
import Hidden from '@material-ui/core/Hidden';

type CommitRowProps = {
  json: GitHubAPIResponse;
  user: string;
  repo: string;
};
export default (props: CommitRowProps) => {
  const { json, user, repo } = props;
  const sha = json.sha;
  const author = json.author === null ? 'anonymous author' : json.author.login;
  const author_link = json.author === null ? '#' : json.author.html_url;
  const avatar_url = json.author === null ? '#' : json.author.avatar_url;
  const date = new Date(json.commit.author.date);
  const repo_url = `https://github.com/${user}/${repo}/tree/${sha ?? ''}`;
  const isVerified = json.commit.verification.verified;
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
          <a className="message-link" data-pjax="true" href={json.html_url} target="_blank" rel="noopener noreferrer">
            {emoji.emojify(json.commit.message)}
          </a>
        </p>
        <div className="author-area">
          <a href={author_link} target="_blank" rel="noopener noreferrer">
            <img className="author-avatar" alt="author-avatar" src={avatar_url} />
          </a>
          <a
            className="author-link"
            data-pjax="true"
            href={`https://github.com/${author}/${repo}/commit?author=${author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author}
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
