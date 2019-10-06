import React from "react";
import "./page_info.scss";

export const PAGE_INFO_CLASS = ".page-info-wrap";
type PageInfoProps = { page: number; totalCommitNum: number };
export default function PageInfo(props: PageInfoProps) {
  const oldestPage = ((props.totalCommitNum / 100) | 0) + 1;
  return <div className="page-info">{`${props.page} / ${oldestPage}`}</div>;
}
