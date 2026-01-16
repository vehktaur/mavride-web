import { cn } from '@/lib/utils';
import { FaStar } from 'react-icons/fa6';

export { HiOutlineTrash, HiMagnifyingGlass } from 'react-icons/hi2';
export { FaStar } from 'react-icons/fa6';

export const StarIcon = ({ className }: { className?: string }) => (
  <FaStar className={cn('size-4 text-[#F6BD19]', className)} />
);

export * from './local-icons';
export * from 'react-icons/lu';
