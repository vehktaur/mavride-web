import * as z from 'zod';
import { PHONE_REGEX } from '../regex';

export const loginSchema = z.object({
  phone_number: z.string().regex(PHONE_REGEX, {
    error: 'Please enter the full number including the area code',
  }),
  password: z.string().min(1, { error: 'Password is required' }),
});
