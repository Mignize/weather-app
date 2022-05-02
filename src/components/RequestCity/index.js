import React, { useEffect, useState } from "react";
import Search from "../Navigation/Search/index";
import "../../css/RequestCity.css";

import { getInformationAboutCountry } from "../../services/searchLocation";
import { findLocation } from "../../services/searchLocation";

const RequestCity = (props) => {
  const [country, setCountry] = useState("");

  const [city, setCity] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      if (country) {
        const newInformation = await getInformationAboutCountry(country);
        if (newInformation && country && city) {
          props.setOtherLocation({
            countryName: country,
            countryCode: newInformation[0].cca2,
            capital: newInformation[0].capital[0],
            city,
          });
        }
      }
    };

    getCountry();
  }, [city, country, props]);

  const showUserPermissions = () => {
    findLocation(props.setUserLocation);
  };

  return (
    <div className="center">
      <div className="search-request">
        <div className="text-request">
          To be able to go to the application you must search for a city or give
          your permission to obtain your location
        </div>
        <div className="request">
          <Search
            withoutLocation={true}
            country={country}
            setCountry={setCountry}
            setCity={setCity}
          ></Search>
          <div className="or">or</div>
          <button className="btn-permissions" onClick={showUserPermissions}>
            Give permission for get location
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCity;
