import { UseCarFormParams } from '@/shared/types/garage/types';
import { useEffect, useState } from 'react';
import { getNameValidate } from '../services/getNameValidate';

const STORAGE_KEYS = {
  create: 'car-create-form',
  update: 'car-update-form',
};

const DEFAULT_COLOR = '#ffffff';

export function useCarForm({ type, carData }: UseCarFormParams) {
  const key = STORAGE_KEYS[type];
  const [name, setName] = useState(localStorage.getItem(`${key}-name`) ?? '');
  const [color, setColor] = useState(
    localStorage.getItem(`${key}-color`) ?? DEFAULT_COLOR,
  );
  const [error, setError] = useState<string | null>(null);

  const { validateName } = getNameValidate();

  const resetForm = () => {
    setName('');
    setColor(DEFAULT_COLOR);
    setError(null);
    localStorage.removeItem(`${key}-name`);
    localStorage.removeItem(`${key}-color`);
  };

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

  useEffect(() => {
    if (type === 'update' && carData) {
      setName(carData.name ?? '');
      setColor(carData.color ?? DEFAULT_COLOR);
      localStorage.setItem(`${key}-name`, carData.name ?? '');
      localStorage.setItem(`${key}-color`, carData.color ?? DEFAULT_COLOR);
    }
  }, [type, carData]);

  useEffect(() => {
    localStorage.setItem(`${key}-name`, name);
    localStorage.setItem(`${key}-color`, color);
  }, [key, name, color]);

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
