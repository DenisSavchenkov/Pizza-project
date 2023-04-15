import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const currentItem = state.totalItems.find(
        (item) => item.id === action.payload.id
      );

      currentItem
        ? currentItem.quantity++
        : state.totalItems.push({
            ...action.payload,
            quantity: 1,
          });

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    plusQuantity(state, action) {
      const currentItem = state.totalItems.find(
        (item) => item.id === action.payload
      );

      currentItem.quantity++;

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    minusQuantity(state, action) {
      const currentItem = state.totalItems.find(
        (item) => item.id === action.payload
      );

      currentItem.quantity--;

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      currentItem.quantity === 0
        ? (state.totalItems = state.totalItems.filter(
            (item) => item.id !== action.payload
          ))
        : null;
    },

    clearCart(state) {
      if (confirm('Вы желаете очистить всю корзину?')) {
        state.totalItems = [];
        state.totalPrice = 0;
      }
    },

    removeItem(state, action) {
      state.totalItems = state.totalItems.filter(
        (item) => item.id !== action.payload
      );

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addItem, plusQuantity, minusQuantity, clearCart, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
