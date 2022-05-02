import React, { useState } from "react";

const weatherHourContext = React.createContext();

export const WeatherHourContextProvider = ({ children }) => {
  const [weatherHour, setWeatherHour] = useState(null);

  return (
    <weatherHourContext.Provider value={{ weatherHour, setWeatherHour }}>
      {children}
    </weatherHourContext.Provider>
  );
};

export const useContextWeatherHour = () => {
  const context = React.useContext(weatherHourContext);

  if (context === undefined) {
    throw new Error("useContextWeather must be used within a CountProvider");
  }
  return context;
};

export default weatherHourContext;
