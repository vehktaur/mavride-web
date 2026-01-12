import { useEffect, type ComponentProps } from 'react';
import { cn } from '../../lib/utils';
import { Link } from '@tanstack/react-router';
import { SuccessIcon } from '@/assets/icons';
import { Button } from './button';

const SuccessModal = ({
  message,
  classNames,
  linkText = 'Done',
  ...props
}: ComponentProps<typeof Link> & {
  message: string;
  linkText?: string;
  classNames?: {
    root?: string;
    message?: string;
    link?: string;
  };
}) => {
  //hide body overflow when modal is shown
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return (
    <div
      className={cn(
        'fixed inset-0 z-999 flex w-full flex-col content-end items-center justify-center bg-white p-5 text-center',
        classNames?.root,
      )}
    >
      <SuccessIcon className="size-61.5" animated />

      <p
        className={cn(
          'mx-auto my-9 max-w-148 fl-text-lg/2xl',
          classNames?.message,
        )}
      >
        {message}
      </p>

      {/* Link in modal to view new profile */}
      <Button size="lg" asChild>
        <Link
          className={cn(
            'inline-block w-full max-w-83.25 rounded-mxl bg-primary p-5 font-semibold text-white',
            classNames?.link,
          )}
          {...props}
        >
          {linkText}
        </Link>
      </Button>
    </div>
  );
};
export default SuccessModal;
