import React from 'react';
import CommitRow from 'src/components/commitRow';
import { GitHubAPIResponse } from 'src/typings/github-api';
import { maxWidth } from 'src/utils/common';

type CommitHistoryProps = {
  jsonList: GitHubAPIResponse[];
  user: string;
  repo: string;
};
export default (props: CommitHistoryProps) => {
  if (props.jsonList === undefined) {
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
  return (
    <div style={styles.root}>
      {props.jsonList.map((json: GitHubAPIResponse, i) => {
        const dateList = String(new Date(json.commit.author.date)).split(' ').slice(1, 4);
        const date = `${dateList[0]} ${dateList[1]}, ${dateList[2]}`;
        if (date !== prevDate) {
          prevDate = date;
          return (
            <React.Fragment key={i}>
              <div style={styles.title}>{date}</div>
              <CommitRow json={json} user={props.user} repo={props.repo} />
            </React.Fragment>
          );
        } else {
          return <CommitRow key={i} json={json} user={props.user} repo={props.repo} />;
        }
      })}
    </div>
  );
};
