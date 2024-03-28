import axios from "@/node_modules/axios/index";
import { apiConfig } from "@/config/config";

export const getCities = async (cityName : string) => {

    const url : string = `${apiConfig.baseApiUrl}geo/1.0/direct?q=${cityName}&limit=5&appid=${apiConfig.apiKey}`;

    return await axios.get(url);
}

