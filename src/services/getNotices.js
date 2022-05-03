import axios from "axios";
import settings from "../settings.js";

const getNotices = async (language, countryCode) => {
  let content = "";
  if (language === "es") {
    content = "calentamiento global";
  } else {
    content = "global warming";
  }
  
  try {
    const data = await axios.get(
      settings.BASE_URL_API_NOTICE +
        `?q=${content}&countries=${countryCode}&page_size=6&lang=${language}`, {
          headers: {
            "x-api-key": settings.API_ACESS_NOTICE_KEY
          }
        }
    );
    return data.data.articles;
  } catch (err) {
    console.log(err);
  }
};

export default getNotices;
