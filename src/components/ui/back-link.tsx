import { Link } from '@tanstack/react-router';
import { cn } from '../../lib/utils';
import { LuArrowLeft } from '@/assets/icons';

interface BackLinkProps extends React.ComponentProps<typeof Link> {
  classNames?: {
    root?: string;
    icon?: string;
  };
  text?: string;
}

const BackLink = ({ classNames, text = 'Back', ...props }: BackLinkProps) => {
  return (
    <Link
      className={cn('flex items-center gap-2', classNames?.root)}
      {...props}
    >
      <LuArrowLeft className={cn('fl-size-5/6', classNames?.icon)} />
      {text}
    </Link>
  );
};
export default BackLink;
