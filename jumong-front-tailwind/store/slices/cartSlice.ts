import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Export this (you'll reuse it in UI)
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
};

const MAX_QUANTITY = 10;

// ✅ Safe localStorage reader
const getInitialCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// ✅ Safe writer
const saveToStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

const initialState: CartState = {
  items: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (existing) {
        existing.quantity = Math.min(
          existing.quantity + (action.payload.quantity || 1),
          MAX_QUANTITY
        );
      } else {
        state.items.push({
          ...action.payload,
          quantity: Math.min(action.payload.quantity || 1, MAX_QUANTITY),
        });
      }

      saveToStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (i) => i.id !== action.payload
      );

      saveToStorage(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (!item) return;

      const qty = action.payload.quantity;

      if (qty <= 0) {
        state.items = state.items.filter(
          (i) => i.id !== action.payload.id
        );
      } else {
        item.quantity = Math.min(qty, MAX_QUANTITY);
      }

      saveToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveToStorage([]);
    },
  },
});

// ✅ Selectors (VERY useful for UI)
export const selectCartItems = (state: { cart: CartState }) =>
  state.cart.items;

export const selectCartTotalQuantity = (state: { cart: CartState }) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);

export const selectCartTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;