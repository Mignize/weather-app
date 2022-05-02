import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "../../../css/Search.css";

import getSearchResults from "../../../services/autocompleteSearch";
import RecentResults from "./RecentResults";
import AutocompleteResults from "./AutocompleteResults";

import { useTranslation } from "react-i18next";

const Search = () => {
  const [searchResults, setSearchResults] = useState("");

  const [visible, setVisible] = useState(false);

  const input = useRef(null);

  const button = useRef(null);

  const container = useRef(null);

  const label = useRef(null);

  const [t] = useTranslation("global");

  const ResultsSearch = async (e) => {
    if (e.target.value.length >= 3) {
      const results = await getSearchResults(e.target.value);
      const result = results.data.slice(0, 5);
      setSearchResults(result);
    }
    if (e.target.value.length <= 3 && searchResults) {
      setSearchResults("");
    }
  };

  const addVisible = () => {
    setVisible(true);
  };

  const removeVisible = (e) => {
    const clic = e.target;
    const pathThree = e.path[2];
    if (
      clic !== input.current &&
      pathThree !== button.current &&
      pathThree !== label.current &&
      pathThree !== container.current
    ) {
      setVisible(false);
    }
  };

  const search = (city) => {};

  let searchResult = "";

  if (visible && searchResults) {
    searchResult = (
      <AutocompleteResults searchResults={searchResults}></AutocompleteResults>
    );
  } else if (visible && !searchResults) {
    searchResult = (
      <div className="recent-search">
        <RecentResults></RecentResults>
      </div>
    );
  }

  document.addEventListener("click", (e) => removeVisible(e));

  return (
    <>
      <div className="search-container" ref={container}>
        <input
          ref={input}
          type="search"
          placeholder={t("search")}
          onChange={ResultsSearch}
          onClick={addVisible}
        ></input>
        <label className="icon" ref={label}>
          <button
            className="button-search"
            onClick={!visible ? addVisible : () => search(input.current)}
            ref={button}
          >
            <FaSearch></FaSearch>
          </button>
        </label>
        {searchResult}
      </div>
    </>
  );
};

export default Search;
