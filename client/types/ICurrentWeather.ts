import IMainWeatherPropeties from "./IMainWeatherPropeties";
import IWeatherDescription from "./IWeatherDescription";

export default interface ICurrentWeather{
    name : string,
    main : IMainWeatherPropeties,
    weather: IWeatherDescription[]
}