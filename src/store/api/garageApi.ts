import { Car } from '@/shared/types/garage/types';
import { commonApi } from './commonApi';
import { UpdateCarArgs } from '../types';

export const garageApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<Car[], void>({
      query: () => '/garage',
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
