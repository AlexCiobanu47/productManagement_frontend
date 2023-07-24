import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between m-2">
      <h1>Product Management</h1>
      <div className="flex">
        <h1 className="mx-4">
          <Link to="/all">All products</Link>
        </h1>
        <h1>
          <Link to="/add">Add new product</Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
