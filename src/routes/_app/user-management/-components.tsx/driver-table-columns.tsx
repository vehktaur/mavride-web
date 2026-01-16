import {
  ChevronRightIcon,
  LuEllipsisVertical,
  StarIcon,
  StatusIcon,
} from '@/assets/icons';
import type { RegisteredDriver } from '@/components/data/registered-drivers';
import { cn } from '@/lib/utils';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<RegisteredDriver>[] = [
  {
    accessorKey: 'image',
    header: '',
    cell: ({ getValue }) => {
      const image = getValue() as string;
      return (
        <div className="mx-auto size-[2.6rem] overflow-hidden rounded-full">
          <img
            className="size-full object-cover"
            src={image}
            alt="driver image"
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: "Driver's Name",
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    cell: ({ getValue }) => {
      const rating = Math.round(getValue() as number);
      return (
        <div className="flex items-center">
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'vehicle_color',
    header: 'Vehicle Color',
  },
  {
    accessorKey: 'license_plate',
    header: 'Plate Number',
  },
  {
    accessorKey: 'status',
    header: () => (
      <div className="flex items-center gap-1">
        Status <ChevronRightIcon className="size-4 rotate-90" />
      </div>
    ),
    cell: ({ getValue }) => {
      const status = getValue();
      const isActive = status && status === 'Active';
      return (
        <div
          className={cn('flex items-center gap-2 text-sm', {
            'text-mavride-green': isActive,
            'text-error': !isActive,
          })}
        >
          <StatusIcon className="size-4" />
          <span>{isActive ? 'Active' : 'Offline'}</span>
        </div>
      );
    },
  },
  {
    id: 'options',
    cell: () => <LuEllipsisVertical className="size-5" />,
  },
];
