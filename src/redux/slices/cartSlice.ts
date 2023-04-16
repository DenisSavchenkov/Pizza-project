import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartSliceType = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
  quantity: number;
};

interface StateType {
  totalPrice: number;
  totalItems: CartSliceType[];
}

const initialState: StateType = {
  totalPrice: 0,
  totalItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartSliceType>) {
      const currentItem = state.totalItems.find(
        (item) => item.id === action.payload.id
      );

      if (currentItem) {
        currentItem.quantity++;
      } else {
        state.totalItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    plusQuantity(state, action: PayloadAction<string>) {
      const currentItem = state.totalItems.find(
        (item) => item.id === action.payload
      );

      if (currentItem) {
        currentItem.quantity++;
      }

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    minusQuantity(state, action: PayloadAction<string>) {
      const currentItem = state.totalItems.find(
        (item) => item.id === action.payload
      );

      if (currentItem) {
        currentItem.quantity--;
      }

      state.totalPrice = state.totalItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      if (currentItem?.quantity === 0) {
        state.totalItems = state.totalItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    clearCart(state) {
      if (confirm('Вы желаете очистить всю корзину?')) {
        state.totalItems = [];
        state.totalPrice = 0;
      }
    },

    removeItem(state, action: PayloadAction<string>) {
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
