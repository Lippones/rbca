import { z } from 'zod'

export const inviteSubject = z.tuple([
  z.enum(['manage', 'create', 'update', 'delete', 'transfer_ownership']),
  z.literal('Invite'),
])

export type InviteSubject = z.infer<typeof inviteSubject>
