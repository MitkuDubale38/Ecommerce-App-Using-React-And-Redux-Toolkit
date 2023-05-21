import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (element) => element.category === action.payload
      );
    },
    searchProducts: (state, action) => {
      state.filteredProducts = state.products.filter((element) =>
        element.title.toLowerCase().includes(action.payload.toLowerCase())
      );;
    },
  },
});

export const { setProducts, filterProducts, searchProducts } =
  productSlice.actions;
export default productSlice.reducer;
