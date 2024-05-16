import { defineAbilitiesFor } from '@saas/auth'

const ability = defineAbilitiesFor({
  role: 'MEMBER',
})

const userCanManageAll = ability.can('manage', 'all')

console.log(userCanManageAll)
