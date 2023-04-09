import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


let initialState: any[] = [];

if (typeof window !== "undefined") {
  if (localStorage.getItem("cart")) {
    initialState = JSON.parse(localStorage.getItem("cart")|| "");
  } else {
    initialState = [];
  }
}

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: initialState,
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { ADD_TO_CART } = cartSlice.actions;
export default cartSlice.reducer;
