import { useDispatch } from 'react-redux';
import { setSelectedCarId } from '@/store/api/uiApi';
import { useRemoveCarMutation } from '@/store/api/garageApi';
import { Car } from '../../../shared/types/garage/types';
import { CarActions } from './CarActions';
import { TrackArea } from './TrackArea';
import { useCarEngine } from '@/shared/hooks/useCarEngine';
import { useEffect } from 'react';
import { useDeleteWinnerMutation } from '@/store/api/winnersApi';

function CarField({ name, color, id, actionsRef, onFinish }: Car) {
  const dispatch = useDispatch();
  const [removeCar] = useRemoveCarMutation();
  const [deleteWinner] = useDeleteWinnerMutation();

  const { carRef, trackRef, start, stop, isRunning } = useCarEngine({
    carId: id,
    onFinish,
  });

  const handleSelectCar = () => {
    dispatch(setSelectedCarId(id));
  };

  const handleRemoveCar = async () => {
    await removeCar(id);
    try {
      await deleteWinner(id).unwrap();
    } catch {}
  };

  useEffect(() => {
    actionsRef.current.set(id, { start, stop });
    return () => {
      actionsRef.current.delete(id);
    };
  }, [id, start, stop]);

  return (
    <div className="grid grid-cols-[10%_90%] sm:grid-cols-[10%_90%] gap-4 mb-1 pb-1 border-b border-[#373a3d]">
      <CarActions
        handleSelectCar={handleSelectCar}
        handleRemoveCar={handleRemoveCar}
        onStart={start}
        onStop={stop}
        isRunning={isRunning}
      />
      <TrackArea
        name={name}
        color={color}
        carRef={carRef}
        trackRef={trackRef}
      />
    </div>
  );
}

export default CarField;
