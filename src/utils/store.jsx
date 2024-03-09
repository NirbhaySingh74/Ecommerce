import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    search: cartReducer, // Fix reducer reference
  },
});
export default store;
