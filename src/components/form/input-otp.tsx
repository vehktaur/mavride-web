import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Controller } from 'react-hook-form';
import FormErrorMessage from './error-message';

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center gap-4 justify-center w-full', className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'data-active:ring-primary dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive data-[active=true]:aria-invalid:ring-destructive dark:bg-input/30 relative flex size-16 font-medium fl-text-base/lg items-center justify-center bg-grey-100 transition-all outline-none rounded-mxl ring-primary data-[active=true]:z-10 data-[active=true]:ring-1',
        'data-error:ring-error-red',
        className,
        Boolean(char) && 'ring-1',
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

function AppInputOtp({
  label,
  name = 'otp',
  length,
  disabled,
}: {
  label?: React.ReactNode;
  name?: string;
  length: number;
  disabled?: boolean;
}) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          {label && (
            <label htmlFor="otp" className="label">
              {label}
            </label>
          )}
          <InputOTP maxLength={length} {...field} disabled={disabled}>
            <InputOTPGroup>
              {Array.from({ length }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  data-error={Boolean(error?.message)}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <FormErrorMessage name={name} id={`${name}-error`} />
        </div>
      )}
    />
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  AppInputOtp,
};
