import React from "react";

export const PAGE_INFO_CLASS = ".page-info";
type PageInfoProps = { page: number; totalCommitNum: number };
export default function PageInfo(props: PageInfoProps) {
  const oldestPage = ((props.totalCommitNum / 100) | 0) + 1;
  return (
    <div
      style={{
        width: "900px",
        textAlign: "right",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >{`${props.page} / ${oldestPage}`}</div>
  );
}
