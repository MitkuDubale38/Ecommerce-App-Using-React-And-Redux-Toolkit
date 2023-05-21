import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useGetCategoryQuery } from "../services/categoryAPI";

export default function Category() {
  const { data, isSuccess, error, isLoading } = useGetCategoryQuery();
  const menus = data.map((menu) => {
    return <MenuItem value={menu}>{menu}</MenuItem>;
  });
  if (isLoading) {
    return (
      <div>
        <p> Loading... </p>
      </div>
    );
  } else if (isSuccess) {
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"age"}
          label="Age"
          onChange={() => {}}
        >
          {menus}
        </Select>
      </FormControl>
    );
  } else if (error) {
    return (
      <div>
        <p> UnExpected Error Occured... </p>
      </div>
    );
  }
}
