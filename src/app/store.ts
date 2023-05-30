import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './slice';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;