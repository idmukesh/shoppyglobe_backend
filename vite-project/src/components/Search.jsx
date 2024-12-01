// Search.js
import React, { useState } from "react";
import WindowSize from "./WindowSize";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../utils/searchSlice";

// Search bar
function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.search.searchTerm);
  const { width, height } = WindowSize();
  function handleOnChange(e) {
    dispatch(setSearchTerm(e.target.value));
  }

  return (
    <div
      className={`search-input ${width <= 768 ? "mobile-search-input" : ""}`}
    >
      <Link to={"/searchPage"}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        />
      </Link>
    </div>
  );
}

export default Search;
