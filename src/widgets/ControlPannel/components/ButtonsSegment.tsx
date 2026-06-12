import { CustomButton } from '@/shared/ui/Buttons/CustomButton';
import { useCreateCarMutation } from '@/store/api/garageApi';
import { useGenerateCars } from '@/shared/hooks/useGenerateCars';
import { ControlPannelProps } from '@/shared/types/garage/types';

export const ButtonsSegment = ({ startAll, stopAll }: ControlPannelProps) => {
  const [createCar] = useCreateCarMutation();

  const { generate } = useGenerateCars(createCar);

  const handleGenerateCars = () => {
    generate(100);
  };

  return (
    <div className="flex gap-4">
      <CustomButton title="Race" type="race" handleClick={startAll} />
      <CustomButton title="Reset" type="reset" handleClick={stopAll} />
      <CustomButton
        title="Generate"
        type="generate"
        handleClick={handleGenerateCars}
      />
    </div>
  );
};
