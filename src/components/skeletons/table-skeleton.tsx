import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/table';

const DataTableSkeleton = ({ length }: { length: number }) => {
  return [...Array(10)].map((_, rowIndex) => (
    // rows
    <TableRow className="hover:bg-transparent" key={rowIndex}>
      {Array.from({ length }).map((_, colIndex) => (
        // cols
        <TableCell key={colIndex}>
          <Skeleton className="h-8 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));
};
export default DataTableSkeleton;
