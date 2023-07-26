import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [titleFocused, setTitleFocused] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [price, setPrice] = useState("");
  const [priceFocused, setPriceFocused] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [imageURLFocused, setImageURLFocused] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryFocused, setCategoryFocused] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleTitleFocus = () => {
    setTitleFocused(true);
  };
  const handleDescriptionFocus = () => {
    setDescriptionFocused(true);
  };
  const handlePriceFocus = () => {
    setPriceFocused(true);
  };
  const handleImageURLFocus = () => {
    setImageURLFocused(true);
  };
  const handleCategoryFocus = () => {
    setCategoryFocused(true);
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
  const handleModal = () => {
    setDisplayModal(~displayModal);
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
          className="border pl-2 my-2"
          pattern="^[a-zA-Z0-9\s]{3,20}$"
          required
          onBlur={handleTitleFocus}
          focused={titleFocused.toString()}
        />
        <span className="col-span-2 hidden text-red-500">
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
          className="border pl-2 my-2 "
          pattern="^.{5,100}$"
          onBlur={handleDescriptionFocus}
          focused={descriptionFocused.toString()}
          required
        ></input>
        <span className="col-span-2 hidden text-red-500">
          Description should be 5-100 characters long
        </span>
        <label htmlFor="" className="my-2">
          Price:
        </label>
        <input
          type="text"
          value={price}
          onChange={handlePrice}
          className="border pl-2 my-2 "
          pattern="^[0-9]{1,5}[.]?[0-9]{0,2}$"
          onBlur={handlePriceFocus}
          focused={priceFocused.toString()}
          required
        />
        <span className="col-span-2 hidden text-red-500">
          Price should be 1-5 characters long with optional 2 decimals
        </span>
        <label htmlFor="" className="my-2">
          Image URL:
          <button className="border px-1 mx-1" onClick={setDefaultURL}>
            Use default
          </button>
        </label>
        <input
          type="text"
          value={imageURL}
          onChange={handleImageURL}
          className="border pl-2 my-2"
          pattern=".{3,}"
          onBlur={handleImageURLFocus}
          focused={imageURLFocused.toString()}
          required
        />
        <span className="col-span-2 hidden text-red-500">
          Enter a valid URL
        </span>
        <label htmlFor="" className="my-2">
          Category:
        </label>
        <input
          type="text"
          value={category}
          onChange={handleCategory}
          className="border pl-2 my-2 "
          pattern="^[a-zA-Z0-9]{3,20}$"
          focused={categoryFocused.toString()}
          onBlur={handleCategoryFocus}
          required
        />
        <span className="col-span-2 hidden text-red-500">
          Category should be 3-20 characters long and should not contain special
          characters
        </span>
        <div className="col-span-2 my-10 flex justify-center">
          <button
            className="bg-red-400 text-white p-1 mx-5 rounded-md"
            onClick={handleModal}
          >
            CANCEL
          </button>
          <button type="submit" className=" p-1 mx-5 rounded-md bg-green-400">
            SUBMIT
          </button>
        </div>
      </form>
      <Modal
        isDisplayed={displayModal}
        handleNo={handleModal}
        redirectYes="/all"
        text="Are you sure you want to cancel?"
      />
    </div>
  );
};

export default AddForm;
