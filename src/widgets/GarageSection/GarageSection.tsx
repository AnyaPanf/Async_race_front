import { useGaragePagination } from '@/shared/hooks/usePagination';
import { Pagination } from '@/widgets/Pagination/Pagination';
import { GarageList } from './components/GarageList';
import { GarageSectionProps } from '@/shared/types/garage/types';

export function GarageSection({ actionsRef }: GarageSectionProps) {
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
      <GarageList cars={cars} actionsRef={actionsRef} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
}
