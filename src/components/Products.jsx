import React from "react";
import Product from "./Product";
const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {data &&
        data.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.description}
            price={product.price}
            url={product.imageURL}
          ></Product>
        ))}
    </div>
  );
};

export default Products;
