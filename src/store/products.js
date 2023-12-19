import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const fetchproducts = () => async (dispath) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  if (res.ok) {
    dispath(getAllProducts(data));
  }
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

export const { getAllProducts } = productSlice.actions;
export default productSlice.reducer;
