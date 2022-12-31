import { z } from "zod";

export const Resources = z.object({
  resources: z.object({
    core: z.object({
      limit: z.number(),
      remaining: z.number(),
      reset: z.number(),
      used: z.number()
    }),
    search: z.object({
      limit: z.number(),
      remaining: z.number(),
      reset: z.number(),
      used: z.number()
    }),
    graphql: z.object({
      limit: z.number(),
      remaining: z.number(),
      reset: z.number(),
      used: z.number()
    }),
    integration_manifest: z.object({
      limit: z.number(),
      remaining: z.number(),
      reset: z.number(),
      used: z.number()
    }),
  })
})

export type Resources = z.infer<typeof Resources>
