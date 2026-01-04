import * as z from 'zod'

export const verifyPhoneSchema = (step: number) =>
  step === 0
    ? z.object({
        phone: z
          .string()
          .min(10, { error: 'Phone number must be at least 10 digits' })
          .max(15, { error: 'Phone number must be at most 15 digits' }),
      })
    : z.object({
        otp: z
          .string()
          .length(4, { error: 'OTP must be exactly 4 digits' })
          .regex(/^\d{4}$/, { error: 'OTP must contain only digits' }),
      })

export * from './input-schemas'
