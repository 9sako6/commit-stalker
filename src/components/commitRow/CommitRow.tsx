import React from 'react';
import emoji from 'node-emoji';
import 'src/styles/commit_row.scss';
import { GitHubAPIResponse } from 'src/typings/github-api';

type CommitRowProps = {
  json: GitHubAPIResponse;
  user: string;
  repo: string;
};
export default (props: CommitRowProps) => {
  const author = props.json.author === null ? 'anonymous author' : props.json.author.login;
  const author_link = props.json.author === null ? '#' : props.json.author.html_url;
  const avatar_url = props.json.author === null ? '#' : props.json.author.avatar_url;
  const date = new Date(props.json.commit.author.date);

  const isVerified = props.json.commit.verification.verified;
  const verifyMark =
    isVerified === true ? (
      <div className="table-list-cell">
        <div className="verify-mark">Verified</div>
      </div>
    ) : (
      <></>
    );
  return (
    <li className="commit-list-item">
      <div className="table-list-cell" style={{ width: '800px' }}>
        <p className="commit-title">
          <a
            className="message-link"
            data-pjax="true"
            href={props.json.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {emoji.emojify(props.json.commit.message)}
          </a>
        </p>
        <div className="author-area">
          <a href={author_link} target="_blank" rel="noopener noreferrer">
            <img className="author-avatar" alt="author-avatar" src={avatar_url} />
          </a>
          <a
            className="author-link"
            data-pjax="true"
            href={`https://github.com/${author}/${props.repo}/commit?author=${author}`}
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
    </li>
  );
};
