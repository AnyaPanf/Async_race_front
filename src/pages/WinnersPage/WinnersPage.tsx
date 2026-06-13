import { usePagination } from '@/shared/hooks/usePagination';
import { useWinnersWithCars } from '@/shared/hooks/useWinnersWithCars';
import { SortField, SortOrder } from '@/shared/types/winners/types';
import { Pagination } from '@/widgets/Pagination/Pagination';
import { WinnersTable } from '@/widgets/WinnersTable/WinnersTable';
import { useState } from 'react';

const PAGE_SIZE = 10;

function WinnersPage() {
  const { page, setPage } = usePagination('winners');
  const [sort, setSort] = useState<SortField>('time');
  const [order, setOrder] = useState<SortOrder>('ASC');
  const { winners, totalCount, isLoading } = useWinnersWithCars({
    page,
    limit: PAGE_SIZE,
    sort,
    order,
  });
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const handleSort = (field: SortField) => {
    if (sort === field) {
      setOrder((prev) => (prev === 'ASC' ? 'DESC' : 'ASC'));
    } else {
      setSort(field);
      setOrder('ASC');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="neon-title text-center mb-2">WINNERS</div>
      <WinnersTable
        winners={winners}
        sort={sort}
        order={order}
        onSort={handleSort}
      />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default WinnersPage;
