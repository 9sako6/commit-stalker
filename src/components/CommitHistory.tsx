import React from 'react';
// components
import CommitRow from './CommitRow';
// css
import './commit_history.scss';
export default function CommitHistory(
  jsonList: any[],
  user: string,
  repo: string
) {
  let prevDate = '';
  return (
    <>
      {jsonList.map((json: any, i) => {
        const dateList = String(new Date(json.commit.author.date))
          .split(' ')
          .slice(1, 4);
        const date = `${dateList[0]} ${dateList[1]}, ${dateList[2]}`;
        if (date !== prevDate) {
          prevDate = date;
          return (
            <React.Fragment key={i}>
              <div className="commit-group-title">{date}</div>
              <CommitRow json={json} user={user} repo={repo} />
            </React.Fragment>
          );
        } else {
          return <CommitRow key={i} json={json} user={user} repo={repo} />;
        }
      })}
    </>
  );
}
