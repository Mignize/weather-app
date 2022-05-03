import { useTranslation } from "react-i18next";
import React from "react";
import { getDay } from "../../../../../../services/getDates";

import { useContextScales } from "../../../../../../context/scalesContext";
import { WiRaindrop, WiHumidity, WiMoonset, WiSunset } from "react-icons/wi";
import { RiWindyLine } from "react-icons/ri";

import { FaSun } from "react-icons/fa";

const InformationWeatherDays = (props) => {
  const { t } = useTranslation("global");

  const { information } = props;

  const { scales } = useContextScales();

  const date = new Date(information.date);

  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const dayNumber = date.getDate();

  const day = date.getDay();

  const dayName = getDay(day);

  const nightInformation = information.hour[19];

  const dayInformation = information.hour[12];

  return scales ? (
    <div className="container-weather-days">
      <div className="container-information-day">
        <div className="day">
          {dayName} {dayNumber} | {t("day")}
        </div>
        <div className="conditions-information-days">
          <div className="temperature-information-days">
            {dayInformation.temp_c}°
          </div>
          <img
            className="icon-information-days"
            src={dayInformation.condition.icon}
            alt={t(dayInformation.condition.text)}
            title={dayInformation.condition.text}
          ></img>
          <div className="weather-information-days">
            <div className="percentage-rain-days">
              <WiRaindrop
                className="icon rain-icon"
                title={t("rain")}
              ></WiRaindrop>
              <div className="percentage-rain-text-days">
                {dayInformation.chance_of_rain}%
              </div>
            </div>
            <div className="percentage-rain-days">
              <RiWindyLine
                className="wind-icon icon"
                title={t("wind")}
              ></RiWindyLine>
              <div className="wind-text-days">
                {dayInformation.wind_kph} km/h
              </div>
            </div>
          </div>
        </div>
        <div className="container-more-information-days">
          <div className="container-information-days border-bottom">
            <WiHumidity
              className="icon icon-more-information-dropdown"
              title={t("humidity")}
            ></WiHumidity>
            <div className="more-information-dropdown">
              <div className="text-more-information-dropdown">
                {t("humidity")}
              </div>
              <div className="value-more-information-dropdown">
                {dayInformation.humidity}%
              </div>
            </div>
          </div>
          <div className="container-information-days border-bottom">
            <FaSun
              className="icon icon-more-information-dropdown"
              title={t("UVIndex")}
            ></FaSun>
            <div className="more-information-dropdown">
              <div className="text-more-information-dropdown">
                {t("UVIndex")}
              </div>
              <div className="value-more-information-dropdown">
                {dayInformation.uv}/10
              </div>
            </div>
          </div>
          <div className="container-information-days margin-top-days">
            <WiSunset
              className="icon icon-more-information-dropdown"
              title={t("sunset")}
            ></WiSunset>
            <div className="more-information-dropdown">
              <div className="text-more-information-dropdown">
                {t("sunset")}
              </div>
              <div className="value-more-information-dropdown">
                {information.astro.sunset}
              </div>
            </div>
          </div>
          <div className="container-information-days margin-top-days">
            <WiMoonset
              className="icon icon-more-information-dropdown"
              title={t("moonset")}
            ></WiMoonset>
            <div className="more-information-days">
              <div className="text-more-information-days">{t("moonset")}</div>
              <div className="value-more-information-days">
                {information.astro.moonset}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-information-night">
        <div className="day">
          {dayName} {dayNumber} | {t("night")}
        </div>
        <div className="conditions-information-days">
          <div className="temperature-information-days">
            {nightInformation.temp_c}°
          </div>
          <img
            className="icon-information-days"
            src={nightInformation.condition.icon}
            alt={t(nightInformation.condition.text)}
            title={nightInformation.condition.text}
          ></img>
          <div className="weather-information-days">
            <div className="percentage-rain-days">
              <WiRaindrop
                className="icon rain-icon"
                title={t("rain")}
              ></WiRaindrop>
              <div className="percentage-rain-text-days">
                {nightInformation.chance_of_rain}%
              </div>
            </div>
            <div className="percentage-rain-days">
              <RiWindyLine
                className="wind-icon icon"
                title={t("wind")}
              ></RiWindyLine>
              <div className="wind-text-days">
                {nightInformation.wind_kph} km/h
              </div>
            </div>
          </div>
        </div>
        <div className="container-more-information-days">
          <div className="container-information-days border-bottom">
            <WiHumidity
              className="icon icon-more-information-dropdown"
              title={t("humidity")}
            ></WiHumidity>
            <div className="more-information-dropdown">
              <div className="text-more-information-dropdown">
                {t("humidity")}
              </div>
              <div className="value-more-information-dropdown">
                {nightInformation.humidity}%
              </div>
            </div>
          </div>
          <div className="container-information-days border-bottom">
            <FaSun
              className="icon icon-more-information-dropdown"
              title={t("UVIndex")}
            ></FaSun>
            <div className="more-information-dropdown">
              <div className="text-more-information-dropdown">
                {t("UVIndex")}
              </div>
              <div className="value-more-information-dropdown">
                {nightInformation.uv}/10
              </div>
            </div>
          </div>
          <div className="container-information-days margin-top-days">
            <WiSunset
              className="icon icon-more-information-dropdown"
              title={t("sunset")}
            ></WiSunset>
            <div className="more-information-dropdown">
              <div className="text-more-information-dropdown">
                {t("sunset")}
              </div>
              <div className="value-more-information-dropdown">
                {information.astro.sunset}
              </div>
            </div>
          </div>
          <div className="container-information-days margin-top-days">
            <WiMoonset
              className="icon icon-more-information-dropdown"
              title={t("moonset")}
            ></WiMoonset>
            <div className="more-information-days">
              <div className="text-more-information-days">{t("moonset")}</div>
              <div className="value-more-information-days">
                {information.astro.moonset}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default InformationWeatherDays;
