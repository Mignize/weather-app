import React, { useState, useEffect } from "react";
import "css/SelectorScalesTemperature.css";
import cookies from "cookie.js";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import { useContextScales } from "context/scalesContext";

import { useTranslation } from "react-i18next";
import { useContextLanguage } from "context/languageContext";

const SelectorScalesTemperature = (props) => {
  const [dropDown, setOpenDropDown] = useState(false);

  const [countryCode, setCountryCode] = useState("");

  const { scales, setScales } = useContextScales();

  const { language, setLanguage } = useContextLanguage();

  const { t, i18n } = useTranslation("global");
  useEffect(() => {
    const cookieLocation = cookies.get("location");
    if (cookieLocation) {
      setCountryCode(cookieLocation.countryCode);
    }
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const changeScalesTemperature = (selection) => {
    setScales(selection);
  };

  const openDropDown = () => {
    if (!dropDown) {
      setOpenDropDown(true);
    } else {
      setOpenDropDown(false);
    }
  };

  const changeLanguage = (selection) => {
    setLanguage(selection);
  };

  return (
    <div className="container-selection">
      <div className="container-selection-information" onClick={openDropDown}>
        <FaGlobeAmericas className="icon-world"></FaGlobeAmericas>
        <span className="country-code">{countryCode}</span>
        <span className="temperature">{scales}</span>
        {!dropDown ? (
          <RiArrowDownSLine className="icon-dropdown"></RiArrowDownSLine>
        ) : (
          <RiArrowUpSLine className="icon-dropdown"></RiArrowUpSLine>
        )}
      </div>
      <div className={dropDown ? "dropdown" : "dropdown hidden"}>
        <div className="selector-description">{t("language")}:</div>
        <div className="container-language">
          <button
            className={
              language === "en"
                ? "change-language btn active"
                : "change-language btn"
            }
            onClick={() => changeLanguage("en")}
          >
            en
          </button>
          <button
            className={
              language === "es"
                ? "change-language btn active"
                : "change-language btn"
            }
            onClick={() => changeLanguage("es")}
          >
            es
          </button>
        </div>
        <div className="selector-description">{t("scales")}:</div>
        <div className="container-scales">
          <button
            className={scales === "°C" ? "btn active" : "btn"}
            onClick={() => changeScalesTemperature("°C")}
          >
            °C
          </button>
          <button
            className={scales === "°F" ? "btn active" : "btn"}
            onClick={() => changeScalesTemperature("°F")}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectorScalesTemperature;
