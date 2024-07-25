import { z } from 'zod'

export const billingSubject = z.tuple([
  z.enum(['manage', 'get', 'export']),
  z.literal('Billing'),
])

export type BillingSubject = z.infer<typeof billingSubject>
