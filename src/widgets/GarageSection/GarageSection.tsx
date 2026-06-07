import { CarActions } from "./components/CarActions";
import { TrackArea } from "./components/TrackArea";

export function GarageSection() {
  return (
    <div className="grid grid-cols-[20%_80%] gap-4 mb-1 pb-1 border-b border-[#373a3d]">
      <CarActions />
      <TrackArea />
    </div>
  );
}
