import React from "react";
import "css/Navigation.css";
import Search from "./Search/index";
import SelectorScalesTemperature from "components/SelectorScalesTemperature/index";

const Navigation = (props) => {
  return (
    <nav className="nav">
      <ul>
        <a className="logo" href="/">
          WeatherApp
        </a>
        <Search></Search>
        <SelectorScalesTemperature
          language={props.language}
          setLanguage={props.setLanguage}
        ></SelectorScalesTemperature>
      </ul>
    </nav>
  );
};

export default Navigation;
