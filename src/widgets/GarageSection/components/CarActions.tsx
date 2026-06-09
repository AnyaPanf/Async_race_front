import { CarActionBtn } from '@/shared/ui/Buttons/CarActionBtn';
import { CarActivationBtn } from '@/shared/ui/Buttons/CarActivationBtn';
import { CarActionsProps } from '../../../shared/types/garage/types';

export function CarActions({
  handleSelectCar,
  handleRemoveCar,
}: CarActionsProps) {
  return (
    <div className="grid grid-cols-[85%_15%] gap-2 items-center">
      <div className="flex flex-col gap-1">
        <CarActionBtn type="select" handleClick={handleSelectCar} />
        <CarActionBtn type="remove" handleClick={handleRemoveCar} />
      </div>
      <div className="flex flex-col gap-1">
        <CarActivationBtn type="start" />
        <CarActivationBtn type="pause" />
      </div>
    </div>
  );
}
