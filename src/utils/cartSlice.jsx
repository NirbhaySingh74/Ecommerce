import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
    items: [],
    totalAmount: 0,
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price; // Assuming the payload contains a 'price' property
    },
  },
});

export const { setSearchInput, addItem } = cartSlice.actions;

export default cartSlice.reducer;
