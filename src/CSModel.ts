'use strict';
export type RequestNameType = "user" | "repo" | "page";
export type RequestType = {
  user: string,
  repo: string,
  page: number,
}
export default class CSModel {
  request: RequestType;
  headerId: string;
  footerId: string;
  totalCommitNumHistory: object;
  responseHistory: object;
  constructor() {
    this.request = {
      user: "",
      repo: "",
      page: 1,
    }
    this.headerId = 'site-header';
    this.footerId = 'site-footer';
    /**
     * totalCommitNumHistory restores totalCommitNum
     * key is 'user/repo'
     */
    this.totalCommitNumHistory = {};
    /**
     * responseHistory restores histories of response from GitHub API
     * key is 'user/repo/page'
     */
    this.responseHistory = {};
  }
}
