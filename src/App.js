import React, { useEffect, useState } from "react";
import "./App.css";

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
import RequestCity from "./components/RequestCity/index";

import {
  getCountryByCoords,
  getInformationAboutCountryByCode,
} from "./services/searchLocation";

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

  const [otherLocation, setOtherLocation] = useState("");

  const [userLocation, setUserLocation] = useState("");

  const [location, setLocation] = useState("");

  useEffect(() => {
    const saveLocation = async () => {
      const cookieLocation = cookies.get("location");
      if (!cookieLocation) {
        if (userLocation) {
          const coords = await getCountryByCoords(userLocation);
          const information = await getInformationAboutCountryByCode(
            coords[0].country
          );
          const locationInformation = {
            country: information[0].name.common,
            countryCode: coords[0].country,
            capital: information[0].capital[0],
            city: coords[0].name,
          };
          setLocation(locationInformation);
          cookies.set("location", locationInformation, {
            maxAge: 60 * 60 * 24 * 30,
          });
        } else if (!userLocation && otherLocation) {
          const locationInformation = {
            country: otherLocation.countryName,
            countryCode: otherLocation.countryCode,
            capital: otherLocation.capital,
            city: otherLocation.city,
          };
          setLocation(locationInformation);
          cookies.set("location", locationInformation, {
            maxAge: 60 * 60 * 24 * 30,
          });
        }
      }
    };
    saveLocation();
  }, [otherLocation, userLocation]);

  const [language, setLanguage] = useState("en");

  return (
    <>
      {location ? (
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
      ) : (
        <LanguageContextProvider>
          <I18nextProvider i18n={i18next}>
            <ScalesContextProvider>
              <WeatherDaysContextProvider>
                <WeatherHourContextProvider>
                  <RequestCity
                    otherLocation={otherLocation}
                    setOtherLocation={setOtherLocation}
                    userLocation={userLocation}
                    setUserLocation={setUserLocation}
                  ></RequestCity>
                </WeatherHourContextProvider>
              </WeatherDaysContextProvider>
            </ScalesContextProvider>
          </I18nextProvider>
        </LanguageContextProvider>
      )}
    </>
  );
}

export default App;
