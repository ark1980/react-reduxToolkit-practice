import { createSlice } from "@reduxjs/toolkit";
import { ReactReduxContext } from "react-redux";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const fetchproducts = () => async (dispath) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  dispath(getAllProducts(data));
};

export const { getAllProducts } = productSlice.actions;
export default productSlice.reducer;
