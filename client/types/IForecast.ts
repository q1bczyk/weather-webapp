import ICurrentWeather from "./ICurrentWeather";

export default interface IForecast extends ICurrentWeather {
  date: string;
}
