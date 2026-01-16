import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'fluid-tailwindcss/tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export * from './auth';
export * from './input';
