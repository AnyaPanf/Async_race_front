import { Winner } from '@/shared/types/winners/types';

export type UpdateCarArgs = {
  id?: number;
  data: {
    name: string;
    color: string;
  };
};

export type GetWinnersArgs = {
  page?: number;
  limit?: number;
  sort?: 'id' | 'wins' | 'time';
  order?: 'ASC' | 'DESC';
};

export type GetWinnersResponse = {
  winners: Winner[];
  totalCount: number;
};
