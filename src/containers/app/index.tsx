import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MuiHidden from '@material-ui/core/Hidden';
import { Message } from 'src/components/message';
import { FlexDiv } from 'src/components/flexDiv';
import { ErrorMessage } from 'src/components/errorMessage';
import { HiddenWrapper } from 'src/components/hidden';
import { GitHubAPIResponse } from 'src/typings/github-api';
import { UserForm, RepoForm, PageForm } from 'src/components/forms';
import { SearchButton } from 'src/components/searchButton';
import { CommitRowTable } from 'src/components/commitRowTable';
import { Loading } from 'src/components/loading';
import { Readme } from 'src/components/readme';
import { Header } from 'src/components/header';
import { Pagination } from 'src/components/pagination';
import { ghClient } from 'src/utils/clients';
import { LRUCache } from 'src/utils/lru_cache';
import { useEffect } from 'react';

const totalCommitNumHistory = new LRUCache<string, number>(100);
const commitHistory = new LRUCache<string, GitHubAPIResponse[]>(5);

export const App = () => {
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [page, setPage] = useState(1);
  const [rateLimitCount, setRateLimit] = useState(60);
  const [totalCommitNum, setTotalCommitNum] = useState(0);
  const [isReadmeOpen, setIsReadmeOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentCommitsList, setCurrentCommitsList] = useState<GitHubAPIResponse[]>([]);

  useEffect(() => { fetchRateLimit(); }, []);

  const fetchRateLimit = async () => {
    await ghClient.get('/rate_limit', { headers: { Accept: 'application/vnd.github.v3+json' } })
      .then(response => {
        setRateLimit(Number(response.data.rate.remaining))
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage(err.message);
      });
  };
  const fetchCommitHistory = async (user: string, repo: string, page: number) => {
    const userRepoPage = `${user}/${repo}/${page}`;
    if (commitHistory.has(userRepoPage) === false) {
      await ghClient
        .get(`/repos/${user}/${repo}/commits`, { params: { page, per_page: 100 } })
        .then((res) => {
          commitHistory.set(userRepoPage, res.data as GitHubAPIResponse[]);
        })
        .catch((err) => {
          setIsError(true);
          setErrorMessage(err.message);
        });
    }
    setCurrentCommitsList(commitHistory.get(userRepoPage) || []);
    setIsLoading(false);
  };
  const getCommitsCount = async (user: string, repo: string) => {
    return await ghClient.get(`/repos/${user}/${repo}/commits?per_page=1`)
      .then(response => {
        return Number(
          // NOTE: The number of commits is written in the header.
          response.headers['link'].match(/page=(?<commitsCount>\d+)>; rel="last"/).groups['commitsCount']
        );
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage(err.message);
        return null;
      });
  };
  const fetchCommitsCount = async (user: string, repo: string) => {
    if (!totalCommitNumHistory.has(`${user}/${repo}`)) {
      const commitsCount = await getCommitsCount(user, repo);
      if (commitsCount)
        totalCommitNumHistory.set(`${user}/${repo}`, commitsCount);
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
    fetchCommitsCount(user.trim(), repo.trim());
    fetchRateLimit();
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
      <HiddenWrapper isOpen={!isReadmeOpen && !isError}>
        <Pagination nowPage={page} totalCommitNum={totalCommitNum} callback={(arg) => renderMain(user, repo, arg)} />
      </HiddenWrapper>
      <HiddenWrapper isOpen={!isLoading && !isError}>
        <CommitRowTable jsonList={currentCommitsList} user={user} repo={repo} />
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
      <HiddenWrapper isOpen={!isReadmeOpen && !isError}>
        <div style={{ margin: '100px 0 200px 0' }}>
          <Pagination nowPage={page} totalCommitNum={totalCommitNum} callback={(arg) => renderMain(user, repo, arg)} />
        </div>
      </HiddenWrapper>
      <div style={{ margin: '6rem' }}></div>
      <Message>
        <a href="https://developer.github.com/v3/#rate-limiting" target="_blank" rel="noopener noreferrer">
          {`The GitHub API's rate limit allows for up to 60 requests per hour. (Remaining: ${rateLimitCount})`}
        </a>
      </Message>
    </>
  );
};
