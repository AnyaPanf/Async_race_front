import {
  useCreateWinnerMutation,
  useLazyGetWinnerQuery,
  useUpdateWinnerMutation,
} from '@/store/api/winnersApi';

export function useHandleWinner() {
  const [createWinner] = useCreateWinnerMutation();
  const [updateWinner] = useUpdateWinnerMutation();
  const [getWinner] = useLazyGetWinnerQuery();

  const handleWinner = async (carId: number, time: number) => {
    try {
      const existing = await getWinner(carId).unwrap();
      await updateWinner({
        id: carId,
        wins: existing.wins + 1,
        time: Math.min(existing.time, time),
      });
    } catch {
      await createWinner({ id: carId, wins: 1, time });
    }
  };

  return { handleWinner };
}
