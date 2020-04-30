import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { requestTotalCommitNum, requestCommitHistory } from '../APIUtils';
import { GitHubAPIResponse } from '../@types/github-api';
import { maxWidth } from '../common';
import { UserForm, RepoForm, PageForm } from './partials/Forms';
import { SearchButton } from './partials/Buttons';
import CommitHistory, { COMMIT_HISTORY_ID } from './CommitHistory';
import Loading from './partials/Loading';
import Pagenation from './partials/Pagenation';
import FlexDiv from './partials/FlexDiv';
import Message from './partials/Message';
import Readme from './partials/Readme';
import Header from './partials/Header';
import HiddenWrapper from './partials/Hidden';

export default () => {
  const commitHistory = new Map<string, GitHubAPIResponse[]>();
  const totalCommitNumHistory = new Map<string, number>();
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [page, setPage] = useState(1);
  const [totalCommitNum, setTotalCommitNum] = useState(0);
  const [isReadmeOpen, setIsReadmeOpen] = useState(true);

  const renderLoading = () => {
    ReactDOM.render(<Loading />, document.getElementById(COMMIT_HISTORY_ID));
  };
  const renderCommitHistory = async (user: string, repo: string, page: number) => {
    const userRepoPage = `${user}/${repo}/${page}`;
    if (commitHistory.has(userRepoPage) === false) {
      await requestCommitHistory(user, repo, page).then((jsonList: GitHubAPIResponse[]) => {
        // save response
        commitHistory.set(userRepoPage, jsonList);
      });
    }
    // render commit history
    ReactDOM.render(
      <CommitHistory jsonList={commitHistory.get(userRepoPage)!} user={user} repo={repo} />,
      document.getElementById(COMMIT_HISTORY_ID),
    );
  };
  const updateTotalCommitNum = async (user: string, repo: string, page: number) => {
    const userRepo = `${user}/${repo}`;
    if (totalCommitNumHistory.has(userRepo) === false) {
      await requestTotalCommitNum(user, repo).then(res => {
        const newTotalCommitNum = Number(res);
        totalCommitNumHistory.set(userRepo, newTotalCommitNum);
      });
    }
    setTotalCommitNum(totalCommitNumHistory.get(`${user}/${repo}`) || 0);
  };
  const renderMain = (user: string, repo: string, page: number) => {
    if (user === '' || repo === '') {
      return false;
    }
    setIsReadmeOpen(false);
    setPage(page);
    renderLoading();
    // render
    renderCommitHistory(user.trim(), repo.trim(), page);
    updateTotalCommitNum(user.trim(), repo.trim(), page);
  };
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      renderMain(user, repo, page);
    }
  };
  return (
    <>
      <div id="site-header">
        <Header>
          <div>
            <UserForm
              value={user}
              handleChange={(value: string) => setUser(value)}
              handleKeyDown={handleEnterKeyDown}
            />
            <RepoForm
              value={repo}
              handleChange={(value: string) => setRepo(value)}
              handleKeyDown={handleEnterKeyDown}
            />
            <PageForm
              value={page}
              handleChange={(value: number) => setPage(value)}
              handleKeyDown={handleEnterKeyDown}
            />
            <SearchButton handleClick={() => renderMain(user, repo, page)} handleKeyDown={handleEnterKeyDown} />
          </div>
        </Header>
        <Hidden only={['xs', 'sm']}>
          <Grid container direction="row" justify="center" alignItems="center">
            <FlexDiv style={{ margin: '1rem 0' }}>
              <UserForm
                value={user}
                handleChange={(value: string) => setUser(value)}
                handleKeyDown={handleEnterKeyDown}
              />
              <RepoForm
                value={repo}
                handleChange={(value: string) => setRepo(value)}
                handleKeyDown={handleEnterKeyDown}
              />
              <PageForm
                value={page}
                handleChange={(value: number) => setPage(value)}
                handleKeyDown={handleEnterKeyDown}
              />
              <SearchButton handleClick={() => renderMain(user, repo, page)} handleKeyDown={handleEnterKeyDown} />
            </FlexDiv>
          </Grid>
        </Hidden>
      </div>
      <HiddenWrapper isOpen={!isReadmeOpen}>
        <Pagenation nowPage={page} totalCommitNum={totalCommitNum} callback={arg => renderMain(user, repo, arg)} />
      </HiddenWrapper>
      <div id="commit-history" style={{ maxWidth }}></div>
      <HiddenWrapper isOpen={isReadmeOpen}>
        <Readme />
      </HiddenWrapper>
      <HiddenWrapper isOpen={!isReadmeOpen}>
        <Pagenation nowPage={page} totalCommitNum={totalCommitNum} callback={arg => renderMain(user, repo, arg)} />
      </HiddenWrapper>
      <div style={{ margin: '3rem' }}></div>
      <Message />
    </>
  );
};
