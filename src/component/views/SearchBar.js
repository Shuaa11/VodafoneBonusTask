import React from "react";

function SearchBar(props) {
  return (
    <input
    className="form-control me-2 p-1"
      type="text"
      onChange={(e) => props.onSearch(e.target.value)}
      value={props.value}
      placeholder='Search for contact'
    />
  );
}

export default SearchBar;