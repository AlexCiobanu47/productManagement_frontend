import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";
const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [imageURL, setImageURL] = useState();
  const [category, setCategory] = useState();
  const getSingleProduct = async () => {
    const response = await fetch(`/api/v1/product/${id}`);
    const responseJson = await response.json();
    setProduct(responseJson);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleImageURL = (event) => {
    setImageURL(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleUpdate = async () => {
    let response = await fetch(`/api/v1/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title != null ? title : product.title,
        price: price != null ? price : product.price,
        description: description != null ? description : product.description,
        imageURL: imageURL != null ? imageURL : product.imageURL,
        category: category != null ? category : product.category,
      }),
    });
    if (response.status === 200) {
      alert(title + " " + description + " " + price + " " + imageURL);
      getSingleProduct();
    }
  };
  const handleDelete = async () => {
    let response = await fetch(`/api/v1/product/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.status === 200) {
      alert(`Deleted product with id ${id}`);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className="m-2 flex flex-col items-center">
      <h1 className="mb-5">Product with id: {id}</h1>
      <div>
        {product && (
          <div className="flex flex-col items-center">
            <div className="flex-1">
              <h1>Title: {product.title}</h1>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Image URL: {product.imageURL}</p>
              <img src={product.imageURL} alt="" />
              <div className="border-b-4 my-5"></div>
            </div>
            <div className="grid grid-cols-2  flex-1 w-full">
              <h1 className="col-span-2 my-5 text-center">Edit product</h1>
              <label htmlFor="" className="my-2">
                Title:
              </label>
              <input
                type="text"
                onChange={handleTitle}
                defaultValue={product.title}
                className="border pl-2 my-2"
              />
              <label htmlFor="" className="my-2">
                Description:
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={handleDescription}
                className="border pl-2 my-2"
                defaultValue={product.description}
              ></textarea>
              <label htmlFor="" className="my-2">
                Price:
              </label>
              <input
                type="number"
                onChange={handlePrice}
                defaultValue={product.price}
                className="border pl-2 my-2"
              />
              <label htmlFor="" className="my-2">
                imageURL:
              </label>
              <input
                type="text"
                onChange={handleImageURL}
                defaultValue={product.imageURL}
                className="border pl-2 my-2"
              />
              <label htmlFor="" className="my-2">
                Category:
              </label>
              <input
                type="text"
                onChange={handleCategory}
                defaultValue={product.category}
                className="border pl-2 my-2"
              />
              <div className="col-span-2 flex justify-center items-center mt-5">
                <button
                  onClick={handleUpdate}
                  className="border w-1/4 hover:text-green-500 mx-5"
                >
                  UPDATE
                </button>
                <Link to="/all" className="border w-1/4 flex justify-center">
                  <button
                    onClick={handleDelete}
                    className=" hover:text-red-500"
                  >
                    DELETE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
