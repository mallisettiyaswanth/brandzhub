"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the product and cart state
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a product to the cart
    addToCart(state, action: PayloadAction<Product>) {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
      state.totalPrice += price;
    },

    // Remove a product from the cart by ID
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const productToRemove = state.items.find((item) => item.id === id);
      if (productToRemove) {
        state.totalPrice -= productToRemove.price * productToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Increase the quantity of a product by ID
    increaseQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      }
    },

    // Decrease the quantity of a product by ID
    decreaseQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },

    // Calculate the total price based on quantities and product prices
    calculateTotalPrice(state) {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

// Selector to check if a product is in the cart
export const isInCart = (
  state: { cart: CartState },
  productId: string
): boolean => {
  return state.cart.items.some((item) => item.id === productId);
};

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
