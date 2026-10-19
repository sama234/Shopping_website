import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartslice"
// import wishReducer from "../slice/wishlist"

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    // wish:wishReducer
  },
})