import { useDispatch } from 'react-redux';
import { setSelectedCarId } from '@/store/api/uiApi';
import { useRemoveCarMutation } from '@/store/api/garageApi';
import { Car } from '../../../shared/types/garage/types';
import { CarActions } from './CarActions';
import { TrackArea } from './TrackArea';

function CarField({ name, color, id }: Car) {
  const dispatch = useDispatch();
  const [removeCar] = useRemoveCarMutation();

  const handleSelectCar = () => {
    dispatch(setSelectedCarId(id));
  };

  const handleRemoveCar = () => {
    removeCar(id);
  };

  return (
    <div className="grid grid-cols-[10%_90%] gap-4 mb-1 pb-1 border-b border-[#373a3d]">
      <CarActions
        handleSelectCar={handleSelectCar}
        handleRemoveCar={handleRemoveCar}
      />
      <TrackArea name={name} color={color} />
    </div>
  );
}

export default CarField;
