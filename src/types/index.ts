import type { ComponentProps } from 'react';
import type { RegisterOptions } from 'react-hook-form';

export type SVGProps = React.SVGProps<SVGSVGElement>;
export type Size = 'sm' | 'md' | 'lg';

export interface BaseInputProps extends Omit<
  ComponentProps<'input'>,
  'prefix' | 'size'
> {
  label?: React.ReactNode;
  name: string;
  required?: boolean;
  registerOptions?: RegisterOptions;
  size?: Size;
}

export interface InputProps extends BaseInputProps {
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
  controlled?: boolean;
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

export interface SelectProps extends Omit<
  ComponentProps<'select'>,
  'size' | 'onChange'
> {
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
  emptyPlaceholder?: string;
  onChange?: (value: string) => void;
}

export interface FileInputProps extends BaseInputProps {
  subtext?: string;
}
