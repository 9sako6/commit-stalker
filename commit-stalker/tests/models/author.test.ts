import { Author } from "@/src/models/author";
import { test } from "vitest";

test('parse Author', () => {
  Author.parse({
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
  })
})
