type CommitAuthor = {
  date: string;
  email: string;
  name: string;
};

type CommitVerification = {
  verified: boolean;
  reason: string;
};

type Commit = {
  author: CommitAuthor;
  comment_count?: number;
  committer: {
    date: string;
  };
  message: string;
  tree?: object;
  url?: string;
  verification: CommitVerification;
};

type Author = {
  login: string;
  html_url: string;
  avatar_url: string;
};

type ParentCommit = {
  sha: string;
  url: string;
  html_url: string;
};

export type XRatelimitRemaining = number;

export type GitHubAPIResponse = {
  author: Author;
  comments_url?: string;
  commit: Commit;
  committer?: object;
  html_url?: string;
  node_id?: string;
  parents?: ParentCommit[];
  sha?: string;
  url?: string;
};
