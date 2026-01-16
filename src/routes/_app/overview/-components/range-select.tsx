'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useTimeRangeStore } from '@/stores';

const RangeSelect = ({ className }: { className?: string }) => {
  const days = useTimeRangeStore((state) => state.days);
  const setDays = useTimeRangeStore((state) => state.setDays);

  const onSelect = (value: string) => {
    setDays(value);
  };

  return (
    <Select onValueChange={onSelect} defaultValue={days}>
      <SelectTrigger
        className={cn(
          'min-w-15 font-semibold bg-transparent border-none outline-none w-fit text-[#888889] p-0! rounded-none active:ring-0 focus:ring-0 focus:ring-offset-0 hover:ring-0',
          className,
        )}
        size="sm"
      >
        <SelectValue placeholder="Select a range" />
      </SelectTrigger>

      <SelectContent align="start">
        <SelectItem value={'0'}>Today</SelectItem>
        <SelectItem value={'7'}>Last 7 Days</SelectItem>
        <SelectItem value={'30'}>Last 30 Days</SelectItem>
        <SelectItem value={'60'}>Last 60 Days</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default RangeSelect;
