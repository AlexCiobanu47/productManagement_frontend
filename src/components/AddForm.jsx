import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        />

        <label htmlFor="" className="my-2">
          Description:
        </label>
        <textarea
          name=""
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescription}
          className="border pl-2 my-2"
        ></textarea>
        <label htmlFor="" className="my-2">
          Price:
        </label>
        <input
          type="number"
          value={price}
          onChange={handlePrice}
          className="border pl-2 my-2"
        />

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
          className="border pl-2 my-2"
        />

        <label htmlFor="" className="my-2">
          Category:
        </label>
        <input
          type="text"
          value={category}
          onChange={handleCategory}
          className="border pl-2 my-2"
        />
        <div className="col-span-2 flex justify-center">
          <button className="border rounded-lg text-gray-500 px-3 py-1 mx-5">
            <Link to="/all">CANCEL</Link>
          </button>
          <button
            type="submit"
            className="bg-purple-700 text-white rounded-lg px-3 py-1 mx-5"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
