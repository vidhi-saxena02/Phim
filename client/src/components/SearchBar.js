import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-2 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        name="name"
        placeholder="Search Movies"
        className="w-72 py-2 border-b-2 border-gray-400 bg-transparent outline-none focus:border-white text-white"
      />
    </div>
  );
};

export default SearchBar;
