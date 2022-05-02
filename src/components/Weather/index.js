import React, { useState } from "react";
import "../../css/WeatherInfo.css";
import NoticeClimate from "./NoticeClimate/NoticeClimate";

import WeatherInfo from "./WeatherInfo/WeatherInfo";
import ChooserPronostic from "./ChooserPronostic";

const WeatherContent = () => {
  const [forecast, setForecast] = useState("today");
  return (
    <div>
      <nav className="container-chooser">
        <ChooserPronostic
          forecast={forecast}
          setForecast={setForecast}
        ></ChooserPronostic>
      </nav>
      <div className="wrapper">
        <div className="weather-info">
          <WeatherInfo forecast={forecast}></WeatherInfo>
        </div>
        <div className="notice-climate">
          <NoticeClimate></NoticeClimate>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
