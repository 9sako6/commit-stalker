import { Commit } from "@/src/models/commit";

test('parse Commit', () => {
  Commit.parse({
    "sha": "0c0b403f19fc6febcd1e36a83fc307ecc11de943",
    "node_id": "C_kwDOAAsO6NoAKDBjMGI0MDNmMTlmYzZmZWJjZDFlMzZhODNmYzMwN2VjYzExZGU5NDM",
    "commit": {
      "author": {
        "name": "bors",
        "email": "bors@rust-lang.org",
        "date": "2022-12-29T11:20:50Z"
      },
      "committer": {
        "name": "bors",
        "email": "bors@rust-lang.org",
        "date": "2022-12-29T11:20:50Z"
      },
      "message": "Auto merge of #106195 - Nilstrieb:no-more-being-clueless-whether-it-really-is-a-literal, r=compiler-errors\n\nImprove heuristics whether `format_args` string is a source literal\n\nPreviously, it only checked whether there was _a_ literal at the span of the first argument, not whether the literal actually matched up. This caused issues when a proc macro was generating a different literal with the same span.\n\nThis requires an annoying special case for literals ending in `\\n` because otherwise `println` wouldn't give detailed diagnostics anymore which would be bad.\n\nFixes #106191",
      "tree": {
        "sha": "461a78f80026dd6bec5e42bfca94331c1ccaf9fa",
        "url": "https://api.github.com/repos/rust-lang/rust/git/trees/461a78f80026dd6bec5e42bfca94331c1ccaf9fa"
      },
      "url": "https://api.github.com/repos/rust-lang/rust/git/commits/0c0b403f19fc6febcd1e36a83fc307ecc11de943",
      "comment_count": 0,
      "verification": {
        "verified": false,
        "reason": "unsigned",
        "signature": null,
        "payload": null
      }
    },
    "url": "https://api.github.com/repos/rust-lang/rust/commits/0c0b403f19fc6febcd1e36a83fc307ecc11de943",
    "html_url": "https://github.com/rust-lang/rust/commit/0c0b403f19fc6febcd1e36a83fc307ecc11de943",
    "comments_url": "https://api.github.com/repos/rust-lang/rust/commits/0c0b403f19fc6febcd1e36a83fc307ecc11de943/comments",
    "author": {
      "login": "bors",
      "id": 3372342,
      "node_id": "MDQ6VXNlcjMzNzIzNDI=",
      "avatar_url": "https://avatars.githubusercontent.com/u/3372342?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bors",
      "html_url": "https://github.com/bors",
      "followers_url": "https://api.github.com/users/bors/followers",
      "following_url": "https://api.github.com/users/bors/following{/other_user}",
      "gists_url": "https://api.github.com/users/bors/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bors/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bors/subscriptions",
      "organizations_url": "https://api.github.com/users/bors/orgs",
      "repos_url": "https://api.github.com/users/bors/repos",
      "events_url": "https://api.github.com/users/bors/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bors/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "bors",
      "id": 3372342,
      "node_id": "MDQ6VXNlcjMzNzIzNDI=",
      "avatar_url": "https://avatars.githubusercontent.com/u/3372342?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bors",
      "html_url": "https://github.com/bors",
      "followers_url": "https://api.github.com/users/bors/followers",
      "following_url": "https://api.github.com/users/bors/following{/other_user}",
      "gists_url": "https://api.github.com/users/bors/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bors/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bors/subscriptions",
      "organizations_url": "https://api.github.com/users/bors/orgs",
      "repos_url": "https://api.github.com/users/bors/repos",
      "events_url": "https://api.github.com/users/bors/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bors/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "11a338ab6644cf454c45d2b41651900610a55b07",
        "url": "https://api.github.com/repos/rust-lang/rust/commits/11a338ab6644cf454c45d2b41651900610a55b07",
        "html_url": "https://github.com/rust-lang/rust/commit/11a338ab6644cf454c45d2b41651900610a55b07"
      },
      {
        "sha": "31b490d8ba8ff60b9d9ee3ccca522629429d9a3f",
        "url": "https://api.github.com/repos/rust-lang/rust/commits/31b490d8ba8ff60b9d9ee3ccca522629429d9a3f",
        "html_url": "https://github.com/rust-lang/rust/commit/31b490d8ba8ff60b9d9ee3ccca522629429d9a3f"
      }
    ]
  })
})
