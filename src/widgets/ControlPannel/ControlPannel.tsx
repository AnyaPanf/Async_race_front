import {
  useCreateCarMutation,
  useUpdateCarMutation,
} from '@/store/api/garageApi';
import { useAppSelector } from '@/store/hooks';
import { CarCustomizer } from '@/shared/ui/CarCustomizer/CarCustomizer';
import { CustomButton } from '../../shared/ui/Buttons/CustomButton';
import { CustomizeCarData } from '../GarageSection/types';

export function ControlPannel() {
  const [updateCar] = useUpdateCarMutation();
  const [createCar] = useCreateCarMutation();
  const selectedCarId = useAppSelector((state) => state.ui.selectedCarId);

  const handleCreateCar = async ({ name, color }: CustomizeCarData) => {
    await createCar({ data: { name, color } }).unwrap();
  };

  const handleUpdateCar = async ({ name, color }: CustomizeCarData) => {
    await updateCar({
      id: selectedCarId,
      data: { name, color },
    }).unwrap();
  };

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4">
        <CustomButton title="Race" type="race" handleClick={handleClick} />
        <CustomButton title="Reset" type="reset" handleClick={handleClick} />
        <CustomButton
          title="Generate"
          type="generate"
          handleClick={handleClick}
        />
      </div>
      <div className="flex gap-4">
        <CarCustomizer type="create" handleClick={handleCreateCar} />
        <CarCustomizer type="update" handleClick={handleUpdateCar} />
      </div>
    </div>
  );
}
