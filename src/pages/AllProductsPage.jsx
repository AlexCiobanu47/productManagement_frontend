import React, { useEffect, useState } from "react";
import Products from "../components/Products";
const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/v1/product/all");
      const responseJson = await response.json();
      setProducts(responseJson);
    };
    getData();
  }, []);
  return (
    <div id="products">
      <Products data={products}></Products>
    </div>
  );
};

export default AllProductsPage;
