import React from "react";
import "css/AutocompleteResults.css";
import { useContextWeatherHour } from "context/weatherHourContext";

import {
  getWeatherForHour,
  getWeatherOfDays,
} from "services/weatherData";
import { useContextWeatherDays } from "context/weatherDaysContext";
import cookies from "cookie.js";

const AutocompleteResults = (props) => {
  const weatherHourContext = useContextWeatherHour();

  const weatherDaysContext = useContextWeatherDays();

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

  return (
    <div className="autocomplete-results">
      {props.searchResults.map((searchResult, index) => {
        return (
          <div className="search-results" key={index}>
            <button onClick={() => getWeather(searchResult.name)}>
              {searchResult.name} - {searchResult.country}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AutocompleteResults;
