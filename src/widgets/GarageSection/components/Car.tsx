import CarIcon from '@/assets/images/Car.svg?react';
import { RefObject } from 'react';

type CarProps = {
  color: string;
  carRef?: RefObject<HTMLDivElement | null>;
};

export function Car({ color, carRef }: CarProps) {
  return (
    <div className="w-full h-8 sm:h-12 flex items-center">
      <div ref={carRef} className="absolute left-0 sm:left-7">
        <CarIcon className="w-8 h-8 sm:w-12 sm:h-12" style={{ color }} />
      </div>
    </div>
  );
}
