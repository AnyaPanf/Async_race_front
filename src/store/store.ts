import uiReducer from '@/store/api/uiApi';
import { configureStore } from '@reduxjs/toolkit';
import { commonApi } from './api/commonApi';

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
