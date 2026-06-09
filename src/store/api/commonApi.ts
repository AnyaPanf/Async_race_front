import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000',
  }),
  tagTypes: ['Garage', 'Winners', 'Engine'],
  endpoints: () => ({}),
});
