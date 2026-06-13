import { GetWinnersArgs } from '@/store/types';
import { WinnerWithCar } from '../types/winners/types';
import { useGetWinnersQuery } from '@/store/api/winnersApi';
import { useGetCarsQuery } from '@/store/api/garageApi';

export const useWinnersWithCars = (args: GetWinnersArgs) => {
  const { data: winnersData, isLoading: winnersLoading } =
    useGetWinnersQuery(args);
  const { data: carsData, isLoading: carsLoading } = useGetCarsQuery({
    page: 1,
    limit: 1000,
  });

  const winners: WinnerWithCar[] = (winnersData?.winners ?? [])
    .map((winner) => {
      const car = carsData?.cars.find((c) => c.id === winner.id);
      return {
        ...winner,
        name: car?.name ?? 'Unknown',
        color: car?.color ?? '#ffffff',
      };
    })
    .filter((w): w is WinnerWithCar => w !== null);

  return {
    winners,
    totalCount: winnersData?.totalCount ?? 0,
    isLoading: winnersLoading || carsLoading,
  };
};
