import { useGetCarsQuery } from '@/store/api/garageApi';
import { useEffect, useState } from 'react';

const PAGE_SIZE = 7;

export const useGaragePagination = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetCarsQuery({
    page,
    limit: PAGE_SIZE,
  });

  const cars = data?.cars ?? [];
  const totalCount = data?.totalCount ?? 0;

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return {
    page,
    setPage,
    cars,
    totalPages,
    totalCount,
  };
};
