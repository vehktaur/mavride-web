import { cn } from '@/lib/utils';
import { HiMagnifyingGlass } from '@/assets/icons';
import { useQueryState } from 'nuqs';

interface SearchInputProps {
  classNames?: Partial<{
    root: string;
    input: string;
  }>;
  name?: string;
  placeholder?: string;
  withSubmit?: boolean;
  onSearch?: (query: string) => void;
  onSubmit?: (value: string) => void;
}

const SearchInput = ({
  classNames,
  onSearch,
  placeholder = 'Search',
  name = 'search',
}: SearchInputProps) => {
  const [, setQuery] = useQueryState(name, { defaultValue: '' });

  return (
    <div
      className={cn(
        'relative flex w-full max-w-60 items-center gap-1',
        classNames?.root,
      )}
    >
      <HiMagnifyingGlass className="absolute bottom-1/2 left-3 size-4 translate-y-1/2 text-[#B0B0B0]" />
      <input
        className={cn(
          'block w-full rounded-lg py-3 ps-8 pe-2 text-sm font-medium placeholder:text-[#BBBCC0] focus:outline-none focus:ring focus:ring-mavride-blue bg-[#FAFAFA] transition-all duration-300',
          classNames?.input,
        )}
        type="search"
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          const { value } = e.target;
          onSearch?.(value);
          setQuery(value);
        }}
      />
    </div>
  );
};

export default SearchInput;
