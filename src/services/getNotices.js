import axios from "axios";
import settings from "../settings.js";

const getNotices = async (language) => {
  let content = "";
  if (language === "es") {
    content = "calentamiento global";
  } else {
    content = "global warming";
  }
  try {
    const data = await axios.get(
      settings.BASE_URL_API_NOTICE +
        `?access_key=${settings.API_ACESS_NOTICE_KEY}&search=${content}&keywords=${content}&languages=${language}&limit=40`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getNotices;
