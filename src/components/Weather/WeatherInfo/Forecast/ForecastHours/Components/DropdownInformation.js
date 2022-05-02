import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useContextScales } from "../../../../../../context/scalesContext";

import { WiRaindrop, WiHumidity } from "react-icons/wi";
import { RiWindyLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaTemperatureHigh, FaSun, FaCloud, FaCloudRain } from "react-icons/fa";

const DropdownInformation = (props) => {
  const [t] = useTranslation("global");

  const { scales } = useContextScales();

  const [dropDown, setDropDown] = useState(false);

  const { index, hour, information, textCondition } = props;
  const openDropDown = () => {
    if (!dropDown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  return scales === "°C" ? (
    <>
      <div
        className="container-information-dropdown"
        id={`dropdown-${index}`}
        onClick={openDropDown}
      >
        <div className="weather-hour">{hour}</div>
        <div className="weather-temperature">{information.temp_c}°</div>
        <div className="container-condition-dropdown">
          <img
            className="icon-condition"
            src={information.condition.icon}
            title={t(information.condition.text)}
            alt={t(information.condition.text)}
          ></img>
          <div className="text-condition">{t(textCondition)}</div>
        </div>
        <div className="information-dropdown">
          <div className="rain-percentage">
            <WiRaindrop
              className="rain-icon icon"
              title={t("rain")}
            ></WiRaindrop>
            {information.chance_of_rain}%
          </div>
          <div className="wind-speed">
            <RiWindyLine
              className="wind-icon icon"
              title={t("wind")}
            ></RiWindyLine>
            {information.wind_kph} km/h
          </div>
        </div>
        {!dropDown ? (
          <RiArrowDownSLine className="icon-dropdown-weather"></RiArrowDownSLine>
        ) : (
          <RiArrowUpSLine className="icon-dropdown-weather"></RiArrowUpSLine>
        )}
      </div>
      <div
        className={
          dropDown
            ? "container-more-information-dropdown"
            : "container-more-information-dropdown hidden"
        }
      >
        <div className="more-information-container">
          <FaTemperatureHigh
            className="icon icon-more-information-dropdown"
            title={t("temperature")}
          ></FaTemperatureHigh>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("thermalSensation")}
            </div>
            <div className="value-more-information-dropdown">
              {information.feelslike_c}°
            </div>
          </div>
        </div>
        <div className="more-information-container">
          <RiWindyLine
            className="icon icon-more-information-dropdown"
            title={t("wind")}
          ></RiWindyLine>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">{t("wind")}</div>
            <div className="value-more-information-dropdown">
              {information.wind_kph} km/h
            </div>
          </div>
        </div>
        <div className="more-information-container">
          <WiHumidity
            className="icon icon-more-information-dropdown icon-humidity"
            title={t("humidity")}
          ></WiHumidity>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("humidity")}
            </div>
            <div className="value-more-information-dropdown">
              {information.humidity}%
            </div>
          </div>
        </div>
        <div className="more-information-container margin-top">
          <FaSun
            className="icon icon-more-information-dropdown"
            title={t("UVIndex")}
          ></FaSun>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">{t("UVIndex")}</div>
            <div className="value-more-information-dropdown">
              {information.uv}/10
            </div>
          </div>
        </div>
        <div className="more-information-container margin-top">
          <FaCloud
            className="icon icon-more-information-dropdown"
            title={t("cloudiness")}
          ></FaCloud>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("cloudiness")}
            </div>
            <div className="value-more-information-dropdown">
              {information.cloud}%
            </div>
          </div>
        </div>
        <div className="more-information-container margin-top">
          <FaCloudRain
            className="icon icon-more-information-dropdown"
            title={t("precipitation")}
          ></FaCloudRain>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("precipitation")}
            </div>
            <div className="value-more-information-dropdown">
              {information.precip_mm} mm
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>
      <div
        className="container-information-dropdown"
        id={`dropdown-${index}`}
        onClick={openDropDown}
      >
        <div className="weather-hour">{hour}</div>
        <div className="weather-temperature">{information.temp_f}°</div>
        <div className="container-condition-dropdown">
          <img
            className="icon-condition"
            src={information.condition.icon}
            title={t(information.condition.text)}
            alt={t(information.condition.text)}
          ></img>
          <div className="text-condition">{t(textCondition)}</div>
        </div>
        <div className="information-dropdown">
          <div className="rain-percentage">
            <WiRaindrop
              className="rain-icon icon"
              title={t("rain")}
            ></WiRaindrop>
            {information.chance_of_rain}%
          </div>
          <div className="wind-speed">
            <RiWindyLine
              className="wind-icon icon"
              title={t("wind")}
            ></RiWindyLine>
            {information.wind_kph} km/h
          </div>
        </div>
        {!dropDown ? (
          <RiArrowDownSLine className="icon-dropdown-weather"></RiArrowDownSLine>
        ) : (
          <RiArrowUpSLine className="icon-dropdown-weather"></RiArrowUpSLine>
        )}
      </div>
      <div
        className={
          dropDown
            ? "container-more-information-dropdown"
            : "container-more-information-dropdown hidden"
        }
      >
        <div className="more-information-container">
          <FaTemperatureHigh
            className="icon icon-more-information-dropdown"
            title={t("temperature")}
          ></FaTemperatureHigh>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("thermalSensation")}
            </div>
            <div className="value-more-information-dropdown">
              {information.feelslike_f}°
            </div>
          </div>
        </div>
        <div className="more-information-container">
          <RiWindyLine
            className="icon icon-more-information-dropdown"
            title={t("wind")}
          ></RiWindyLine>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">{t("wind")}</div>
            <div className="value-more-information-dropdown">
              {information.wind_kph} km/h
            </div>
          </div>
        </div>
        <div className="more-information-container">
          <WiHumidity
            className="icon icon-more-information-dropdown icon-humidity"
            title={t("humidity")}
          ></WiHumidity>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("humidity")}
            </div>
            <div className="value-more-information-dropdown">
              {information.humidity}%
            </div>
          </div>
        </div>
        <div className="more-information-container margin-top">
          <FaSun
            className="icon icon-more-information-dropdown"
            title={t("UVIndex")}
          ></FaSun>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">{t("UVIndex")}</div>
            <div className="value-more-information-dropdown">
              {information.uv}/10
            </div>
          </div>
        </div>
        <div className="more-information-container margin-top">
          <FaCloud
            className="icon icon-more-information-dropdown"
            title={t("cloudiness")}
          ></FaCloud>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("cloudiness")}
            </div>
            <div className="value-more-information-dropdown">
              {information.cloud}%
            </div>
          </div>
        </div>
        <div className="more-information-container margin-top">
          <FaCloudRain
            className="icon icon-more-information-dropdown"
            title={t("precipitation")}
          ></FaCloudRain>
          <div className="more-information-dropdown">
            <div className="text-more-information-dropdown">
              {t("precipitation")}
            </div>
            <div className="value-more-information-dropdown">
              {information.precip_mm} mm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownInformation;
