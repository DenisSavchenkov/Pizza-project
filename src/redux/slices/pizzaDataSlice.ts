import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type FetchArgs = {
  category: string;
  sortBy: boolean | string;
  search: string;
};

export const fetchPizza = createAsyncThunk(
  'pizza/pizzaData',
  async (params: FetchArgs) => {
    const { category, sortBy, search } = params;
    const { data } = await axios.get<PizzaItems[]>(
      `https://63fb4e4b7a045e192b66b718.mockapi.io/items?${category}${sortBy}${search}`
    );
    return data;
  }
);

type PizzaItems = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
  rating: number;
};

interface PizzaStateTypes {
  pizzaData: PizzaItems[];
  status: Status;
}

enum Status {
  LOADNIG = 'loadnig',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: PizzaStateTypes = {
  pizzaData: [],
  status: Status.LOADNIG,
};

const pizzaDataSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = Status.LOADNIG;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzaData = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export default pizzaDataSlice.reducer;
