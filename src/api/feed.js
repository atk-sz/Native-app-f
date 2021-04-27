import axios from "axios";
import config from '../../config'

export const getFeed = async (title,count) => {
  return await axios.get(`${config.EXPO_BACKEND_API}search/${title}/${count}`);
};

