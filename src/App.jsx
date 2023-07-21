import { Route, Routes } from "react-router-dom";
import AddProductPage from "./pages/AddProductPage";
import AllProductsPage from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="all" element={<AllProductsPage />} />
        <Route path=":id" element={<SingleProductPage />} />
        <Route path="add" element={<AddProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
