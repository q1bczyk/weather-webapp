import IForecast from "@/types/IForecast";

export const mapForecastData = (data : any) : IForecast[] => {
    
    const forecasts: IForecast[] = data.map((item: any) => ({
        main: item.main,
        weather: item.weather,
        wind: item.wind,
        date: item.dt_txt
    }));

    return forecasts;
}