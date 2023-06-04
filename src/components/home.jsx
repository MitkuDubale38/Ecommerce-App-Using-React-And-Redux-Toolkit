import "../styles.css";
import React, { useEffect } from "react";
import { useGetProductsQuery } from "../services/storeAPI";
import ProductCard from "./product_card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setSearchedProducts } from "../slices/productSlice";
import ClipLoader from "react-spinners/ClipLoader";
import EmptySearchResultCard from "./empty_search_result_response";

export default function HomePage() {
  const { data, isSuccess, error, isLoading } = useGetProductsQuery();
  const FilteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  var SearchedProducts = useSelector(
    (state) => state.products.searchedProducts
  );

  const isSearcingFilterdProducts = useSelector(
    (state) => state.products.isSearchingFillterdProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProducts(data));
      dispatch(setSearchedProducts(data));
    }
  }, []);

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
    var products;
    if (FilteredProducts.length > 0) {
      if (isSearcingFilterdProducts === true) {
        products = SearchedProducts.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            </Grid>
          );
        });
      } else {
        products = FilteredProducts.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            </Grid>
          );
        });
      }
    } else {
      products = SearchedProducts.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <div key={product.id}>
              <ProductCard product={product} />
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
          {SearchedProducts.length == 0 ? <EmptySearchResultCard /> : products}
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
