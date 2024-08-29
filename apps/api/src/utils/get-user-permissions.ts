import { defineAbilitiesFor, roleSchema, userSchema } from '@saas/auth'
import z from 'zod'

export function getUserPermissions(
  userId: string,
  role: z.infer<typeof roleSchema>,
) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilitiesFor(authUser)

  return ability
}
