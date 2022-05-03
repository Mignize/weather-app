import React, { useEffect } from "react";
import { getWeatherData } from "../../../../services/weatherData";

const GetSearchInformation = () => {
  const [recentsSearch, setRecentsSearch] = React.useState(null);

  useEffect(() => {
    const getRecentSearches = async () => {
      const recentSearches = localStorage.getItem("searchs");
      const recentSearche = JSON.parse(recentSearches);
      let search = [];
      if (!recentsSearch && recentSearche) {
        recentSearche.map(async (recent) => {
          const weather = await getWeatherData(recent.name);
          const data = {
            name: weather.location.name,
            region: weather.location.region,
            tempC: weather.current.temp_c,
            tempF: weather.current.temp_f,
            icon: weather.current.condition.icon,
          };
          search.push(data);
        });
        setRecentsSearch(search);
      }
    };

    getRecentSearches();
  }, [recentsSearch]);
  return recentsSearch;
};

export default GetSearchInformation;
