import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    searchedProducts: [],
    isSearchingFillterdProducts: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchedProducts: (state, action) => {
      state.searchedProducts = action.payload;
    },
    filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (element) => element.category === action.payload
      );
    },
    searchProducts: (state, action) => {
      if (state.filteredProducts.length !== 0) {
        const filteredResult = state.filteredProducts.filter((element) =>
          element.title.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.searchedProducts = filteredResult;
        state.isSearchingFillterdProducts = true;
      } else {
        const filteredResult = state.products.filter((element) =>
          element.title.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.searchedProducts = filteredResult;
         state.isSearchingFillterdProducts = false;
      }
    },
  },
});

export const {
  setProducts,
  setSearchedProducts,
  filterProducts,
  searchProducts,
} = productSlice.actions;
export default productSlice.reducer;
