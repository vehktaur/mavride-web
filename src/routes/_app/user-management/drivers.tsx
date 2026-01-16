import PageHeader from '@/components/layout/page-header';
import { TableFilters } from '@/components/table/table-filters';
import { createFileRoute } from '@tanstack/react-router';
import { driversTableFilters as filters } from '@/lib/constants';
import DataTable from '@/components/table/data-table';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columns } from './-components.tsx/driver-table-columns';
import { registeredDrivers as data } from '@/components/data/registered-drivers';
import { usePaginationSearchParams } from '@/hooks/use-pagination';

export const Route = createFileRoute('/_app/user-management/drivers')({
  component: DriversPage,
});

function DriversPage() {
  const [pagination, setPagination] = usePaginationSearchParams();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="bg-white">
      <PageHeader
        title="Drivers"
        link={{ text: 'Create New Profile', href: '#' }}
        classNames={{
          root: 'mb-4',
        }}
      />
      <TableFilters
        filters={filters}
        classNames={{
          root: 'mb-4',
        }}
      />
      <DataTable
        table={table}
        columns={columns}
        state={{
          isPending: false,
          isError: false,
        }}
      />
    </div>
  );
}
