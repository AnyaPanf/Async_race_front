import { Car } from '@/shared/types/garage/types';
import { commonApi } from './commonApi';
import { UpdateCarArgs } from '../types';

export const garageApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<
      { cars: Car[]; totalCount: number },
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => ({
        url: '/garage',
        params: {
          _page: page,
          _limit: limit,
        },
      }),

      transformResponse: (response: Car[], meta) => {
        return {
          cars: response,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count') ?? 0),
        };
      },

      providesTags: ['Garage'],
    }),

    getCar: build.query<Car, number>({
      query: (id) => `/garage/${id}`,
      providesTags: ['Garage'],
    }),

    removeCar: build.mutation<void, number>({
      query: (id) => ({
        url: `/garage/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Garage'],
    }),

    updateCar: build.mutation<Car, UpdateCarArgs>({
      query: ({ id, data }) => ({
        url: `/garage/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Garage'],
    }),
    createCar: build.mutation<Car, UpdateCarArgs>({
      query: ({ data }) => ({
        url: '/garage',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Garage'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useRemoveCarMutation,
  useUpdateCarMutation,
  useCreateCarMutation,
} = garageApi;
