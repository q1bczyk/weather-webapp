import axios from "@/node_modules/axios/index";
import { apiConfig } from "@/config/config";

export const getCities = async (cityName : string) => {
    return await axios.get(`${apiConfig.baseApiUrl}direct?q=${cityName}&limit=5&appid=${apiConfig.apiKey}`)
}

