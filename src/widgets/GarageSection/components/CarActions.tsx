import { CarActionBtn } from "@/shared/ui/Buttons/CarActionBtn";
import { CarActivationBtn } from "@/shared/ui/Buttons/CarActivationBtn";
import { Car } from "./Car";

export const CarActions = () => {
  return (
    <div className="grid grid-cols-[50%_10%_40%] gap-2 items-center">
      <div className="flex flex-col gap-1">
        <CarActionBtn type="select" />
        <CarActionBtn type="remove" />
      </div>
      <div className="flex flex-col gap-1">
        <CarActivationBtn type="start" />
        <CarActivationBtn type="pause" />
      </div>
      <div>
        <Car color="red" />
      </div>
    </div>
  );
};
