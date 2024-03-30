export default interface ICurrentWeather {
  name: string;
  main: IMainWeatherPropeties;
  weather: IWeatherDescription[];
  wind: IWind;
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
