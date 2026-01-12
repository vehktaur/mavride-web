import * as z from 'zod';
import { fileSchema } from './input-schemas';
import { PASSWORD_REGEX, PHONE_REGEX } from '../regex';

export const verifyPhoneSchema = (step: number) =>
  step === 0
    ? z.object({
        phone: z.string().regex(PHONE_REGEX, {
          error: 'Please enter the full number including the area code',
        }),
      })
    : z.object({
        otp: z
          .string()
          .length(4, { error: 'OTP must be exactly 4 digits' })
          .regex(/^\d{4}$/, { error: 'OTP must contain only digits' }),
      });

export const profilePicSchema = z.object({
  profile_pic: fileSchema({
    required: true,
    accept: 'image/*',
    maxSize: 5,
  }),
});

// Multi-step form schemas
const personalInfoSchema = z
  .object({
    fullname: z.string().min(1, { error: 'Full name is required' }),
    gender: z.string().min(1, { error: 'Gender is required' }),
    email: z.email({ error: 'Please enter a valid email' }),
    password: z
      .string()
      .min(8, {
        error:
          'Password should combination of letters, numbers, and special characters e.g. a1@',
      })
      .regex(PASSWORD_REGEX, {
        error:
          'Password should combination of letters, numbers, and special characters e.g. a1@',
      }),
    confirm_password: z
      .string()
      .min(1, { error: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password does not match',
    path: ['confirm_password'],
  });

const locationDetailsSchema = z.object({
  state: z.string().min(1, { error: 'State is required' }),
  city: z.string().min(1, { error: 'City is required' }),
  address: z.string().min(1, { error: 'Address is required' }),
});

const companyDetailsSchema = z.object({
  company_name: z.string().min(1, { error: 'Company name is required' }),
  company_address: z.string().min(1, { error: 'Company address is required' }),
  company_phone: z.string().regex(PHONE_REGEX, {
    error: 'Please enter the full number including the area code',
  }),
});

const certificationsSchema = z.object({
  health_license: fileSchema({
    required: true,
    accept: 'application/pdf',
    maxSize: 5,
  }),
  transport_license: fileSchema({
    required: true,
    accept: 'application/pdf',
    maxSize: 5,
  }),
});

// Combined schema for the entire multi-step form
export const multiStepFormSchema = personalInfoSchema
  .safeExtend(locationDetailsSchema.shape)
  .safeExtend(companyDetailsSchema.shape)
  .safeExtend(certificationsSchema.shape);

// Conditional schema based on current route
export const getMultiStepSchema = (currentRoute: string) => {
  if (currentRoute.includes('personal-information')) {
    return personalInfoSchema;
  }
  if (currentRoute.includes('location-details')) {
    return locationDetailsSchema;
  }
  if (currentRoute.includes('company-details')) {
    return companyDetailsSchema;
  }
  if (currentRoute.includes('certifications')) {
    return certificationsSchema;
  }
  return multiStepFormSchema;
};
