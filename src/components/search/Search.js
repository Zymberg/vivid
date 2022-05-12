import React from "react";

function Search({ handleSearch }) {

  return (
    <div className="searchbar">
    <label htmlFor="search">Search by address:</label>
     <input className="in-search"
      type="text"
      id="search"
      placeholder="Type address to search..."
      onChange={handleSearch}
    />
  </div>
  );
}

export default Search;
