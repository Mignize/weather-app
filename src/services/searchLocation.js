import axios from "axios";
import settings from "settings";

export const findLocation = (setUserLocation) => {
  const success = (pos) => {
    const position = pos.coords;
    const coords = {
      latitude: position.latitude,
      longitude: position.longitude,
    };
    setUserLocation(coords);
    return coords;
  };

  const error = (err) => {
    return err;
  };
  const result = navigator.geolocation.getCurrentPosition(success, error);
  return result;
};

export const getInformationAboutCountry = async (country) => {
  try {
    const { data } = await axios.get(
      `${settings.BASE_URL_API_COUNTRY}/name/${country}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getInformationAboutCountryByCode = async (countryCode) => {
  try {
    const { data } = await axios.get(
      `${settings.BASE_URL_API_COUNTRY}/alpha/${countryCode}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCountryByCoords = async (coords) => {
  try {
    const { data } = await axios.get(
      `${settings.BASE_URL_API_GEOLOCATION}lat=${coords.latitude}&lon=${coords.longitude}&appid=${settings.API_GEOLOCATION_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
