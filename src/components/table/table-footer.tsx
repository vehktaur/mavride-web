import type { Table } from '@tanstack/react-table';
import TablePagination from './table-pagination';

const TableFooter = <T,>({ table }: { table: Table<T> }) => {
  const { pageIndex, pageSize } = table.getState().pagination;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, table.getRowCount());
  const totalRows = table.getRowCount();

  return (
    <footer className="mx-auto py-4 flex max-w-6xl items-center px-5 justify-between text-sm w-full">
      <p className="text-[#B5B7C0] whitespace-nowrap">
        Showing data {startRow} to {endRow} of {totalRows.toLocaleString()}{' '}
        {totalRows > 1 ? 'entries' : 'entry'}
      </p>

      {/* Pagination buttons */}
      {table.getPageCount() > 1 && <TablePagination table={table} />}
    </footer>
  );
};
export default TableFooter;
