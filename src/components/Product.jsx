import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title, desc, price, url, id }) => {
  return (
    <Link to={`/${id}`}>
      <h1>{title}</h1>
      <img src={url} alt={title} />
      <p>{desc}</p>
      <p>{price}</p>
    </Link>
  );
};

export default Product;
