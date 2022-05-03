import React from "react";
import { useTranslation } from "react-i18next";
import { getDay, getMonth } from "../../../../../services/getDates";

import "../../../../../css/ForecastHours.css";
import DropdownInformation from "./Components/DropdownInformation";
import { getTranslationForCondition } from "../../../../../services/index";

const ForecastHours = (props) => {
  const { weather } = props;

  const [t] = useTranslation("global");

  const forecastDay = weather.forecast.forecastday;

  const forecastFirstDay = forecastDay[0];

  const date = new Date(Date.now());

  const dayNumber = date.getDate();

  const day = date.getDay();

  const month = date.getMonth();

  const dayName = getDay(day);

  const monthName = getMonth(month);

  return (
    <>
      <div className="date">
        {t(dayName)}, {dayNumber} {t("of")} {t(monthName)}
      </div>
      <div className="container-weather-hours">
        <div className="container-dropdown">
          {forecastFirstDay.hour.map((information, index) => {
            const hour = information.time.slice(11);
            const textCondition = getTranslationForCondition(
              information.condition.text
            );
            return (
              <DropdownInformation
                information={information}
                key={index}
                hour={hour}
                textCondition={textCondition}
              ></DropdownInformation>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ForecastHours;
