import "../styles.css";
import * as React from "react";
import { useGetProductsQuery } from "../services/storeAPI";
import ProductCard from "./product_card";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../slices/productSlice";

export default function HomePage() {
  const { data, isSuccess, error, isLoading } = useGetProductsQuery();
  const Allproducts = useSelector((state) => state.products.products);
  const FilteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <div className="Home">
        <p> Loading...</p>
      </div>
    );
  } else if (isSuccess) {
    dispatch(setProducts(data));
    var products;
    if (FilteredProducts.length > 0) {
      products = FilteredProducts.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard
              category={product.category}
              rating={product.rating}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </div>
        );
      });
    } else {
      products = Allproducts.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard
              category={product.category}
              rating={product.rating}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </div>
        );
      });
    }
    return (
      <div className="Home">
        <Box
          m={1}
          p={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products}
        </Box>
      </div>
    );
  } else if (error) {
    return (
      <div className="Home">
        <p> UnExpected Error Occured... </p>
      </div>
    );
  }
}
