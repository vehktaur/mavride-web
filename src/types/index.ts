import type { ComponentProps } from 'react';
import type { RegisterOptions } from 'react-hook-form';

export type SVGProps = React.SVGProps<SVGSVGElement>;
export type Size = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<
  ComponentProps<'input'>,
  'prefix' | 'size'
> {
  label?: React.ReactNode;
  name: string;
  afterEl?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  classNames?: {
    root?: string;
    input?: string;
    suffix?: string;
    prefix?: string;
    afterEl?: string;
  };
  size?: Size;
  registerOptions?: RegisterOptions;
}

export interface SelectOption {
  id?: string;
  label?: string;
  value?: string;
  items?: Array<{
    label?: string;
    value: string;
  }>;
}

export interface SelectProps extends Omit<ComponentProps<'select'>, 'size'> {
  name: string;
  placeholder?: string;
  label?: string;
  size?: Size;
  options: SelectOption[];
  classNames?: {
    root?: string;
    trigger?: string;
    content?: string;
  };
  position?: 'popper' | 'item-aligned';
}
