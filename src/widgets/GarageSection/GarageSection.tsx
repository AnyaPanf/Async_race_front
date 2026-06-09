import { useEffect } from 'react';
import { useGetCarsQuery } from '@/store/api/garageApi';
import { Car } from './types';
import CarField from './components/CarField';

export function GarageSection() {
  const { data: cars } = useGetCarsQuery();

  useEffect(() => {}, [cars]);

  return (
    <div>
      {cars?.map((car: Car) => (
        <CarField key={car.id} name={car.name} color={car.color} id={car.id} />
      ))}
    </div>
  );
}
