import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import debounce from "lodash.debounce";
import { searchStocks } from "./services/stocks";
import "./App.css";
import StockDetailsContainer from "./containers/StockDetailsContainer";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    if (searchText) getStocks();
  }, [searchText]);

  const getStocks = debounce(async () => {
    const queryParams = {
      function: "SYMBOL_SEARCH",
      keywords: searchText,
      apikey: process.env.REACT_APP_API_KEY
    };
    const response = await searchStocks(queryParams);
    const responseJson = await response.json();
    setSearchData(responseJson.bestMatches);
    setShowAutocomplete(true);
  }, 300);

  const handleStockSearchClick = symbol => {
    setSelectedStock(symbol);
    setShowAutocomplete(false);
    console.log('here')
  };

  return (
    <div className="App">
      <SearchBar
        value={searchText}
        title="Search using stock name or stock symbol"
        onChange={e => setSearchText(e.target.value)}
        searchData={searchData}
        handleClick={handleStockSearchClick}
        showAutocomplete={showAutocomplete}
        toggleAutocomplete={() => setShowAutocomplete(value => !value)}
      />
      {selectedStock && <StockDetailsContainer />}
    </div>
  );
}

export default App;
