import React, { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ isDisplayed, handleNo, redirectYes, text }) => {
  return (
    <div className="flex justify-center items-center">
      {isDisplayed ? (
        <div className="flex flex-col justify-center items-center z-50 top-14 fixed w-1/2 h-1/2 bg-gray-500">
          <h1>{text}</h1>
          <div className="flex justify-between items-center">
            <button
              className="mx-5 p-2 rounded-lg bg-red-500 text-white"
              onClick={handleNo}
            >
              NO
            </button>

            <button className="mx-5 p-2 rounded-lg bg-green-500 text-white">
              <Link to={redirectYes}>YES</Link>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
