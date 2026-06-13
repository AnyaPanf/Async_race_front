import { Winner } from '@/shared/types/winners/types';
import { GetWinnersArgs, GetWinnersResponse } from '../types';
import { commonApi } from './commonApi';

export const winnersApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getWinners: build.query<GetWinnersResponse, GetWinnersArgs>({
      query: ({ page, limit, sort, order }) => ({
        url: '/winners',
        params: {
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
        },
      }),
      transformResponse: (response: Winner[], meta): GetWinnersResponse => ({
        winners: response,
        totalCount: Number(meta?.response?.headers.get('X-Total-Count') ?? 0),
      }),
      providesTags: ['Winners'],
    }),
    getWinner: build.query<Winner, number>({
      query: (id) => `/winners/${id}`,
    }),
    createWinner: build.mutation<Winner, Winner>({
      query: (winner) => ({
        url: '/winners',
        method: 'POST',
        body: winner,
      }),
      invalidatesTags: ['Winners'],
    }),
    updateWinner: build.mutation<Winner, Winner>({
      query: ({ id, ...body }) => ({
        url: `/winners/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Winners'],
    }),
    deleteWinner: build.mutation<void, number>({
      query: (id) => ({
        url: `/winners/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Winners'],
    }),
  }),
});

export const {
  useGetWinnersQuery,
  useGetWinnerQuery,
  useCreateWinnerMutation,
  useUpdateWinnerMutation,
  useLazyGetWinnerQuery,
  useDeleteWinnerMutation,
} = winnersApi;
