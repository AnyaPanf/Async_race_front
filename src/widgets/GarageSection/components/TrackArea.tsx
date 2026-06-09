import { Car } from './Car';

export function TrackArea({ name, color }: { name?: string; color?: string }) {
  return (
    <div className="grid grid-cols-[7%_93%] gap-2 items-center">
      <div>
        <Car color={color} />
      </div>
      <div className="px-1 mr-4 bg-[#0e0e10] border-l border-[#373a3d]">
        <div className="flex items-center gap-3">
          <p className="[writing-mode:vertical-rl] text-[8px]">START</p>

          <p className="text-[25px] font-light text-[#363434] tracking-widest">
            {name?.toUpperCase()}
          </p>
          <p className="[writing-mode:vertical-rl] text-[8px] ml-auto">
            FINISH
          </p>
        </div>
      </div>
    </div>
  );
}
