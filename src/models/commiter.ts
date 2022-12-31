import { z } from "zod";

export const Commiter = z.object({
  avatar_url: z.string().url(),
  events_url: z.string().url(),
  followers_url: z.string().url(),
  following_url: z.string().url(),
  gists_url: z.string().url(),
  gravatar_id: z.string(),
  html_url: z.string().url(),
  id: z.number(),
  node_id: z.string(),
  login: z.string(),
  organizations_url: z.string().url(),
  received_events_url: z.string().url(),
  repos_url: z.string().url(),
  site_admin: z.boolean(),
  starred_url: z.string().url(),
  subscriptions_url: z.string().url(),
  type: z.string(),
  url: z.string().url(),
})

export type Commiter = z.infer<typeof Commiter>
