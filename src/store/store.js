import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { storeApi } from "../services/storeAPI";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
setupListeners(store.dispatch);
