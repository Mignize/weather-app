import React from "react";
import "css/ForecastThreeDays.css";
import { useTranslation } from "react-i18next";

import InformationWeatherDays from "./Components/InformationWeatherDays";
import { useContextWeatherDays } from "context/weatherDaysContext";

const ForecastThreeDays = () => {
  const { weatherDays } = useContextWeatherDays();

  const { t } = useTranslation("global");

  return (
    <div>
      <div className="date">
        {t("forecastForThreeDays")}
        <div className="name-city">- {` ${weatherDays.location.name}`}</div>
      </div>
      <div className="scroll">
        {weatherDays
          ? weatherDays.forecast.forecastday.map((information, index) => {
              return (
                <InformationWeatherDays
                  information={information}
                  key={index}
                ></InformationWeatherDays>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ForecastThreeDays;
