import { GarageList } from './components/GarageList';
import { GarageSectionProps } from '@/shared/types/garage/types';

export function GarageSection({ cars, actionsRef }: GarageSectionProps) {
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
    </>
  );
}
