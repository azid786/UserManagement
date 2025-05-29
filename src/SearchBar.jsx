import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => (
  <div className="search-wrapper">
    <label className="search-label">Search Users:</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
      placeholder="Enter name"
    />
  </div>
);

export default SearchBar;
