import { Commiter } from "@/src/models/commiter";
import { test } from "vitest";

test('parse Commiter', () => {
  Commiter.parse({
    "login": "Mark-Simulacrum",
    "id": 5047365,
    "node_id": "MDQ6VXNlcjUwNDczNjU=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5047365?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Mark-Simulacrum",
    "html_url": "https://github.com/Mark-Simulacrum",
    "followers_url": "https://api.github.com/users/Mark-Simulacrum/followers",
    "following_url": "https://api.github.com/users/Mark-Simulacrum/following{/other_user}",
    "gists_url": "https://api.github.com/users/Mark-Simulacrum/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Mark-Simulacrum/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Mark-Simulacrum/subscriptions",
    "organizations_url": "https://api.github.com/users/Mark-Simulacrum/orgs",
    "repos_url": "https://api.github.com/users/Mark-Simulacrum/repos",
    "events_url": "https://api.github.com/users/Mark-Simulacrum/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Mark-Simulacrum/received_events",
    "type": "User",
    "site_admin": false
  })
})
