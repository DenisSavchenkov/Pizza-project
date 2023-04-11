import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPizza = createAsyncThunk('pizza/pizzaData', async () => {
  const { data } = await axios.get<PizzaItems[]>(
    'https://63fb4e4b7a045e192b66b718.mockapi.io/items'
  );
  return data;
});

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
      state.status = state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = state.status = Status.ERROR;
    });
  },
});

export default pizzaDataSlice.reducer;
