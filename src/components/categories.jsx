import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { filterProducts } from "../slices/productSlice";
import { useGetCategoryQuery } from "../services/categoryAPI";

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
export default function Category() {
  const dispatch = useDispatch();
  const { data, isSuccess, error, isLoading } = useGetCategoryQuery();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    dispatch(filterProducts(event.target.value));
  };

  if (isLoading) {
    return (
      <div>
        <p> </p>
      </div>
    );
  } else if (isSuccess) {
    const categoryData = [...data];
    categoryData.push("All");
    const menus = categoryData.map((menu) => {
      return <MenuItem value={menu}>{titleCase(menu)}</MenuItem>;
    });

    return (
      <Grid container justify="flex-start">
        <FormControl sx={{ mt: 3, minWidth: 160 }} size="small" align="left">
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Categories"
            onChange={handleChange}
          >
            MenuItem
            {menus}
          </Select>
        </FormControl>
      </Grid>
    );
  } else if (error) {
    return (
      <div>
        <p> UnExpected Error Occured... </p>
      </div>
    );
  }
}
