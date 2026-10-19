import { createSlice } from "@reduxjs/toolkit";

// GET CART FROM LOCAL STORAGE
const savedCart = localStorage.getItem("cart");

const initialState = {
  item: savedCart ? JSON.parse(savedCart) : []
};

const createcart = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // ADD PRODUCT
    addtocart: (state, action) => {

      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({
          ...action.payload,
          quantity: 1
        });
      }

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("cart", JSON.stringify(state.item));
    },


    // REMOVE PRODUCT
    removefromcart: (state, action) => {

      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("cart", JSON.stringify(state.item));
    },


    // CLEAR CART
    clearcart: (state) => {

      state.item = [];

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("cart", JSON.stringify(state.item));
    },


    // PLUS
    addquantity: (state, action) => {

      const item = state.item.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("cart", JSON.stringify(state.item));
    },


    // MINUS
    removequantity: (state, action) => {

      const item = state.item.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("cart", JSON.stringify(state.item));
    }

  }
});


export const {
  addtocart,
  removefromcart,
  clearcart,
  addquantity,
  removequantity
} = createcart.actions;


export default createcart.reducer;