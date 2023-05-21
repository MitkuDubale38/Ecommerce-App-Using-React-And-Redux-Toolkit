import "./styles.css";
import CustomAppBar from "./components/app_bar";
import HomePage from "./components/home";
import Category from "./components/categories";

export default function App() {
  return (
    <div className="App">
      <CustomAppBar />
      <Category />
      <HomePage />
    </div>
  );
}
