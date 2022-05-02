import React, { useEffect, useState } from "react";
import "./App.css";
import { findIpAndLocation } from "./services/searchLocation";

import cookies from "./cookie";
import WeatherContent from "./components/Weather/index";
import Navigation from "./components/Navigation/index";

import { WeatherHourContextProvider } from "./context/weatherHourContext";
import { ScalesContextProvider } from "./context/scalesContext";
import { WeatherDaysContextProvider } from "./context/weatherDaysContext";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import globalEs from "./translations/es/global.json";

import globalEn from "./translations/en/global.json";
import { LanguageContextProvider } from "./context/languageContext";

function App() {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      es: {
        global: globalEs,
      },
      en: {
        global: globalEn,
      },
    },
  });

  useEffect(() => {
    const saveLocation = async () => {
      const cookieLocation = cookies.get("location");
      if (!cookieLocation) {
        const location = await findIpAndLocation();
        cookies.set(
          "location",
          {
            country: location.country_name,
            countryCode: location.country_code,
            capital: location.location.capital,
            city: location.city,
          },
          { maxAge: 60 * 60 * 24 * 30 }
        );
      }
    };
    saveLocation();
  }, []);

  const [language, setLanguage] = useState("en");

  return (
    <>
      <LanguageContextProvider>
        <I18nextProvider i18n={i18next}>
          <ScalesContextProvider>
            <WeatherDaysContextProvider>
              <WeatherHourContextProvider>
                <Navigation
                  language={language}
                  setLanguage={setLanguage}
                ></Navigation>
                <WeatherContent></WeatherContent>
              </WeatherHourContextProvider>
            </WeatherDaysContextProvider>
          </ScalesContextProvider>
        </I18nextProvider>
      </LanguageContextProvider>
    </>
  );
}

export default App;
