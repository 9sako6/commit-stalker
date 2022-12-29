import { z } from 'zod';
import { Commit } from './commit';

export const Commits = z.array(Commit);

export type Commits = z.infer<typeof Commits>;
