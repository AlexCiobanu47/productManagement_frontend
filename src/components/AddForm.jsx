import React, { useState } from "react";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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
  const setDefaultURL = () => {
    const randomNumberInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    setImageURL(
      `https://picsum.photos/id/${randomNumberInRange(1, 1084)}/640/320`
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="m-2 grid grid-cols-2 w-96">
        <label htmlFor="title" className="my-2">
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          className="border pl-2 my-2 peer/title invalid:border-red-500"
          pattern="^[a-zA-Z0-9]{3,20}$"
          required
        />
        <span className="col-span-2 hidden peer-invalid/title:inline-block text-red-500">
          Title should be 3-20 characters long and should not contain special
          characters
        </span>
        <label htmlFor="" className="my-2">
          Description:
        </label>
        <input
          type="text"
          value={description}
          onChange={handleDescription}
          className="border pl-2 my-2 peer/description invalid:border-red-500"
          pattern="^.{5,100}$"
          required
        ></input>
        <span className="col-span-2 hidden peer-invalid/description:inline-block text-red-500">
          Description should be 5-100 characters long
        </span>
        <label htmlFor="" className="my-2">
          Price:
        </label>
        <input
          type="text"
          value={price}
          onChange={handlePrice}
          className="border pl-2 my-2 peer/price invalid:border-red-500"
          pattern="^[0-9]{1,5}[.]?[0-9]{0,2}$"
          required
        />
        <span className="col-span-2 hidden peer-invalid/price:inline-block text-red-500">
          Price should be 1-5 characters long with optional 2 decimals
        </span>
        <label htmlFor="" className="my-2">
          Image URL:{" "}
          <button className="border" onClick={setDefaultURL}>
            Use default
          </button>
        </label>
        <input
          type="text"
          value={imageURL}
          onChange={handleImageURL}
          className="border pl-2 my-2 peer/url invalid:border-red-500"
          pattern="(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?"
          required
        />
        <span className="col-span-2 hidden peer-invalid/url:inline-block text-red-500">
          Enter a valid URL
        </span>
        <label htmlFor="" className="my-2">
          Category:
        </label>
        <input
          type="text"
          value={category}
          onChange={handleCategory}
          className="border pl-2 my-2 peer/category invalid:border-red-500"
          pattern="^[a-zA-Z0-9]{3,20}$"
          required
        />
        <span className="col-span-2 hidden peer-invalid/category:inline-block text-red-500">
          Category should be 3-20 characters long and should not contain special
          characters
        </span>
        <button type="submit" className="hover:text-green-500">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddForm;
