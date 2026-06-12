import { useSearchParams } from 'react-router-dom';

export const usePagination = (paramKey: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get(paramKey)) || 1;

  const setPage = (newPage: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set(paramKey, String(newPage));
      return params;
    });
  };

  return {
    page,
    setPage,
  };
};
