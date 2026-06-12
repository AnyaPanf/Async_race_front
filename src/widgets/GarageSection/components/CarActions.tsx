import { CarActionsProps } from '@/shared/types/engine/types';
import { CarActionBtn } from '@/shared/ui/Buttons/CarActionBtn';
import { CarActivationBtn } from '@/shared/ui/Buttons/CarActivationBtn';

export function CarActions({
  handleSelectCar,
  handleRemoveCar,
  onStart,
  onStop,
  isRunning,
}: CarActionsProps) {
  return (
    <div className="grid grid-cols-[85%_15%] gap-2 items-center">
      <div className="flex flex-col gap-1">
        <CarActionBtn type="select" handleClick={handleSelectCar} />
        <CarActionBtn type="remove" handleClick={handleRemoveCar} />
      </div>
      <div className="flex flex-col gap-1">
        <CarActivationBtn
          type="start"
          handleClick={onStart}
          disabled={isRunning}
        />
        <CarActivationBtn
          type="pause"
          handleClick={onStop}
          disabled={!isRunning}
        />
      </div>
    </div>
  );
}
