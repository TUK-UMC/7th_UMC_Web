import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../mocks/cardItems";

/** 필요한 것들
 * 1. 수량
 * 2. 금액
 */

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 1. 증가하는 액션
    increase: (state, { payload }) => {
      const itemID = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemID);
      item.amount += 1;
    },
    // 2. 감소하는 액션
    decrease: (state, { payload }) => {
      const itemID = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemID);
      item.amount -= 1;
    },
    // 3. 아이템 제거
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // 4. 모든 아이템 제거
    clearCart: (state) => {
      state.cartItems = [];
    },
    // 5. TOTAL 계산
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((cartItem) => {
        amount += cartItem.amount;
        total += cartItem.amount * cartItem.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
