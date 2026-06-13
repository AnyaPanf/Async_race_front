import CarIcon from '@/assets/images/Car.svg?react';
import { RefObject } from 'react';

type CarProps = {
  color: string;
  carRef?: RefObject<HTMLDivElement | null>;
};

export function Car({ color, carRef }: CarProps) {
  return (
    <div className="w-full h-12 flex items-center">
      <div ref={carRef} className="absolute left-7">
        <CarIcon className="w-12 h-12" style={{ color }} />
      </div>
    </div>
  );
}
