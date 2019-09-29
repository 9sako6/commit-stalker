import React, { Component } from 'react';
import emoji from 'node-emoji';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
// css
import './commit_row.scss';
library.add(faCheck, faTimes);

type CommitRowProps = {
  json: any,
  user: string,
  repo: string,
};
export default class CommitRow extends Component<CommitRowProps> {
  constructor(props: CommitRowProps) {
    super(props);
  }
  componentDidMount() {
    // fontawsome
    dom.i2svg();
  }
  render() {
    const author = this.props.json.author === null ? 'anonymous author' : this.props.json.author.login;
    const author_link = this.props.json.author === null ? '#' : this.props.json.author.html_url;
    const avatar_url = this.props.json.author === null ? '#' : this.props.json.author.avatar_url;
    const date = new Date(this.props.json.commit.author.date);


    const isVerified = this.props.json.commit.verification.verified;
    const verifyMark = isVerified === true ? <div className="table-list-cell"><div className="verify-mark">Verified</div></div> : <></>;
    return (
      <li className="commits-list-item">
        <div className="table-list-cell" style={{ width: '800px' }}>
          <p className="commit-title">
            <a className="message-link" data-pjax="true" href={this.props.json.html_url} target="_blank">
              {emoji.emojify(this.props.json.commit.message)}
            </a>
          </p>
          <div className="author-area">
            <a href={author_link} target="_blank"><img className="author-avatar" src={avatar_url} /></a>
            <a className="author-link" data-pjax="true" href={`https://github.com/${author}/${this.props.repo}/commits?author=${author}`} target="_blank">
              {author}
            </a>
            <span className="date"> committed on {date.toLocaleDateString()} {date.toLocaleTimeString()}</span>
          </div>
        </div>
        {verifyMark}
      </li>
    );
  }
}




