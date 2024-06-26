import type { AbilityBuilder } from '@casl/ability'

import type { AppAbility } from '.'
import { User } from './models/user'
import { Roles } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Roles, PermissionsByRole> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },
  MEMBER(_, { can }) {
    // can('invite', 'User')
    can('manage', 'Project')
  },
}
