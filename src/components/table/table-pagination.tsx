import type { Table } from '@tanstack/react-table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { cn } from '@/lib/utils';
import { usePaginationSearchParams } from '@/hooks/use-pagination';

interface TablePaginationProps<T> {
  table: Table<T>;
}

const TablePagination = <T,>({ table }: TablePaginationProps<T>) => {
  const [pagination, setPagination] = usePaginationSearchParams();

  const currentPage = pagination.pageIndex + 1;
  const pageCount = table.getPageCount();

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({ ...prev, pageIndex: newPage - 1 }));
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page
    if (startPage > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={() => handlePageChange(1)}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>,
      );

      // Ellipsis after first page
      if (startPage > 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }

    // Page numbers
    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            onClick={() => handlePageChange(page)}
            isActive={currentPage === page}
          >
            {page}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    // Last page
    if (endPage < pageCount) {
      // Ellipsis before last page
      if (endPage < pageCount - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      items.push(
        <PaginationItem key={pageCount}>
          <PaginationLink
            onClick={() => handlePageChange(pageCount)}
            isActive={currentPage === pageCount}
          >
            {pageCount}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  if (pageCount <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className={cn(
              'rounded-sm',
              currentPage === 1
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer',
            )}
          />
        </PaginationItem>

        {renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              handlePageChange(Math.min(pageCount, currentPage + 1))
            }
            className={cn(
              'rounded-sm',
              currentPage === pageCount
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
