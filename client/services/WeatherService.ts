import axios, { AxiosResponse } from "@/node_modules/axios/index";
import { apiConfig } from "@/config/config";
import ICurrentWeather from "@/types/ICurrentWeather";

const apiUrl : string = `${apiConfig.baseApiUrl}data/2.5/`;

export const getForecast = async (cityName : string) => {

    const url : string = `${apiUrl}forecast?q=${cityName}&appid=${apiConfig.apiKey}&units=metric`;

    return await axios.get(url);
}

export const getCurrentWeather = async (cityName : string) : Promise<AxiosResponse<ICurrentWeather>> => {
    
    const url = `${apiUrl}weather?q=${cityName}&appid=${apiConfig.apiKey}&units=metric&lang=pl`;

    return await axios.get(url);
} 
