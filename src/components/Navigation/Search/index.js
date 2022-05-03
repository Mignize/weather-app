import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "../../../css/Search.css";

import getSearchResults from "../../../services/autocompleteSearch";
import RecentResults from "./RecentResults";
import AutocompleteResults from "./AutocompleteResults";

import { useContextWeatherHour } from "../../../context/weatherHourContext";
import {
  getWeatherForHour,
  getWeatherOfDays,
} from "../../../services/weatherData";
import { useContextWeatherDays } from "../../../context/weatherDaysContext";

import cookies from "../../../cookie";

const Search = (props) => {
  const [searchResults, setSearchResults] = useState("");

  const [visible, setVisible] = useState(false);

  const weatherHourContext = useContextWeatherHour();

  const weatherDaysContext = useContextWeatherDays();

  const input = useRef(null);

  const button = useRef(null);

  const container = useRef(null);

  const label = useRef(null);

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

  const getWeather = async (city) => {
    const location = cookies.get("location");
    const weatherHourData = await getWeatherForHour(city);
    const weatherDaysData = await getWeatherOfDays(city);
    if (!props.country && !location) {
      props.setCountry(weatherHourData.location.country);
      props.setCity(city);
    }
    weatherHourContext.setWeatherHour(weatherHourData);
    weatherDaysContext.setWeatherDays(weatherDaysData);
    const search = localStorage.getItem("searchs");
    if (!search) {
      localStorage.setItem(
        "searchs",
        JSON.stringify([{ name: weatherHourData.location.name }])
      );
    }
    const data = JSON.parse(search);
    if (search && data.length < 3) {
      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].name === weatherHourData.location.name) {
          return "";
        }
      }
      data.push({ name: weatherHourData.location.name });
      localStorage.setItem("searchs", JSON.stringify(data));
    }
    if (search && data.length >= 3) {
      data.shift();
      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].name === weatherHourData.location.name) {
          return "";
        }
      }
      data.push({ name: weatherHourData.location.name });
      localStorage.setItem("searchs", JSON.stringify(data));
    }
  };

  const search = async (city) => {
    if (city.length > 3) {
      await getWeather(city);
    }
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

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      if (input.current.value.length > 3) {
        await getWeather(input.current.value);
      }
    }
  };

  let searchResult = "";

  if (visible && searchResults) {
    searchResult = (
      <AutocompleteResults
        searchResults={searchResults}
        country={props.country}
        setCountry={props.setCountry}
        setCity={props.setCity}
      ></AutocompleteResults>
    );
  } else if (visible && !searchResults && !props.withoutLocation) {
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
          placeholder="search"
          onChange={ResultsSearch}
          onClick={addVisible}
          onKeyDown={handleKeyDown}
        ></input>
        <label className="icon" ref={label}>
          <button
            className="button-search"
            onClick={
              !visible ? addVisible : () => search(input.current.value)
            }
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
