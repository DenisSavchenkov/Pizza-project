import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import pizzas from './slices/pizzaDataSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    pizzas,
    filter,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
