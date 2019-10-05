import React from "react";
// components
import CommitRow, { GitHubAPIResponse } from "./CommitRow";
// css
import "./commit_history.scss";



type CommitHistoryProps = {
  jsonList: GitHubAPIResponse[];
  user: string;
  repo: string;
};
export const COMMIT_HISTORY_ID = "commit-history";
export default function CommitHistory(props: CommitHistoryProps) {
  let prevDate = "";
  console.log(props.jsonList);
  return (
    <>
      {props.jsonList.map((json: GitHubAPIResponse, i) => {
        const dateList = String(new Date(json.commit.author.date))
          .split(" ")
          .slice(1, 4);
        const date = `${dateList[0]} ${dateList[1]}, ${dateList[2]}`;
        if (date !== prevDate) {
          prevDate = date;
          return (
            <React.Fragment key={i}>
              <div className="commit-group-title">{date}</div>
              <CommitRow json={json} user={props.user} repo={props.repo} />
            </React.Fragment>
          );
        } else {
          return (
            <CommitRow
              key={i}
              json={json}
              user={props.user}
              repo={props.repo}
            />
          );
        }
      })}
    </>
  );
}
