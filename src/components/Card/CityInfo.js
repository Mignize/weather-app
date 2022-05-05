import React, { useEffect, useState } from "react";
import { useContextScales } from "context/scalesContext";
import "css/CityInfo.css";
import cookies from "cookie.js";
import { getWeatherData } from "services/weatherData";

const CityInfo = () => {
  const [countryWeather, setCountryWeather] = useState("");
  const { scales } = useContextScales();

  useEffect(() => {
    const getData = async () => {
      const cookieLocation = cookies.get("location");
      if (cookieLocation) {
        const weatherData = await getWeatherData(cookieLocation.city);
        setCountryWeather(weatherData);
      }
    };
    getData();
  }, []);
  return (
    <>
      {!countryWeather ? (
        <div></div>
      ) : (
        <div className="container-info">
          <img
            className="city-info icon-small"
            src={countryWeather.current.condition.icon}
            alt={countryWeather.current.condition.text}
            title={countryWeather.current.condition.text}
          ></img>
          <div className="city-info">
            {scales === "°C"
              ? `${countryWeather.current.temp_c}°`
              : `${countryWeather.current.temp_f}°`}
          </div>
          <div className="city-info">{countryWeather.location.name}</div>{" "}
        </div>
      )}
    </>
  );
};

export default CityInfo;
