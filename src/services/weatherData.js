import axios from "axios";
import settings from "../settings.js";

export const getWeatherData = async (cityName) => {
  try {
    const { data } = await axios.get(
      settings.BASE_URL_API_WEATHER +
        `current.json?key=${settings.KEY_WEATHER}&q={${cityName}&aqi=no`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherForHour = async (cityName) => {
  try {
    const { data } = await axios.get(
      settings.BASE_URL_API_WEATHER +
        `forecast.json?key=${settings.KEY_WEATHER}&q={${cityName}&days=1&aqi=no&alerts=no`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherOfDays = async (cityName) => {
  try {
    const { data } = await axios.get(
      settings.BASE_URL_API_WEATHER +
        `forecast.json?key=${settings.KEY_WEATHER}&q={${cityName}&days=10&aqi=no&alerts=no`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
