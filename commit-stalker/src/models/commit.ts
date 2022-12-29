import { z } from "zod";
import { Author } from "./author";
import { Commiter } from "./commiter";

export const Commit = z.object({
  sha: z.string(),
  node_id: z.string(),
  url: z.string().url(),
  html_url: z.string().url(),
  comments_url: z.string().url(),
  commit: z.object({
    author: z.object({
      name: z.string(),
      email: z.string(),
      date: z.string().datetime(),
    }).nullish(),
    commiter: z.object({
      name: z.string(),
      email: z.string(),
      date: z.string().datetime(),
    }).nullish(),
    comment_count: z.number(),
    message: z.string(),
    tree: z.object({
      sha: z.string(),
      url: z.string().url(),
    })
  }),
  author: Author.nullish(),
  commiter: Commiter.nullish(),
})

export type Commit = z.infer<typeof Commit>
