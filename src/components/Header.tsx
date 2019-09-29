import React, { Component } from 'react';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';
// utils
import { requestTotalCommitNum } from '../APIUtils';
import CSModel from '../CSModel';
import { renderCommitHistory } from '../helper';
// components
import RequestForm from './RequestForm';
// css
import './header.scss';
import './buttons.scss';

library.add(
  faSearch,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight
);

type HeaderProps = { model: CSModel };
export default class Header extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  componentDidMount() {
    // fontawsome
    dom.i2svg();
    // set margin content
    const headerHeight = document.getElementById(this.props.model.headerId)!
      .clientHeight;
    document.getElementById('root')!.style.marginTop = `${headerHeight + 20}px`;
  }
  render() {
    const styles = {
      display: 'flex'
    };
    return (
      <div id="header-menu">
        <div className="site-title">Commit Stalker</div>
        <div style={styles}>
          <RequestForm
            name="user"
            model={this.props.model}
            placeHolder="User"
          />
          <RequestForm
            name="repo"
            model={this.props.model}
            placeHolder="Repository"
          />
          <RequestForm
            name="page"
            model={this.props.model}
            value={String(this.props.model.request.page)}
            placeHolder="Page Number (Option)"
          />
          <SearchButton model={this.props.model} />
          <LatestButton model={this.props.model} />
          <BackButton model={this.props.model} />
          <NextButton model={this.props.model} />
          <OldestButton model={this.props.model} />
        </div>
      </div>
    );
  }
}
type ModelProps = { model: CSModel };
class SearchButton extends Component<ModelProps> {
  constructor(props: ModelProps) {
    super(props);
  }
  handleClick = () => {
    renderCommitHistory(this.props.model);
  };
  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleClick();
    }
  };
  render() {
    return (
      <div
        className="buttons arrows"
        id="request"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <i tabIndex={0} className="fas fa-search"></i>
      </div>
    );
  }
}

class LatestButton extends Component<ModelProps> {
  constructor(props: ModelProps) {
    super(props);
  }
  handleClick = () => {
    this.props.model.request.page = 1;
    renderCommitHistory(this.props.model);
  };
  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleClick();
    }
  };
  render() {
    return (
      <div
        className="buttons arrows"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <i tabIndex={0} className="fas fa-angle-double-left"></i>
      </div>
    );
  }
}

class BackButton extends Component<ModelProps> {
  constructor(props: ModelProps) {
    super(props);
  }
  handleClick = () => {
    if (this.props.model.request.page > 1) {
      this.props.model.request.page--;
      renderCommitHistory(this.props.model);
    }
  };
  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleClick();
    }
  };
  render() {
    return (
      <div
        className="buttons arrows"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <i tabIndex={0} className="fas fa-angle-left"></i>
      </div>
    );
  }
}
class NextButton extends Component<ModelProps> {
  constructor(props: ModelProps) {
    super(props);
  }
  handleClick = () => {
    const oldestPage =
      ((this.props.model.totalCommitNumHistory[
        `${this.props.model.request.user}/${this.props.model.request.repo}`
      ] /
        100) |
        0) +
      1;
    if (this.props.model.request.page < oldestPage) {
      this.props.model.request.page++;
      renderCommitHistory(this.props.model);
    }
  };
  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleClick();
    }
  };
  render() {
    return (
      <div
        className="buttons arrows"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <i tabIndex={0} className="fas fa-angle-right"></i>
      </div>
    );
  }
}
class OldestButton extends Component<ModelProps> {
  constructor(props: ModelProps) {
    super(props);
  }
  handleClick = () => {
    const user = this.props.model.request.user;
    const repo = this.props.model.request.repo;
    if (
      this.props.model.totalCommitNumHistory[`${user}/${repo}`] === undefined
    ) {
      requestTotalCommitNum(user, repo).then(res => {
        this.props.model.totalCommitNumHistory[`${user}/${repo}`] = Number(res);
      });
    }
    const oldestPage =
      ((this.props.model.totalCommitNumHistory[`${user}/${repo}`] / 100) | 0) +
      1;
    this.props.model.request.page = oldestPage;
    renderCommitHistory(this.props.model);
  };
  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleClick();
    }
  };
  render() {
    return (
      <div
        className="buttons arrows"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <i tabIndex={0} className="fas fa-angle-double-right"></i>
      </div>
    );
  }
}
