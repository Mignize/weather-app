import React, { useState } from "react";

const weatherDaysContext = React.createContext();

export const WeatherDaysContextProvider = ({ children }) => {
  const [weatherDays, setWeatherDays] = useState(null);

  return (
    <weatherDaysContext.Provider value={{ weatherDays, setWeatherDays }}>
      {children}
    </weatherDaysContext.Provider>
  );
};

export const useContextWeatherDays = () => {
  const context = React.useContext(weatherDaysContext);

  if (context === undefined) {
    throw new Error("useContextWeather must be used within a CountProvider");
  }
  return context;
};

export default weatherDaysContext;
