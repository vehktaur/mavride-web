import DataTable from '@/components/table/data-table';
import { columns, type ScheduledTrip } from './columns';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

const data: ScheduledTrip[] = [
  {
    id: 'TRIP001',
    name: 'John Doe',
    pickup_time: '2024-06-15 10:00 AM',
    pickup_location: '123 Main St, City A',
    drop_off_location: '456 Elm St, City B',
  },
  {
    id: 'TRIP002',
    name: 'Jane Smith',
    pickup_time: '2024-06-15 11:30 AM',
    pickup_location: '789 Oak St, City C',
    drop_off_location: '321 Pine St, City D',
  },
];

const ScheduledTripTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  return (
    <DataTable
      state={{
        isPending: false,
        isError: false,
      }}
      columns={columns}
      table={table}
    />
  );
};
export default ScheduledTripTable;
