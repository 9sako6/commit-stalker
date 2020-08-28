import React from 'react';
import { CommitRow, CommitInfo } from 'src/components/commitRow';
import { GitHubAPIResponse } from 'src/typings/github-api';
import { maxWidth } from 'src/utils/common';

type CommitHistoryProps = {
  jsonList: GitHubAPIResponse[];
  user: string;
  repo: string;
};
export const CommitHistory = ({ jsonList, user, repo }: CommitHistoryProps) => {
  if (jsonList === undefined) {
    return <></>;
  }
  let prevDate = '';
  const styles = {
    root: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '2rem',
      padding: '1rem',
      maxWidth,
    },
    title: {
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

  return (
    <div style={styles.root}>
      {commitJsonList.map((json: CommitInfo, i) => {
        const dateList = String(new Date(jsonList[i].commit.committer.date)).split(' ').slice(1, 4);
        const date = `${dateList[0]} ${dateList[1]}, ${dateList[2]}`;
        if (date !== prevDate) {
          prevDate = date;
          return (
            <React.Fragment key={i}>
              <div style={styles.title}>{date}</div>
              <CommitRow json={json} user={user} repo={repo} />
            </React.Fragment>
          );
        } else {
          return <CommitRow key={i} json={json} user={user} repo={repo} />;
        }
      })}
    </div>
  );
};
