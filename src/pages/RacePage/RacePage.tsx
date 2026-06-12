import { GarageSection } from '@/widgets/GarageSection/GarageSection';
import { ControlPannel } from '../../widgets/ControlPannel/ControlPannel';
import { useRef } from 'react';
import { Pagination } from '@/widgets/Pagination/Pagination';
import { useGetCarsQuery } from '@/store/api/garageApi';
import { usePagination } from '@/shared/hooks/usePagination';

const PAGE_SIZE = 7;

function RacePage() {
  const actionsRef = useRef<
    Map<number, { start: () => void; stop: () => void }>
  >(new Map());

  const { page, setPage } = usePagination('race');
  const { data } = useGetCarsQuery({
    page,
    limit: PAGE_SIZE,
  });

  const cars = data?.cars ?? [];
  const totalCount = data?.totalCount ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const startAll = () => actionsRef.current.forEach((a) => a.start());
  const stopAll = () => actionsRef.current.forEach((a) => a.stop());

  return (
    <div className="p-4 text-white">
      <ControlPannel startAll={startAll} stopAll={stopAll} />
      <GarageSection actionsRef={actionsRef} cars={cars} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default RacePage;
