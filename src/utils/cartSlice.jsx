import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    searchInput: "",
    filterInput: "", // Add filterInput to the initial state
    items: [],
    totalAmount: 0,
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setFilterInput: (state, action) => {
      state.filterInput = action.payload; // Update filterInput state
    },
    addItem: (state, action) => {
      const { id, title, price, images } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, images, title, price, quantity: 1 });
      }
      state.totalAmount += price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity === 1) {
          state.items.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity -= 1;
        }
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

export const { addItem, removeItem, setSearchInput, setFilterInput } =
  cartSlice.actions;

export default cartSlice.reducer;
