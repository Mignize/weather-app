import React from "react";
import "css/ForecastToday.css";

import { useTranslation } from "react-i18next";
import {
  getTime,
  getTranslationForCondition,
} from "services/index";

import WeatherTimes from "./Components/WeatherTimes";
import MoreInformation from "./Components/MoreInformation";

const ForecastDays = (props) => {
  const { weather, scales } = props;

  const { current, forecast, location } = weather;

  const [t] = useTranslation("global");

  const time = getTime(location.localtime);

  const textCondition = getTranslationForCondition(current.condition.text);

  return scales === "°C" ? (
    <>
      <div className="description-weather-info">
        {location.name} {t("fromTitle")} {time}:
      </div>
      <div className="container-degress">
        <div className="container-condition">
          <div>
            <img
              src={current.condition.icon}
              alt={t(textCondition)}
              title={t(textCondition)}
            ></img>
            <span>{current.temp_c}°</span>
          </div>

          <span>{t(`${textCondition}`)}</span>
        </div>
      </div>
      <div className="description-weather-info">
        {t("weatherTitle")} {location.name}:
      </div>
      <div className="container-information-weather">
        <MoreInformation
          current={current}
          forecast={forecast}
          scales={scales}
        ></MoreInformation>
        <WeatherTimes
          location={location}
          forecast={forecast}
          scales={scales}
        ></WeatherTimes>
      </div>
    </>
  ) : (
    <>
      <div className="description-weather-info">
        {location.name} {t("fromTitle")} {time}:
      </div>
      <div className="container-degress">
        <div className="container-condition">
          <div>
            <img
              src={current.condition.icon}
              alt={t(textCondition)}
              title={t(textCondition)}
            ></img>
            <span>{current.temp_f}°</span>
          </div>

          <span>{t(`${textCondition}`)}</span>
        </div>
      </div>
      <div className="description-weather-info">
        {t("weatherTitle")} {location.name}:
      </div>
      <div className="container-information-weather">
        <MoreInformation
          current={current}
          forecast={forecast}
          scales={scales}
        ></MoreInformation>
        <WeatherTimes
          location={location}
          forecast={forecast}
          scales={scales}
        ></WeatherTimes>
      </div>
    </>
  );
};

export default ForecastDays;
