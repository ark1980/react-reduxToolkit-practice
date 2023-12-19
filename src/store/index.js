import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
