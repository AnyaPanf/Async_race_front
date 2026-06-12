import { commonApi } from './commonApi';

export const engineApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    startStopEngine: build.mutation<
      { velocity: number; distance: number },
      { id: number; status: 'started' | 'stopped' | 'drive' }
    >({
      query: ({ id, status }) => ({
        url: '/engine',
        method: 'PATCH',
        params: {
          id,
          status,
        },
      }),
      invalidatesTags: ['Engine'],
    }),
    switchToDriveMode: build.mutation<
      { success: boolean },
      { id: number; status: 'started' | 'stopped' | 'drive' }
    >({
      query: ({ id, status }) => ({
        url: '/engine',
        method: 'PATCH',
        params: {
          id,
          status,
        },
      }),
      invalidatesTags: ['Engine'],
    }),
  }),
});

export const { useStartStopEngineMutation, useSwitchToDriveModeMutation } =
  engineApi;
