import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MuiHidden from '@material-ui/core/Hidden';
import { GitHubAPIResponse } from 'src/typings/github-api';
import { UserForm, RepoForm, PageForm } from 'src/components/forms';
import SearchButton from 'src/components/searchButton';
import CommitHistory from 'src/components/commitHistory';
import Loading from 'src/components/loading';
import Pagenation from 'src/components/pagenation';
import FlexDiv from 'src/components/flexDiv';
import Message from 'src/components/message';
import Readme from 'src/components/readme';
import Header from 'src/components/header';
import HiddenWrapper from 'src/components/hidden';
import { ghClient, commitCountClient } from 'src/utils/clients';
import ErrorMessage from 'src/components/errorMessage';

export default () => {
  const commitHistory = new Map<string, GitHubAPIResponse[]>();
  const totalCommitNumHistory = new Map<string, number>();
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [page, setPage] = useState(1);
  const [xRatelimitRemaining, setRateLimit] = useState(60);
  const [totalCommitNum, setTotalCommitNum] = useState(0);
  const [isReadmeOpen, setIsReadmeOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentCommitsList, setCurrentCommitsList] = useState<GitHubAPIResponse[]>([]);

  const fetchCommitHistory = async (user: string, repo: string, page: number) => {
    const userRepoPage = `${user}/${repo}/${page}`;
    if (commitHistory.has(userRepoPage) === false) {
      await ghClient
        .get(`/repos/${user}/${repo}/commits`, { params: { page, per_page: 100 } })
        .then(res => {
          setRateLimit(Number(res.headers['x-ratelimit-remaining']));
          // save response
          commitHistory.set(userRepoPage, res.data as GitHubAPIResponse[]);
          setCurrentCommitsList(res.data as GitHubAPIResponse[]);
        })
        .catch(err => {
          setIsError(true);
          setErrorMessage(err.message);
        });
    }
    setIsLoading(false);
  };
  const fetchTotalCommitNum = async (user: string, repo: string) => {
    const userRepo = `${user}/${repo}`;
    if (!totalCommitNumHistory.has(userRepo)) {
      await commitCountClient
        .get('/count', { params: { user, repo } })
        .then(res => {
          const newTotalCommitNum = Number(res.data);
          totalCommitNumHistory.set(userRepo, newTotalCommitNum);
        })
        .catch(err => {
          setIsError(true);
          setErrorMessage(err.message);
        });
    }
    setTotalCommitNum(totalCommitNumHistory.get(`${user}/${repo}`) || 0);
  };
  const renderMain = (user: string, repo: string, page: number) => {
    if (user === '' || repo === '') {
      return false;
    }
    setIsError(false);
    setIsReadmeOpen(false);
    setPage(page);
    setIsLoading(true);
    // render
    fetchCommitHistory(user.trim(), repo.trim(), page);
    fetchTotalCommitNum(user.trim(), repo.trim());
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
        <MuiHidden only={['xs', 'sm']}>
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
        </MuiHidden>
      </div>
      <HiddenWrapper isOpen={!isReadmeOpen}>
        <Pagenation nowPage={page} totalCommitNum={totalCommitNum} callback={arg => renderMain(user, repo, arg)} />
      </HiddenWrapper>
      <HiddenWrapper isOpen={!isLoading && !isError}>
        <CommitHistory jsonList={currentCommitsList} user={user} repo={repo} />
      </HiddenWrapper>
      <HiddenWrapper isOpen={isError}>
        <ErrorMessage message={errorMessage} />
      </HiddenWrapper>
      <HiddenWrapper isOpen={isLoading}>
        <Loading />
      </HiddenWrapper>
      <HiddenWrapper isOpen={isReadmeOpen}>
        <Readme />
      </HiddenWrapper>
      <HiddenWrapper isOpen={!isReadmeOpen}>
        <Pagenation nowPage={page} totalCommitNum={totalCommitNum} callback={arg => renderMain(user, repo, arg)} />
      </HiddenWrapper>
      <div style={{ margin: '3rem' }}></div>
      <Message>
        <a href="https://developer.github.com/v3/#rate-limiting" target="_blank" rel="noopener noreferrer">
          {`The GitHub API's rate limit allows for up to 60 requests per hour. (Remaining: ${xRatelimitRemaining})`}
        </a>
      </Message>
    </>
  );
};
