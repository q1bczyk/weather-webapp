import axios, { AxiosResponse } from "@/node_modules/axios/index";
import { apiConfig } from "@/config/config";
import ICurrentWeather from "@/types/ICurrentWeather";
import IForecast from "@/types/IForecast";

const apiUrl : string = `${apiConfig.baseApiUrl}data/2.5/`;

export const getForecast = async (cityName : string, unit : string) : Promise<AxiosResponse<IForecast>> => {

    const url : string = `${apiUrl}forecast?q=${cityName}&appid=${apiConfig.apiKey}&units=${unit}`;

    return await axios.get(url);
}

export const getCurrentWeather = async (cityName : string, unit : string) : Promise<AxiosResponse<ICurrentWeather>> => {
    
    const url = `${apiUrl}weather?q=${cityName}&appid=${apiConfig.apiKey}&units=${unit}&lang=pl`;

    return await axios.get(url);
} 
