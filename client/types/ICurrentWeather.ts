export default interface ICurrentWeather {
  name: string;
  main: IMainWeatherPropeties;
  weather: IWeatherDescription[];
  wind: IWind;
  sys : ISys;
}

interface IMainWeatherPropeties {
  humidity: number;
  pressure: number;
  temp: number;
}

interface IWeatherDescription {
  description: string;
  icon: string;
}

interface IWind {
  speed: number;
  deg: number;
}

interface ISys{
  country: string,
  sunrise : number,
  sunset : number,
}
