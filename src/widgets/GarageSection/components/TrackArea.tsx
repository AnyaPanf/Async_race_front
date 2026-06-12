import { RefObject } from 'react';
import { Car } from './Car';

type TrackAreaProps = {
  name: string;
  color: string;
  carRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
};

export function TrackArea({ name, color, carRef, trackRef }: TrackAreaProps) {
  return (
    <div className="grid grid-cols-[7%_92%] gap-2 items-center relative">
      <Car color={color} carRef={carRef} />
      <div
        ref={trackRef}
        className="px-1 mr-4 bg-[#0e0e10] border-l border-[#373a3d]"
      >
        <div className="flex items-center gap-3">
          <p className="[writing-mode:vertical-rl] text-[8px]">START</p>

          <p className="text-[25px] font-light text-[#363434] tracking-widest">
            {name?.toUpperCase()}
          </p>
          <p className="[writing-mode:vertical-rl] text-[8px] ml-auto mr-25">
            FINISH
          </p>
        </div>
      </div>
    </div>
  );
}
