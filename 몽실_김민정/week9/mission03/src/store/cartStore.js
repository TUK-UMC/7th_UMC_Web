import { create } from "zustand";
import cartItems from "../mocks/cardItems";

const useCartStore = create((set) => ({
  cartItems: cartItems,
  amount: 0,
  total: 0,

  increase: (id) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  },
  decrease: (id) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  },
  removeItem: (id) => {
    set((state) => {
      const updatedCardItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      return {
        cartItems: updatedCardItems,
      };
    });
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
  calculateTotals: () => {
    set((state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((cartItem) => {
        amount += cartItem.amount;
        total += cartItem.amount * cartItem.price;
      });

      return { amount, total };
    });
  },
}));

export default useCartStore;
