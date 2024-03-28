import IMainWeatherPropeties from "./IMainWeatherPropeties";
import IWeatherDescription from "./IWeatherDescription";
import IWind from "./IWind";

export default interface ICurrentWeather{
    name : string,
    main : IMainWeatherPropeties,
    weather: IWeatherDescription[]
    wind : IWind
}