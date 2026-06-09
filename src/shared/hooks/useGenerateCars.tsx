import { generateCars, Car } from '@/shared/services/generateCars';

export const useGenerateCars = (
  createCar: (car: { data: Car }) => Promise<any>,
) => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const chunk = <T,>(arr: T[], size: number) => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const generate = async (count = 100) => {
    const cars = generateCars(count);
    const batches = chunk(cars, 10);

    for (const batch of batches) {
      await Promise.all(batch.map((car) => createCar({ data: car })));

      await delay(300);
    }
  };

  return {
    generate,
  };
};
