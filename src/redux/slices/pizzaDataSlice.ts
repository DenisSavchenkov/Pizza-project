import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type FetchArgs = {
  category: string;
  sortBy: boolean | string;
  search: string;
  order: string;
};

export const fetchPizza = createAsyncThunk(
  'pizza/pizzaData',
  async (params: FetchArgs) => {
    const { category, sortBy, search, order } = params;
    const { data } = await axios.get<PizzaItems[]>(
      `https://63fb4e4b7a045e192b66b718.mockapi.io/items?${category}${sortBy}${order}${search}`
    );
    return data;
  }
);

export type PizzaItems = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
  quantity: number;
  info: string;
};

interface PizzaStateTypes {
  pizzaData: PizzaItems[];
  status: 'loading' | 'success' | 'error';
}

export const initialState: PizzaStateTypes = {
  pizzaData: [],
  status: 'loading',
};

const pizzaDataSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzaData = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export default pizzaDataSlice.reducer;
