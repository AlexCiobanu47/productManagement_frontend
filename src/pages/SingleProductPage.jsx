import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className="m-2">
      <h1>Single product page {id}</h1>
      <div>
        {product && (
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.imageURL}</p>
            <div className="grid grid-cols-2 w-1/2">
              <div className="col-span-2 border-t-2"></div>
              <h1 className="col-span-2">Edit product</h1>
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
                  className="border w-1/4 hover:text-green-500"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
