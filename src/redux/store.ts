import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import pizzas from './slices/pizzaDataSlice';

export const store = configureStore({
  reducer: {
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
