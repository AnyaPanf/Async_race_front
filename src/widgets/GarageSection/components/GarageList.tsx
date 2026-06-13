import { GarageListProps } from '@/shared/types/garage/types';
import CarField from './CarField';

export function GarageList({ cars, actionsRef, onFinish }: GarageListProps) {
  return (
    <div>
      {cars?.map((car) => (
        <CarField
          key={car.id}
          name={car.name}
          color={car.color}
          id={car.id}
          actionsRef={actionsRef}
          onFinish={onFinish}
        />
      ))}
    </div>
  );
}
