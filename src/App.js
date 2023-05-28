import "./styles.css";
import CustomAppBar from "./components/app_bar";
import HomePage from "./components/home";
import Category from "./components/categories";
import Fab from "@mui/material/Fab";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

export default function App() {
  return (
    <div className="App">
      <CustomAppBar />
      <Category />
      <HomePage />
      <Fab color="teal" aria-label="add">
        <ShoppingCartOutlined />
      </Fab>
    </div>
  );
}
