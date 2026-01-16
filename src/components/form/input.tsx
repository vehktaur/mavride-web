'use client';

import { cn } from '@/lib/utils';
import { useId, useState } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import type { InputProps } from '@/types';
import FormErrorMessage from './error-message';
import RequiredMark from '../ui/required-mark';

const Input = ({
  label,
  name,
  type,
  classNames,
  prefix,
  suffix,
  afterEl,
  size = 'lg',
  required = true,
  controlled = false,
  ...props
}: InputProps) => {
  const id = useId();

  const formContext = useFormContext();
  const { register } = formContext || {};
  const { errors } = useFormState({ name }) || {};

  const [currentType, setCurrentType] = useState(type);
  const togglePassword = () => {
    setCurrentType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={cn('w-full', classNames?.root)}>
      {label && (
        <label
          className={cn('label', {
            'text-xs': size === 'sm',
          })}
          htmlFor={id}
        >
          {label}

          {required && <RequiredMark />}
        </label>
      )}

      <div className={cn('relative flex w-full')}>
        {/* prefix */}
        {prefix && (
          <span
            className={cn(
              'absolute top-0 left-4 h-full content-center text-[#8E8E8E]',
              {
                'text-error': errors?.[name]?.message,
              },
              classNames?.prefix,
            )}
          >
            {prefix}
          </span>
        )}

        {/* input element */}
        <input
          className={cn(
            'w-full rounded-mxl outline border-none bg-grey-100 hover:ring ring-primary focus:ring active:ring transition-colors duration-300',
            {
              'ring-error ring': errors?.[name],
              'ps-11': prefix,
              'pe-11': suffix || type === 'password',
              'rounded-r-none': afterEl,
              'fl-px-3.5/4 fl-py-2/2.5 fl-text-sm/base': size === 'lg',
              'fl-px-3/3.5 fl-py-1.5/2 text-sm': size === 'md',
              'fl-px-2.5/3 fl-py-1/1.5 text-sm': size === 'sm',
            },
            classNames?.input,
          )}
          id={id}
          type={currentType}
          {...(controlled || !register ? {} : register(name))}
          aria-describedby={id}
          {...props}
        />

        {/* suffix */}
        {(suffix || type === 'password') && (
          <span
            className={cn(
              'absolute top-0 right-4 h-full content-center text-[#8E8E8E]',
              {
                'text-error': errors?.[name],
              },
              classNames?.suffix,
            )}
          >
            {type === 'password' ? (
              <button
                className="*:fl-size-4/5 block"
                type="button"
                onClick={togglePassword}
              >
                {currentType === 'password' ? <FiEyeOff /> : <FiEye />}
              </button>
            ) : (
              suffix
            )}
          </span>
        )}

        {afterEl && (
          <div
            className={cn(
              'neg-fl-my-0.8px/-1px border-input bg-lavender-mist flex w-[2.94rem] items-center justify-center rounded-r-lg border border-l-0',
              classNames?.afterEl,
            )}
          >
            {afterEl}
          </div>
        )}
      </div>

      <FormErrorMessage name={name} id={id} size={size} />
    </div>
  );
};
export default Input;
