import { storeApi } from "./storeAPI";

export const categoriesApiSlice = storeApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/products/categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetCategoryQuery } = categoriesApiSlice;
