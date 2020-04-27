import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
// utils
import { requestTotalCommitNum, requestCommitHistory } from "../../APIUtils";
import { GitHubAPIResponse } from "../../@types/github-api"
// components
import Title from "./title";
import { UserForm, RepoForm, PageForm } from "../partials/Forms";
import {
  SearchButton,
  LatestButton,
  BackButton,
  NextButton,
  OldestButton,
} from "../partials/Buttons";
import CommitHistory, { COMMIT_HISTORY_ID } from "../CommitHistory";
import Loading from "../partials/Loading";
import PageInfo, { PAGE_INFO_CLASS } from "../partials/PageInfo";
// css
import "./header.scss";

/**
 * Header
 */
export const HEADER_ID = "site-header";
type HeaderProps = {};
type HeaderState = { user: string; repo: string; page: string };
export default class Header extends Component<HeaderProps, HeaderState> {
  commitHistory: Map<string, GitHubAPIResponse[]>;
  totalCommitNumHistory: Map<string, number>;
  constructor(props: HeaderProps) {
    super(props);
    this.state = { user: "", repo: "", page: "1" };
    // commitHistory restores histories of response from GitHub API. key is 'user/repo/page'
    this.commitHistory = new Map();
    // totalCommitNumHistory restores totalCommitNum. key is 'user/repo'
    this.totalCommitNumHistory = new Map();
  }
  handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: e.currentTarget.value });
  };
  handleRepoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ repo: e.currentTarget.value });
  };
  handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ page: e.currentTarget.value });
  };
  renderLoading = () => {
    // render loading animation
    document.querySelectorAll(PAGE_INFO_CLASS).forEach(elem => {
      ReactDOM.render(<Loading />, elem);
    });
    ReactDOM.render(<Loading />, document.getElementById(COMMIT_HISTORY_ID));
  };
  renderCommitHistory = async (user: string, repo: string, page: number) => {
    const userRepoPage = `${user}/${repo}/${page}`;
    if (this.commitHistory.has(userRepoPage) === false) {
      await requestCommitHistory(user, repo, page).then(
        (jsonList: GitHubAPIResponse[]) => {
          // save response
          this.commitHistory.set(userRepoPage, jsonList);
        }
      );
    }
    // render commit history
    ReactDOM.render(
      <CommitHistory
        jsonList={this.commitHistory.get(userRepoPage)!}
        user={user}
        repo={repo}
      />,
      document.getElementById(COMMIT_HISTORY_ID)
    );
  };
  renderPageInfo = async (user: string, repo: string, page: number) => {
    const userRepo = `${user}/${repo}`;
    if (this.totalCommitNumHistory.has(userRepo) === false) {
      await requestTotalCommitNum(user, repo).then(res => {
        const totalCommitNum = Number(res);
        this.totalCommitNumHistory.set(userRepo, totalCommitNum);
      });
    }
    document.querySelectorAll(PAGE_INFO_CLASS).forEach(elem => {
      ReactDOM.render(
        <PageInfo
          page={page}
          totalCommitNum={this.totalCommitNumHistory.get(userRepo)!}
        />,
        elem
      );
    });
  };
  renderMain = (user: string, repo: string, page: number) => {
    if (user === "" || repo === "") {
      return false;
    }
    this.renderLoading();
    // render
    this.renderCommitHistory(user, repo, page);
    this.renderPageInfo(user, repo, page);
  };
  handleFormKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.renderMain(
        this.state.user,
        this.state.repo,
        Number(this.state.page)
      );
    }
  };
  handleLatestClick = () => {
    if (this.state.user === "" || this.state.repo === "") {
      return false;
    }
    this.renderLoading();
    this.setState({ page: "1" });
    this.renderMain(this.state.user, this.state.repo, 1);
  };
  handleBackClick = () => {
    if (this.state.user === "" || this.state.repo === "") {
      return false;
    }
    const page = Number(this.state.page);
    if (isNaN(page) || page <= 1) {
      return false;
    }
    this.renderLoading();
    this.setState({ page: String(page - 1) });
    this.renderMain(this.state.user, this.state.repo, page - 1);
  };
  handleNextClick = async () => {
    if (this.state.user === "" || this.state.repo === "") {
      return false;
    }
    this.renderLoading();
    const page = Number(this.state.page);
    const userRepo = `${this.state.user}/${this.state.repo}`;
    if (this.totalCommitNumHistory.has(userRepo) === false) {
      await requestTotalCommitNum(this.state.user, this.state.repo).then(
        res => {
          const totalCommitNum = Number(res);
          this.totalCommitNumHistory.set(userRepo, totalCommitNum);
        }
      );
    }
    const oldestPage =
      ((this.totalCommitNumHistory.get(userRepo)! / 100) | 0) + 1;
    if (isNaN(page) || page >= oldestPage) {
      this.renderMain(this.state.user, this.state.repo, page);
      return false;
    } else {
      this.setState({ page: String(page + 1) });
      this.renderMain(this.state.user, this.state.repo, page + 1);
    }
  };
  handleOldestClick = async () => {
    if (this.state.user === "" || this.state.repo === "") {
      return false;
    }
    this.renderLoading();
    const userRepo = `${this.state.user}/${this.state.repo}`;
    if (this.totalCommitNumHistory.has(userRepo) === false) {
      await requestTotalCommitNum(this.state.user, this.state.repo).then(
        res => {
          const totalCommitNum = Number(res);
          this.totalCommitNumHistory.set(userRepo, totalCommitNum);
        }
      );
    }
    const oldestPage =
      ((this.totalCommitNumHistory.get(userRepo)! / 100) | 0) + 1;
    this.setState({ page: String(oldestPage) });
    this.renderMain(this.state.user, this.state.repo, oldestPage);
  };
  handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.renderMain(
        this.state.user,
        this.state.repo,
        Number(this.state.page)
      );
    }
  };
  handleLatestKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleLatestClick();
    }
  };
  handleBackKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleBackClick();
    }
  };
  handleNextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleNextClick();
    }
  };
  handleOldestKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      this.handleOldestClick();
    }
  };
  render() {
    return (
      <div id="site-header">
        <Title />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div>
            <UserForm
              value={String(this.state.user)}
              handleChange={this.handleUserChange}
              handleKeyDown={this.handleFormKeyDown}
            />
            <RepoForm
              value={String(this.state.repo)}
              handleChange={this.handleRepoChange}
              handleKeyDown={this.handleFormKeyDown}
            />
            <PageForm
              value={String(this.state.page)}
              handleChange={this.handlePageChange}
              handleKeyDown={this.handleFormKeyDown}
            />
            <SearchButton
              handleClick={() =>
                this.renderMain(
                  this.state.user,
                  this.state.repo,
                  Number(this.state.page)
                )
              }
              handleKeyDown={this.handleSearchKeyDown}
            />
            <LatestButton
              handleClick={this.handleLatestClick}
              handleKeyDown={this.handleLatestKeyDown}
            />
            <BackButton
              handleClick={this.handleBackClick}
              handleKeyDown={this.handleBackKeyDown}
            />
            <NextButton
              handleClick={this.handleNextClick}
              handleKeyDown={this.handleNextKeyDown}
            />
            <OldestButton
              handleClick={this.handleOldestClick}
              handleKeyDown={this.handleOldestKeyDown}
            />
          </div>
        </Grid>
      </div>
    );
  }
}