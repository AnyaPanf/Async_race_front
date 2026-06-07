import CarIcon from "@/assets/images/Car.svg?react";

type CarProps = {
  color?: string;
};

export function Car({ color }: CarProps) {
  return (
    <div className="flex items-center justify-center">
      <CarIcon className="w-12 h-12" style={{ color }} />
    </div>
  );
}
