import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FilterState = {
  activeCategory: number;
  activeSort: number;
};

const initialState: FilterState = {
  activeCategory: 0,
  activeSort: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setActiveSort(state, action: PayloadAction<number>) {
      state.activeSort = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;
