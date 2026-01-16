'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import {
  flexRender,
  type Table as TTable,
  type ColumnDef,
} from '@tanstack/react-table';
// import TablePagination from '@/components/shared/table-pagination';
import { DataTableSkeleton } from '@/components/skeletons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LuOctagonAlert, LuInbox } from '@/assets/icons';
import TableFooter from './table-footer';

interface DataTableProps<T = unknown> {
  table: TTable<T>;
  columns: ColumnDef<T>[];

  classNames?: Partial<{
    table: string;
    header: string;
    body: string;
    footer: string;
    row: string;
    cell: string;
    head: string;
  }>;
  state: {
    isPending: boolean;
    isError: boolean;
    error?: string;
  };
  messages?: Partial<{
    noResults: React.ReactNode;
    error: React.ReactNode;
  }>;
}

export default function DataTable<T>({
  table,
  columns,
  state: { isPending, isError, error },
  classNames,
  messages,
}: DataTableProps<T>) {
  return (
    <>
      <Table className={cn('mb-3', classNames?.table)}>
        <TableHeader className={classNames?.header}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className={cn('hover:bg-transparent', classNames?.row)}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className={classNames?.head} key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isError ? (
            <DataTableError
              colSpan={columns.length}
              error={error}
              message={messages?.error}
            />
          ) : isPending ? (
            // Show skeleton while loading
            <DataTableSkeleton length={columns.length} />
          ) : table.getRowModel().rows?.length > 0 ? (
            // Show actual data rows
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={classNames?.row}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={classNames?.cell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // Only show "No results" if not loading and no rows
            <NoResults colSpan={columns.length} message={messages?.noResults} />
          )}
        </TableBody>
      </Table>

      <TableFooter table={table} />
    </>
  );
}

// Error Component
function DataTableError({
  colSpan,
  error,
  message,
}: {
  colSpan: number;
  error?: string;
  message?: React.ReactNode;
}) {
  return (
    <TableRow>
      <TableCell
        colSpan={colSpan}
        className="text-destructive space-y-4 py-6 text-center"
      >
        <LuOctagonAlert className="mx-auto size-8" />
        <p>{error || message || 'Failed to fetch data.'}</p>
        <Button
          variant="outline"
          className="mx-auto w-fit py-1 text-sm"
          type="button"
          onClick={() => location.reload()}
        >
          Retry
        </Button>
      </TableCell>
    </TableRow>
  );
}

function NoResults({
  colSpan,
  message,
}: {
  colSpan: number;
  message?: React.ReactNode;
}) {
  return (
    <TableRow>
      <TableCell
        colSpan={colSpan}
        className="h-24 space-y-2 px-4 py-6 text-center"
      >
        {message || (
          <>
            <LuInbox className="mx-auto size-8" />

            <p>No results found.</p>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}
