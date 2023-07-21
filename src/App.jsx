import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
function App() {
  const getData = async () => {
    const response = await fetch("/api/v1/product/all");
    const data = await response.json();
    console.log(data);
  };
  getData();
  return (
    <div className="App">
      <Routes>
        <Route path="all" />
        <Route path=":id" />
        <Route path="add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
