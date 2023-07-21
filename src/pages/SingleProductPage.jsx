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
    <div>
      <h1>Single product page {id}</h1>
      <div>
        {product && (
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.imageURL}</p>
            <div>
              <label htmlFor="">Title:</label>
              <input
                type="text"
                onChange={handleTitle}
                defaultValue={product.title}
              />
              <label htmlFor="">Description:</label>
              <input
                type="text"
                onChange={handleDescription}
                defaultValue={product.description}
              />
              <label htmlFor="">Price:</label>
              <input
                type="number"
                onChange={handlePrice}
                defaultValue={product.price}
              />
              <label htmlFor="">imageURL:</label>
              <input
                type="text"
                onChange={handleImageURL}
                defaultValue={product.imageURL}
              />
              <label htmlFor="">Category:</label>
              <input
                type="text"
                onChange={handleCategory}
                defaultValue={product.category}
              />
              <button onClick={handleUpdate}>UPDATE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
