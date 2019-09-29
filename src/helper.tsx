import React from 'react';
import ReactDOM from 'react-dom';
// utils
import CSModel from './CSModel';
import { requestTotalCommitNum, requestCommitsHistory } from './APIUtils';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import CommitHistory from './components/CommitHistory';
import Loading from './components/Loading';

export function renderHeader(model: CSModel) {
  ReactDOM.render(
    <Header model={model} />,
    document.getElementById(model.headerId)
  );
}
export function renderFooter(model: CSModel) {
  ReactDOM.render(
    <Footer />,
    document.getElementById(model.footerId)
  );
}

export function renderLoading(rootId: string) {
  ReactDOM.render(
    <Loading />,
    document.getElementById(rootId)
  );
}

export function renderCommitHistory(model: CSModel) {
  const user = model.request.user;
  const repo = model.request.repo;
  if (user === "" || repo === "") { return; }
  if (model.request.page === 0) {
    model.request.page = 1;
  }
  const page = model.request.page;

  // loading animation
  ReactDOM.render(<></>, document.getElementById('page-info-top'));
  ReactDOM.render(<></>, document.getElementById('page-info-bottom'));
  renderLoading('commit-history');

  const key = `${user}/${repo}/${page}`;
  if (model.responseHistory[key] === undefined) {
    // HTTP Request
    if (model.totalCommitNumHistory[`${user}/${repo}`] === undefined) {
      requestTotalCommitNum(user, repo)
        .then((res) => {
          model.totalCommitNumHistory[`${user}/${repo}`] = Number(res);
          _renderCommitHistory(model);
        });
    } else {
      _renderCommitHistory(model);
    }
  } else {
    renderPageInfo(model);
    _renderCommitHistory(model);
  }
}

function _renderCommitHistory(model: CSModel) {
  const user = model.request.user;
  const repo = model.request.repo;
  const page = model.request.page;
  const key = `${user}/${repo}/${page}`;
  requestCommitsHistory(user, repo, page)
    .then((jsonList) => {
      // save response
      model.responseHistory[key] = jsonList;
      renderPageInfo(model);
      ReactDOM.render(
        CommitHistory(model.responseHistory[key], user, repo),
        document.getElementById('commit-history')
      );
    });
}

export function renderPageInfo(model: CSModel) {
  const user = model.request.user;
  const repo = model.request.repo;
  const page = model.request.page;
  const oldestPage = (model.totalCommitNumHistory[`${user}/${repo}`] / 100 | 0) + 1;
  const styles = {
    width: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  ReactDOM.render(
    <div style={{ ...styles, ...{ textAlign: 'right' } }}>{`${page} / ${oldestPage}`}</div>,
    document.getElementById('page-info-top')
  );
  ReactDOM.render(
    <div style={{ ...styles, ...{ textAlign: 'right' } }} > {`${page} / ${oldestPage}`}</ div>,
    document.getElementById('page-info-bottom')
  );
}

export function renderErrorMessage(status: number, message: string) {
  ReactDOM.render(
    <div>
      <h1>{status}</h1>
      <div>{message}</div>
    </div>,
    document.getElementById('commit-history')
  );
}