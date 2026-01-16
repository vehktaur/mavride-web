import type { ColumnDef } from '@tanstack/react-table';
export interface ScheduledTrip {
  id: string;
  name: string;
  pickup_time: string;
  pickup_location: string;
  drop_off_location: string;
}

export const columns: ColumnDef<ScheduledTrip>[] = [
  {
    accessorKey: 'id',
    header: 'Trip ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'pickup_time',
    header: 'Pickup Time',
  },
  {
    accessorKey: 'pickup_location',
    header: 'Pickup Location',
  },
  {
    accessorKey: 'drop_off_location',
    header: 'Drop off Location',
  },
];
