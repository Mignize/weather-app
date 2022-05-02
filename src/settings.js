const settings = {
  BASE_URL_API_WEATHER: "http://api.weatherapi.com/v1/",
  BASE_URL_API_IP: "http://api.ipstack.com/",
  BASE_URL_API_NOTICE: "http://api.mediastack.com/v1/news",
  BASE_URL_API_COUNTRY: "https://restcountries.com/v3.1/",
  BASE_URL_API_GEOLOCATION: "http://api.openweathermap.org/geo/1.0/reverse?",
  API_WEATHER_KEY: process.env.REACT_APP_API_WEATHER_KEY,
  API_ACESS_NOTICE_KEY: process.env.REACT_APP_API_ACCESS_NOTICE_KEY,
  API_GEOLOCATION_KEY: process.env.REACT_APP_API_GEOLOCATION_KEY
};

export default settings;
