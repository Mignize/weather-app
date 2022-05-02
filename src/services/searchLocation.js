import axios from "axios";
import settings from "../settings.js";

export const findIpAndLocation = async () => {
  try {
    const { data } = await axios.get(
      settings.BASE_URL_API_IP +
        `check?access_key=${settings.API_ACESS_KEY_LOCATION}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
