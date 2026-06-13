import { ControlPannelProps } from '@/shared/types/garage/types';
import { ButtonsSegment } from './components/ButtonsSegment';
import { CustamizationSegment } from './components/CustamizationSegment';

export function ControlPannel({ startAll, stopAll }: ControlPannelProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
      <ButtonsSegment startAll={startAll} stopAll={stopAll} />
      <CustamizationSegment />
    </div>
  );
}
