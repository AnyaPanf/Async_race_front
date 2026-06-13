import { GarageSection } from '@/widgets/GarageSection/GarageSection';
import { ControlPannel } from '../../widgets/ControlPannel/ControlPannel';
import { useRef, useState } from 'react';
import { Pagination } from '@/widgets/Pagination/Pagination';
import { useGetCarsQuery } from '@/store/api/garageApi';
import { usePagination } from '@/shared/hooks/usePagination';
import { useHandleWinner } from '@/shared/hooks/useHandleWinner';
import { WinnerModal } from '@/shared/ui/Modals/WinnerModal';

const PAGE_SIZE = 7;

function RacePage() {
  const actionsRef = useRef<
    Map<number, { start: () => void; stop: () => void }>
  >(new Map());
  const winnerRef = useRef(false);
  const { handleWinner } = useHandleWinner();

  const { page, setPage } = usePagination('race');
  const [winner, setWinner] = useState<{ name: string; time: number } | null>(
    null,
  );

  const { data } = useGetCarsQuery({
    page,
    limit: PAGE_SIZE,
  });

  const cars = data?.cars ?? [];
  const totalCount = data?.totalCount ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const startAll = () => {
    winnerRef.current = false;
    actionsRef.current.forEach((a) => a.start());
  };

  const stopAll = () => actionsRef.current.forEach((a) => a.stop());

  const handleFinish = (carId: number, time: number) => {
    if (winnerRef.current) return;
    winnerRef.current = true;
    handleWinner(carId, time);

    const car = cars.find((c) => c.id === carId);
    setWinner({ name: car?.name ?? 'Unknown', time });
  };

  return (
    <div className="p-4 text-white">
      <ControlPannel startAll={startAll} stopAll={stopAll} />
      <GarageSection
        actionsRef={actionsRef}
        cars={cars}
        onFinish={handleFinish}
      />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      {winner !== null && (
        <WinnerModal winner={winner} onClose={() => setWinner(null)} />
      )}
    </div>
  );
}

export default RacePage;
