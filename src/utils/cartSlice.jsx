import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = cartSlice.actions;

export default cartSlice.reducer;
