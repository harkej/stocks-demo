import React from "react";
import "./style.css";
import Autocomplete from "../Autocomplete";

const SearchBar = ({
  value,
  title,
  onChange,
  searchData,
  handleClick,
  showAutocomplete,
  toggleAutocomplete,
}) => {
  const autocompleteHandler = () => toggleAutocomplete();
  return (
    <div className="search-bar-container">
      <p className="search-title">{title}</p>
      <div className="search-bar">
        <input
          id="search-input"
          type="text"
          name="searchText"
          value={value}
          onChange={onChange}
          onFocus={autocompleteHandler}
          // onBlur={autocompleteHandler}
        />
        <button className="search-button">Search</button>
        {showAutocomplete && searchData.length > 0 && (
          <Autocomplete data={searchData} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
