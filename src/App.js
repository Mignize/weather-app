import React from "react";
import "./App.css";
import Navigation from "./components/Navigation.js";

function App() {
  const changeBackground = () => {
    const body = document.body;
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 18) {
      body.setAttribute("class", "night");
    } else if (hour >= 12) {
      body.setAttribute("class", "sunset");
    } else if (hour >= 0) {
      body.setAttribute("class", "sky");
    }
  };
  changeBackground();
  return (
    <>
      <Navigation></Navigation>
    </>
  );
}

export default App;

