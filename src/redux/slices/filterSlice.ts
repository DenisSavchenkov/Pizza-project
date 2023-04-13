import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FilterState = {
  activeCategory: number;
  activeSort: number;
  searchContent: string;
};

const initialState: FilterState = {
  activeCategory: 0,
  activeSort: 0,
  searchContent: '',
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
    setSearchContent(state, action: PayloadAction<string>) {
      state.searchContent = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort, setSearchContent } =
  filterSlice.actions;

export default filterSlice.reducer;
