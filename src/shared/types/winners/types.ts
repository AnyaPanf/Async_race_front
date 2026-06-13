import { Car } from '../garage/types';

export type Winner = {
  id: number;
  wins: number;
  time: number;
};

export type WinnerWithCar = Winner & Pick<Car, 'name' | 'color'>;

export type SortField = 'wins' | 'time';
export type SortOrder = 'ASC' | 'DESC';

export type WinnersTableProps = {
  winners: (Winner & Pick<Car, 'name' | 'color' | 'id'>)[];
  sort: SortField;
  order: SortOrder;
  onSort: (field: SortField) => void;
};

type WinnerModal = {
  name: string;
  time: number;
};

export type WinnerModalProps = {
  winner: WinnerModal | null;
  onClose: () => void;
};
