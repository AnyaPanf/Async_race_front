import {
  useCreateCarMutation,
  useUpdateCarMutation,
} from '@/store/api/garageApi';
import { useAppSelector } from '@/store/hooks';
import { CarCustomizer } from '@/shared/ui/CarCustomizer/CarCustomizer';
import { CustomizeCarData } from '@/shared/types/garage/types';
import { useEffect } from 'react';

export const CustamizationSegment = () => {
  const [updateCar] = useUpdateCarMutation();
  const [createCar] = useCreateCarMutation();
  const selectedCarId = useAppSelector((state) => state.ui.selectedCarId);

  const handleCreateCar = async ({ name, color }: CustomizeCarData) => {
    await createCar({ data: { name, color } }).unwrap();
  };

  useEffect(() => {
    if (selectedCarId) {
      localStorage.setItem('selectedCarId', String(selectedCarId));
    }
  }, [selectedCarId]);

  const handleUpdateCar = async ({ name, color }: CustomizeCarData) => {
    await updateCar({
      id: selectedCarId,
      data: { name, color },
    }).unwrap();
  };
  return (
    <div className="flex gap-4">
      <CarCustomizer type="create" handleClick={handleCreateCar} />
      <CarCustomizer type="update" handleClick={handleUpdateCar} />
    </div>
  );
};
