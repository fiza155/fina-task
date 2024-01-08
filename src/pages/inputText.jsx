// src/App.js
import React, { useState } from "react";
import "./App.css";
import "./index.css";

function Frontend() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Submitted:", { inputValue, textareaValue });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="inputField"
          >
            Input Box:
          </label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="textareaField"
          >
            Text Area:
          </label>
          <textarea
            className="border border-gray-400 rounded p-2 w-full"
            id="textareaField"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Frontend;
