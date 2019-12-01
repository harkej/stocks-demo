import React from "react";
import "./style.css";

const Autocomplete = ({ data, handleClick }) => {
  return (
    <ul className="autocomplete-container">
      {data.map(item => (
        <li
          key={item["1. symbol"]}
          className="autocomplete-item"
          onClick={() => handleClick(item["1. symbol"])}
        >
          <p className="autocomplete-item-symbol">{item["1. symbol"]}</p>
          <p className="autocomplete-item-name">{item["2. name"]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
