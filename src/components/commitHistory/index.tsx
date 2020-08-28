import React from 'react';
import { CommitRow, CommitInfo } from 'src/components/commitRow';
import { GitHubAPIResponse } from 'src/typings/github-api';
import { maxWidth } from 'src/utils/common';
import ReactList from 'react-list';

type CommitHistoryProps = {
  jsonList: GitHubAPIResponse[];
  user: string;
  repo: string;
};

const dateHeight = 24;

export const CommitHistory = ({ jsonList, user, repo }: CommitHistoryProps) => {
  if (jsonList === undefined) {
    return <></>;
  }
  let prevDate = '';
  const styles = {
    root: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '1rem',
      padding: '1rem',
      maxWidth,
    },
    date: {
      height: dateHeight,
      color: '#586069',
      fontSize: '14px',
      margin: '1.5em 0 0.8em 0',
    },
  };

  const commitJsonList: CommitInfo[] = jsonList.map((json: GitHubAPIResponse) => ({
    sha: json.sha ?? '',
    authorName: json.author === null ? 'anonymous author' : json.author.login,
    authorUrl: json.author === null ? '#' : json.author.html_url,
    avatarUrl: json.author === null ? '#' : json.author.avatar_url,
    repoUrl: `https://github.com/${user}/${repo}/tree/${json.sha ?? ''}`,
    date: new Date(json.commit.committer.date),
    isVerified: !!json.commit.verification.verified,
    commitMessage: json.commit.message,
    commitUrl: json.html_url ?? '#',
  }));

  const rowHeight = Array(jsonList.length).fill(200);
  const calcHeight = (lineCounts: number, isIncludeDate: boolean) => {
    const marginSize = 24 * Math.min(lineCounts, 1);
    const othersSize = 70;
    const lineSize = 14;
    return marginSize + othersSize + (lineCounts - 1) * lineSize + (isIncludeDate ? dateHeight : 0);
  };
  const rows = commitJsonList.map((json: CommitInfo, index: number) => {
    const sha = json.sha;
    const dateList = String(new Date(jsonList[index].commit.committer.date)).split(' ').slice(1, 4);
    const date = `${dateList[0]} ${dateList[1]}, ${dateList[2]}`;
    rowHeight[index] = calcHeight(json.commitMessage.split('\n').length, date !== prevDate);
    if (date !== prevDate) {
      prevDate = date;
      return (
        <div key={sha}>
          <div style={styles.date}>{date}</div>
          <CommitRow json={json} rowHeight={rowHeight[index]} user={user} repo={repo} />
        </div>
      );
    } else {
      return <CommitRow key={sha} rowHeight={rowHeight[index]} json={json} user={user} repo={repo} />;
    }
  });

  return (
    <div style={styles.root}>
      <ReactList
        itemRenderer={(index: number) => rows[index]}
        length={commitJsonList.length}
        type="variable"
        itemSizeGetter={(index) => rowHeight[index]}
      />
    </div>
  );
};
