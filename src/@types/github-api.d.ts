interface CommitAuthor {
  date: string;
  email: string;
  name: string;
}

interface CommitVerification {
  verified: boolean;
}

interface Commit {
  author: CommitAuthor;
  comment_count?: number;
  committer?: object;
  message: string;
  tree?: object;
  url?: string;
  verification: CommitVerification;
}

interface Author {
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface GitHubAPIResponse {
  author: Author;
  comments_url?: string;
  commit: Commit;
  committer?: object;
  html_url?: string;
  node_id?: string;
  parents?: object[];
  sha?: string;
  url?: string;
}