import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title, desc, price, url, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className="border border-gray-400 rounded-lg  p-5 m-2 flex flex-col items-center">
        <h1 className="text-3xl">{title}</h1>
        <img src={url} alt={title} />
        <p>{desc}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
};

export default Product;
