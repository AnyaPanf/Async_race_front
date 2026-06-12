import { GarageSection } from '@/widgets/GarageSection/GarageSection';
import { ControlPannel } from '../../widgets/ControlPannel/ControlPannel';
import { useRef } from 'react';

function RacePage() {
  const actionsRef = useRef<
    Map<number, { start: () => void; stop: () => void }>
  >(new Map());

  const startAll = () => actionsRef.current.forEach((a) => a.start());
  const stopAll = () => actionsRef.current.forEach((a) => a.stop());

  return (
    <div className="p-4 text-white">
      <ControlPannel startAll={startAll} stopAll={stopAll} />
      <GarageSection actionsRef={actionsRef} />
    </div>
  );
}

export default RacePage;
