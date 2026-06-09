// import { useAppSelector } from '@/store/hooks';
import { CustomButton } from '@/shared/ui/Buttons/CustomButton';
import { useCreateCarMutation } from '@/store/api/garageApi';
import { useGenerateCars } from '@/shared/hooks/useGenerateCars';

export const ButtonsSegment = () => {
  //   const selectedCarId = useAppSelector((state) => state.ui.selectedCarId);
  const [createCar] = useCreateCarMutation();

  const { generate } = useGenerateCars(createCar);

  const handleGenerateCars = () => {
    generate(100);
  };

  const handleClick = () => {
    console.log('dfg');
  };

  return (
    <div className="flex gap-4">
      <CustomButton title="Race" type="race" handleClick={handleClick} />
      <CustomButton title="Reset" type="reset" handleClick={handleClick} />
      <CustomButton
        title="Generate"
        type="generate"
        handleClick={handleGenerateCars}
      />
    </div>
  );
};
