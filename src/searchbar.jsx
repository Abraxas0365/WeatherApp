
// This file is not currently used in the application.
// It is a placeholder for a search bar component that can be used later.

import React, { useState } from "react";
import useWeather from "./weatherfetcher";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="mt-2 w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => {

          console.log("Search button clicked, value:", search);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
