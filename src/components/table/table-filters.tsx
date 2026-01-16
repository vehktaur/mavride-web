import { cn } from '@/lib/utils';
import SearchInput from '../ui/search-input';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { FaAngleDown } from 'react-icons/fa6';
import { FilterIcon, ResetIcon } from '@/assets/icons';

interface FilterDropdownProps {
  label: string;
  title: string;
  name: string;
  options: { label: React.ReactNode; value: string }[];
}

interface TableFiltersProps {
  classNames?: Partial<{
    root: string;
  }>;
  filters?: Array<
    Omit<FilterDropdownProps, 'options'> & {
      dropdown?: {
        options: FilterDropdownProps['options'];
      };
      datepicker?: boolean;
    }
  >;
}

export const TableFilters = ({ classNames, filters }: TableFiltersProps) => {
  return (
    <div
      className={cn(
        'mb-4 flex items-center justify-between text-sm font-medium px-5 overflow-x-auto scrollbar-none *:shrink-0',
        classNames?.root,
      )}
    >
      <div className="flex items-center divide-x divide-grey-500">
        <SortBy className="pe-4" />
        {filters?.map((filter, index) => {
          if (filter.dropdown)
            return (
              <FilterDropdown
                key={index}
                label={filter.label}
                title={filter.title}
                name={filter.name}
                options={filter.dropdown.options}
              />
            );
        })}

        <ResetFilters className="ps-4" />
      </div>
      <SearchInput name="search" classNames={{ root: 'ms-12' }} />
    </div>
  );
};

export const SortBy = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn('flex w-fit items-center gap-3 py-2 pr-7', className)}
    >
      <FilterIcon className="size-4" />
      <span>Sort By</span>
    </button>
  );
};
export const ResetFilters = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        'flex w-fit items-center gap-2 py-2 pl-4 pr-7 text-[#EA0234]',
        className,
      )}
    >
      <ResetIcon className="size-4 text-error" />
      Reset Filter
    </button>
  );
};

export const FilterDropdown = ({
  label,
  title,
  name,
  options,
}: FilterDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-fit items-center gap-3 py-2 pl-4 pr-7 outline-none">
        {label}
        <FaAngleDown className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="block w-full min-w-80 pt-4 pb-3">
        <div className="px-2">
          <h4 className="mb-4 text-base font-semibold">{title}</h4>

          <div className="flex items-center gap-3 text-sm">
            {options.map(({ label, value }) => {
              return (
                <label className="flex px-2.5 min-w-20 cursor-pointer options-center justify-center gap-1 rounded-3xl border border-grey-500 bg-white p-2 text-center font-semibold text-black transition-colors has-checked:bg-primary has-checked:text-white text-xs">
                  <input
                    hidden
                    onClick={(e) => e.stopPropagation()}
                    name={name}
                    type="radio"
                    value={value}
                  />

                  {label}
                </label>
              );
            })}
          </div>
        </div>

        <hr className="my-4" />

        <Button
          type="submit"
          className="mx-auto w-fit text-sm flex min-w-28"
          size="sm"
        >
          Apply Now
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
