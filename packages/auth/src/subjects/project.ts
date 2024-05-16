import { z } from 'zod'

export const projectSubject = z.tuple([
  z.enum(['manage', 'get', 'create', 'update', 'delete']),
  z.literal('Project'),
])

export type ProjectSubject = z.infer<typeof projectSubject>
