import React, { useEffect, useState } from "react";
import "../../../css/RecentResults.css";
import { useTranslation } from "react-i18next";

import GetSearchInformation from "./hooks/GetSearchInformation";
import {
  getWeatherForHour,
  getWeatherOfDays,
} from "../../../services/weatherData";
import { useContextScales } from "../../../context/scalesContext";

import { useContextWeatherHour } from "../../../context/weatherHourContext";
import { useContextWeatherDays } from "../../../context/weatherDaysContext";

const RecentResults = () => {
  const [items, setItems] = useState("");

  const recentsSearch = GetSearchInformation();

  const { scales } = useContextScales();

  const weatherHourContext = useContextWeatherHour();

  const weatherDaysContext = useContextWeatherDays();

  const [t] = useTranslation("global");

  useEffect(() => {
    const getWeather = async (city) => {
      const weatherHourData = await getWeatherForHour(city);
      const weatherDaysData = await getWeatherOfDays(city);
      weatherHourContext.setWeatherHour(weatherHourData);
      weatherDaysContext.setWeatherDays(weatherDaysData);
    };
    if (recentsSearch && !items) {
      setItems(
        recentsSearch.map((recentSearch, index) => {
          return scales === "°C" ? (
            <div
              className="recent-results"
              key={index}
              onClick={() => getWeather(recentSearch.name)}
            >
              <img className="recent-icon" src={recentSearch.icon} alt=""></img>
              <span>{recentSearch.tempC}°</span>
              <div className="container-name-region">
                <span>{recentSearch.name}</span>
                <span className="region">{recentSearch.region}</span>
              </div>
            </div>
          ) : (
            <div
              className="recent-results"
              key={index}
              onClick={() => getWeather(recentSearch.name)}
            >
              <img className="recent-icon" src={recentSearch.icon} alt=""></img>
              <span>{recentSearch.tempF}°</span>
              <div className="container-name-region">
                <span>{recentSearch.name}</span>
                <span className="region">{recentSearch.region}</span>
              </div>
            </div>
          );
        })
      );
    }
    if (items) {
      if (
        (recentsSearch && items.length === 0) ||
        (recentsSearch && items.length === 1) ||
        (recentsSearch && items.length === 2)
      ) {
        setItems(
          recentsSearch.map((recentSearch, index) => {
            return scales === "°C" ? (
              <div
                className="recent-results"
                key={index}
                onClick={() => getWeather(recentSearch.name)}
              >
                <img
                  className="recent-icon"
                  src={recentSearch.icon}
                  alt=""
                ></img>
                <span>{recentSearch.tempC}°</span>
                <div className="container-name-region">
                  <span>{recentSearch.name}</span>
                  <span className="region">{recentSearch.region}</span>
                </div>
              </div>
            ) : (
              <div
                className="recent-results"
                key={index}
                onClick={() => getWeather(recentSearch.name)}
              >
                <img
                  className="recent-icon"
                  src={recentSearch.icon}
                  alt=""
                ></img>
                <span>{recentSearch.tempF}°</span>
                <div className="container-name-region">
                  <span>{recentSearch.name}</span>
                  <span className="region">{recentSearch.region}</span>
                </div>
              </div>
            );
          })
        );
      }
    }
  }, [items, recentsSearch, scales, weatherDaysContext, weatherHourContext]);

  return (
    <>
      <div className="text-recent">{t("recents")}</div>
      {items && items.length > 0 ? (
        items
      ) : (
        <div className="text-exist">{t("exist")}</div>
      )}
    </>
  );
};

export default RecentResults;
