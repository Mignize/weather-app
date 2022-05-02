import React from "react";
import { getTranslationForCondition } from "../../../../../../services/index";
import { useTranslation } from "react-i18next";

import { WiRaindrop } from "react-icons/wi";

const WeatherTimes = (props) => {
  const [t] = useTranslation("global");

  const textConditionMorning = getTranslationForCondition(
    props.forecast.forecastday[0].hour[0].condition.text
  );

  return props.scales === "°C" ? (
    <div className="weather-hours">
      <div className="description-weather-info">
        {t("forecastTitle")} {props.location.name}:
      </div>
      <div className="container-weather-times">
        <div className="weather-times">
          <div className="container-weather-times-information">
            <div className="text-times">{t("morning")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[6].temp_c}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[6].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="chance-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[6].chance_of_rain}%
            </div>
          </div>
        </div>
        <div className="weather-times">
          <div className="container-weather-times-information">
            <div className="text-times">{t("afternoon")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[13].temp_c}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[13].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="chance-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[13].chance_of_rain}%
            </div>
          </div>
        </div>
        <div className="weather-times">
          <div className="container-weather-times-information">
            <div className="text-times">{t("evening")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[18].temp_c}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[18].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="chance-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[18].chance_of_rain}%
            </div>
          </div>
        </div>
        <div className="weather-times">
          <div className="container-weather-times-information border-none">
            <div className="text-times">{t("earlyMorning")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[0].temp_c}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[0].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="chance-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[0].chance_of_rain}%
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="weather-hours">
      <div className="description-weather-info">
        {t("forecastTitle")} {props.location.name}:
      </div>
      <div className="container-weather-times">
        <div className="weather-times">
          <div className="container-weather-times-information">
            <div className="text-times">{t("morning")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[6].temp_f}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[6].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="change-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[6].chance_of_rain}%
            </div>
          </div>
        </div>
        <div className="weather-times">
          <div className="container-weather-times-information">
            <div className="text-times">{t("afternoon")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[13].temp_f}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[13].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="change-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[13].chance_of_rain}%
            </div>
          </div>
        </div>
        <div className="weather-times">
          <div className="container-weather-times-information">
            <div className="text-times">{t("evening")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[18].temp_f}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[18].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="change-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[18].chance_of_rain}%
            </div>
          </div>
        </div>
        <div className="weather-times">
          <div className="container-weather-times-information border-none">
            <div className="text-times">{t("earlyMorning")}</div>
            <div className="temperature-times">
              {props.forecast.forecastday[0].hour[0].temp_f}°
            </div>
            <img
              className="icon-weather-times"
              src={props.forecast.forecastday[0].hour[0].condition.icon}
              alt={t(textConditionMorning)}
              title={t(textConditionMorning)}
            ></img>
            <div className="change-of-rain">
              <WiRaindrop className="rain-icon"></WiRaindrop>
              {props.forecast.forecastday[0].hour[0].chance_of_rain}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTimes;
