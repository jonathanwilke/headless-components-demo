import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { cva } from 'class-variance-authority';
export type { VariantProps } from 'class-variance-authority';
export type { ClassNameValue as ClassProp } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
