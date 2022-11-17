import React from "react";
import "./Search.css";
const Search = () => {
  return (
    <div className="Whatever">
      <div class="searchBox">
        <input
          class="searchInput"
          type="text"
          name=""
          placeholder="Search"
        ></input>
        <svg
          className="searchButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 123.23 126.1"
        >
          <path d="M90.43,86.35l32.8,32.76-7.33,7-33-32.95c-13,9.23-27.17,12.39-42.59,9A50.16,50.16,0,0,1,9.68,81.81a51.79,51.79,0,1,1,80.75,4.54Zm-38.63,7a41.64,41.64,0,1,0-1.09-83.26c-21,.55-40.61,17.62-40.54,41.79C10.23,74.78,28.61,93.1,51.8,93.37Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Search;
