import { useGetCarQuery } from '@/store/api/garageApi';
import { useAppSelector } from '@/store/hooks';
import { CarCustomizerProps } from '@/shared/types/garage/types';
import { useCarForm } from '@/shared/hooks/useCarForm';
import { Form } from './components/Form';

export function CarCustomizer({ type, handleClick }: CarCustomizerProps) {
  const selectedCarId = useAppSelector((state) => state.ui.selectedCarId);
  const { data: carData } = useGetCarQuery(selectedCarId as number, {
    skip: !selectedCarId,
  });

  const { name, setName, color, setColor, error, validate, resetForm } =
    useCarForm({
      type,
      carData,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    try {
      await handleClick(data);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      type={type}
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
      color={color}
      setColor={setColor}
      error={error}
    />
  );
}
