import { cn } from '@/lib/utils';
import { type ComponentProps, type JSX } from 'react';

interface StatCardProps {
  title: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  count: number;
  className?: string;
}

const StatCard = ({ title, Icon, count, className }: StatCardProps) => {
  return (
    <article
      className={cn(
        'font-semibold ps-3 pe-5.75 pt-6 pb-9 rounded-md w-full',
        className,
      )}
    >
      <div className="flex w-full items-start justify-between gap-4 mb-3.25">
        <h2 className="text-base">{title}</h2>

        <span className="rounded-full text-mavride-blue size-9.75 bg-white grid place-items-center shrink-0">
          <Icon className="size-5.25" />
        </span>
      </div>

      <p className="fl-text-3xl/5xl">{count}</p>
    </article>
  );
};

const StatCards = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('flex items-stretch gap-2', className)} {...props} />
  );
};

export { StatCards, StatCard };
