import { UseCarFormParams } from '@/widgets/GarageSection/types';
import { useEffect, useState } from 'react';
import { getNameValidate } from '../services/getNameValidate';

const DEFAULT_COLOR = '#ffffff';

export function useCarForm({ type, carData }: UseCarFormParams) {
  const [name, setName] = useState('');
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setName('');
    setColor(DEFAULT_COLOR);
    setError(null);
  };

  const { validateName } = getNameValidate();

  useEffect(() => {
    if (type === 'update' && carData) {
      setName(carData.name ?? '');
      setColor(carData.color ?? DEFAULT_COLOR);
    }
  }, [type, carData]);

  const validate = () => {
    const trimmedName = name.trim();
    const validationError = validateName(trimmedName);

    if (validationError) {
      setError(validationError);
      return null;
    }

    setError(null);

    return {
      name: trimmedName,
      color,
    };
  };

  return {
    name,
    setName,
    color,
    setColor,
    error,
    validate,
    resetForm,
  };
}
