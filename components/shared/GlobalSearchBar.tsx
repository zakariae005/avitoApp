import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="flex items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
