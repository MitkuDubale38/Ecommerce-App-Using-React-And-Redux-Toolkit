import "../styles.css";
import * as React from "react";
import { useGetProductsQuery } from "../services/storeAPI";
import ProductCard from "./product_card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../slices/productSlice";
import ClipLoader from "react-spinners/ClipLoader";

export default function HomePage() {
  const { data, isSuccess, error, isLoading } = useGetProductsQuery();
  const Allproducts = useSelector((state) => state.products.products);
  const FilteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <Grid container direction="row" justifyContent="center" align="center">
        <div className="Home">
          <ClipLoader
            color="teal"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </Grid>
    );
  } else if (isSuccess) {
    dispatch(setProducts(data));
    var products;
    if (FilteredProducts.length > 0) {
      products = FilteredProducts.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          </Grid>
        );
      });
    } else {
      products = Allproducts.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          </Grid>
        );
      });
    }
    return (
      <div className="Home">
        <Grid
          pt={3}
          container
          spacing={1}
          align="center"
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        >
          {products}
        </Grid>
        <div container>
          <Pagination
            count={products.length / 10}
            variant="outlined"
            shape="rounded"
            sx={{ mb: 5 }}
          />
        </div>
       
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
