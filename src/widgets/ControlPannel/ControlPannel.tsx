import { ButtonsSegment } from './components/ButtonsSegment';
import { CustamizationSegment } from './components/CustamizationSegment';

export function ControlPannel() {
  return (
    <div className="flex items-center justify-between mb-6">
      <ButtonsSegment />
      <CustamizationSegment />
    </div>
  );
}
