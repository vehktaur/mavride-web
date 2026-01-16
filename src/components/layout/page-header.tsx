import { PlusIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

interface PageHeaderProps {
  title: string;
  classNames?: Partial<{
    root: string;
    title: string;
    link: string;
  }>;
  link: {
    text: string;
    href: string;
  };
}

const PageHeader = ({ title, classNames, link }: PageHeaderProps) => {
  return (
    <header
      className={cn(
        'flex w-full items-center justify-between py-2.25 px-6',
        classNames?.root,
      )}
    >
      <h1 className={cn('text-xl font-bold', classNames?.title)}>{title}</h1>

      <Link
        className={cn(
          'flex items-center gap-2 rounded-md bg-primary px-4 py-3 font-medium text-white text-sm',
          classNames?.link,
        )}
        to={link.href}
      >
        <PlusIcon className="size-4" />
        {link.text}
      </Link>
    </header>
  );
};
export default PageHeader;
