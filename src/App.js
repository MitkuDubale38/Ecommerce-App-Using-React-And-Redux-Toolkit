import "./styles.css";
import * as React from "react";
import { useGetProductsQuery } from "./services/storeAPI";
import ProductCard from "./components/product_card";
import CustomAppBar from "./components/app_bar";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "./slices/productSlice";

export default function App() {
  const { data, error, isLoading } = useGetProductsQuery();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  if (data) {
    // dispatch(setProducts(data));
    products = data.map((product) => {
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
  console.log(data);
  console.log("hello");
  return (
    <div className="App">
      <CustomAppBar />
      {isLoading ? (
        <p> Loading... </p>
      ) : (
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
      )}
    </div>
  );
}
