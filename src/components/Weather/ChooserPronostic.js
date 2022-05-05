import React from "react";
import CityInfo from "components/Card/CityInfo";
import { useTranslation } from "react-i18next";

const ChooserPronostic = (props) => {
  const { setForecast } = props;

  const [t] = useTranslation("global");

  const setPronostic = (chosenForecast) => {
    setForecast(chosenForecast);
  };

  return (
    <div className="container-options">
      <CityInfo></CityInfo>
      <div
        className={
          props.forecast === "today" ? "button active-forecast" : "button"
        }
        onClick={() => setPronostic("today")}
      >
        {t("today")}
      </div>
      <div
        className={
          props.forecast === "hour" ? "button active-forecast" : "button"
        }
        onClick={() => setPronostic("hour")}
      >
        {t("hourly")}
      </div>
      <div
        className={
          props.forecast === "threeDays" ? "button active-forecast" : "button"
        }
        onClick={() => setPronostic("threeDays")}
      >
        {t("days")}
      </div>
    </div>
  );
};

export default ChooserPronostic;
