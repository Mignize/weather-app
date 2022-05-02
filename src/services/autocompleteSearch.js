import axios from "axios";
import settings from "../settings.js";

const getSearchResults = async (search) => {
  try {
    const data = await axios.get(
      settings.BASE_URL_API_WEATHER +
        `search.json?key=${settings.KEY_WEATHER}&q=${search}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getSearchResults;
