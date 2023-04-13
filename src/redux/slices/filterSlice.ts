import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FilterState = {
  activeCategory: number;
  activeSort: number;
  searchContent: string;
  orderDesc: boolean;
};

const initialState: FilterState = {
  activeCategory: 0,
  activeSort: 0,
  searchContent: '',
  orderDesc: true,
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
    setOrderDesc(state, action: PayloadAction<boolean>) {
      state.orderDesc = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  setActiveSort,
  setSearchContent,
  setOrderDesc,
} = filterSlice.actions;

export default filterSlice.reducer;
