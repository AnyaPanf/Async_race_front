import { useGaragePagination } from '@/shared/hooks/usePagination';
import { Pagination } from '@/widgets/Pagination/Pagination';
import { GarageList } from './components/GarageList';

export function GarageSection() {
  const { cars, page, totalPages, setPage } = useGaragePagination();

  if (!cars.length) {
    return (
      <div className="flex justify-center py-10 text-gray-500">
        Oops! Seems like there are no cars yet...
      </div>
    );
  }

  return (
    <>
      <GarageList cars={cars} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
}
