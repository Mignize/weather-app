import React from "react";
import { useTranslation } from "react-i18next";
import { FaTemperatureHigh, FaCloudRain, FaSun } from "react-icons/fa";

import { RiWindyLine } from "react-icons/ri";
import { WiHumidity, WiMoonAltWaxingCrescent1 } from "react-icons/wi";
import { CgCompressV } from "react-icons/cg";

import { MdVisibility } from "react-icons/md";
import { getTranslationForMoonPhase } from "services/index";

const MoreInformation = (props) => {
  const [t] = useTranslation("global");

  const textMoonPhase = getTranslationForMoonPhase(
    props.forecast.forecastday[0].astro.moon_phase
  );

  return props.scales === "°C" ? (
    <>
      <div className="container-thermal-sensation">
        <div className="thermal-sensation">{props.current.feelslike_c}°</div>
        <span>{t("thermalSensation")}</span>
      </div>
      <div className="container-more-information">
        <div className="more-information margin-right">
          <FaTemperatureHigh
            className="icon-information"
            title={t("temperature")}
          ></FaTemperatureHigh>
          <div className="information-text">{t("maxMin")}</div>
          <div>
            {props.forecast.forecastday[0].day.maxtemp_c}°/
            {props.forecast.forecastday[0].day.mintemp_c}°
          </div>
        </div>
        <div className="more-information margin-left">
          <RiWindyLine
            className="icon-information"
            title={t("wind")}
          ></RiWindyLine>
          <div className="information-text">{t("wind")}</div>
          <div>{props.current.wind_kph} km/h</div>
        </div>
        <div className="more-information margin-right">
          <WiHumidity
            className="icon-information"
            title={t("humidity")}
          ></WiHumidity>
          <div className="information-text">{t("humidity")}</div>
          <div>{props.current.humidity}%</div>
        </div>
        <div className="more-information margin-left">
          <FaCloudRain
            className="icon-information"
            title={t("precipitation")}
          ></FaCloudRain>
          <div className="information-text">{t("precipitation")}</div>
          <div>{props.current.precip_in} in</div>
        </div>
        <div className="more-information margin-right">
          <CgCompressV
            className="icon-information"
            title={t("pressure")}
          ></CgCompressV>
          <div className="information-text">{t("pressure")}</div>
          <div>{props.current.pressure_mb} mb</div>
        </div>
        <div className="more-information margin-left">
          <FaSun className="icon-information" title={t("UVIndex")}></FaSun>
          <div className="information-text">{t("UVIndex")}</div>
          <div>{props.current.uv} de 10</div>
        </div>
        <div className="more-information margin-right">
          <MdVisibility
            className="icon-information"
            title={t("visibility")}
          ></MdVisibility>
          <div className="information-text">{t("visibility")}</div>
          <div>{props.current.vis_km} km</div>
        </div>
        <div className="more-information margin-left">
          <WiMoonAltWaxingCrescent1
            className="icon-information"
            title={t("moonPhase")}
          ></WiMoonAltWaxingCrescent1>
          <div className="information-text">{t("moonPhase")}</div>
          <div>{t(`${textMoonPhase}`)}</div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="container-thermal-sensation">
        <div className="thermal-sensation">{props.current.feelslike_f}°</div>
        <span>{t("thermalSensation")}</span>
      </div>
      <div className="container-more-information">
        <div className="more-information margin-right">
          <FaTemperatureHigh
            className="icon-information"
            title={t("temperature")}
          ></FaTemperatureHigh>
          <div className="information-text">{t("maxMin")}</div>
          <div>
            {props.forecast.forecastday[0].day.maxtemp_f}°/
            {props.forecast.forecastday[0].day.mintemp_f}°
          </div>
        </div>
        <div className="more-information margin-left">
          <RiWindyLine
            className="icon-information"
            title={t("wind")}
          ></RiWindyLine>
          <div className="information-text">{t("wind")}</div>
          <div>{props.current.wind_kph} km/h</div>
        </div>
        <div className="more-information margin-right">
          <WiHumidity
            className="icon-information"
            title={t("humidity")}
          ></WiHumidity>
          <div className="information-text">{t("humidity")}</div>
          <div>{props.current.humidity}%</div>
        </div>
        <div className="more-information margin-left">
          <FaCloudRain
            className="icon-information"
            title={t("precipitation")}
          ></FaCloudRain>
          <div className="information-text">{t("precipitation")}</div>
          <div>{props.current.precip_in} in</div>
        </div>
        <div className="more-information margin-right">
          <CgCompressV
            className="icon-information"
            title={t("pressure")}
          ></CgCompressV>
          <div className="information-text">{t("pressure")}</div>
          <div>{props.current.pressure_mb} mb</div>
        </div>
        <div className="more-information margin-left">
          <FaSun className="icon-information" title={t("UVIndex")}></FaSun>
          <div className="information-text">{t("UVIndex")}</div>
          <div>{props.current.uv} de 10</div>
        </div>
        <div className="more-information margin-right">
          <MdVisibility
            className="icon-information"
            title={t("visibility")}
          ></MdVisibility>
          <div className="information-text">{t("visibility")}</div>
          <div>{props.current.vis_km} km</div>
        </div>
        <div className="more-information margin-left">
          <WiMoonAltWaxingCrescent1
            className="icon-information"
            title={t("moonPhase")}
          ></WiMoonAltWaxingCrescent1>
          <div className="information-text">{t("moonPhase")}</div>
          <div>{t(`${textMoonPhase}`)}</div>
        </div>
      </div>
    </>
  );
};

export default MoreInformation;
