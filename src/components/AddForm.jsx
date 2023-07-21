import React, { useState } from "react";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/v1/product/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
        imageURL: imageURL,
        category: category,
      }),
    });
    if (response.status === 201) {
      alert(title + " " + description + " " + price + " " + imageURL);
      setTitle("");
      setDescription("");
      setPrice(0);
      setImageURL("");
      setCategory("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title: </label>
        <input type="text" value={title} onChange={handleTitle} />

        <label htmlFor=""> Description </label>
        <input type="text" value={description} onChange={handleDescription} />

        <label htmlFor="">Price </label>
        <input type="number" value={price} onChange={handlePrice} />

        <label htmlFor=""> Image URL </label>
        <input type="text" value={imageURL} onChange={handleImageURL} />

        <label htmlFor=""> Category </label>
        <input type="text" value={category} onChange={handleCategory} />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddForm;
