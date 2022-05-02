import React, { useState, useEffect } from "react";
import cookies from "../../../cookie";
import {
  getWeatherForHour,
  getWeatherOfDays,
} from "../../../services/weatherData";

import LoadingScreen from "../../Loading/index";
import { useContextWeatherHour } from "../../../context/weatherHourContext";
import { useContextWeatherDays } from "../../../context/weatherDaysContext";

import { useContextScales } from "../../../context/scalesContext";
import ForecastToday from "./Forecast/ForecastToday/index";
import ForecastHours from "./Forecast/ForecastHours/index";

import ForecastThreeDays from "./Forecast/ForecastThreeDays/index";

const WeatherInfo = (props) => {
  const [loading, setLoading] = useState(true);

  const { weatherHour, setWeatherHour } = useContextWeatherHour();

  const { weatherDays, setWeatherDays } = useContextWeatherDays();

  const { scales } = useContextScales();

  const { forecast } = props;

  useEffect(() => {
    const getData = async () => {
      if (!weatherHour || !weatherDays) {
        const cookieLocation = cookies.get("location");
        if (cookieLocation) {
          const weatherHourData = await getWeatherForHour(
            cookieLocation.capital
          );
          const weatherDaysData = await getWeatherOfDays(
            cookieLocation.capital
          );
          setWeatherHour(weatherHourData);
          setWeatherDays(weatherDaysData);
        }
      }
    };

    setLoading(true);
    getData();
    if (weatherHour) {
      setLoading(false);
    }
  }, [setWeatherDays, setWeatherHour, weatherDays, weatherHour]);

  return loading ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <div className="container">
      {forecast === "today" ? (
        <ForecastToday weather={weatherHour} scales={scales}></ForecastToday>
      ) : (
        ""
      )}
      {forecast === "hour" ? (
        <ForecastHours weather={weatherHour} scales={scales}></ForecastHours>
      ) : (
        ""
      )}
      {forecast === "threeDays" ? (
        <ForecastThreeDays
          weather={weatherDays}
          scales={scales}
        ></ForecastThreeDays>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherInfo;
