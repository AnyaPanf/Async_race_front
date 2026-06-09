const brands = [
  'Tesla',
  'Ford',
  'BMW',
  'Audi',
  'Toyota',
  'Honda',
  'Mercedes',
  'Nissan',
  'Chevrolet',
  'Volkswagen',
];

const models = [
  'Model S',
  'Mustang',
  'X5',
  'A4',
  'Corolla',
  'Civic',
  'C-Class',
  'Altima',
  'Camaro',
  'Golf',
];

const getRandomItem = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;

export type Car = {
  name: string;
  color: string;
};

export const generateCars = (count = 100): Car[] => {
  return Array.from({ length: count }, () => ({
    name: `${getRandomItem(brands)} ${getRandomItem(models)}`,
    color: getRandomColor(),
  }));
};
