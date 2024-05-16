import { z } from 'zod'

export const userSubject = z.tuple([
  z.enum(['manage', 'get', 'update', 'delete']),
  z.literal('User'),
])

export type UserSubject = z.infer<typeof userSubject>
