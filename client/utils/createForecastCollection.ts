import IForecast from "@/types/IForecast";
import format from 'date-fns';

export const createForecastCollection = (forecastType : string, data : IForecast[]) : IForecast[] => {
    switch(forecastType){
        case 'hourly':
            convertDate('2024-03-29 12:00:00', 'hourly')
            return getHourlyCollection(data);
        case 'dayli':
            return getDayliCollection(data);
    }
} 

const getHourlyCollection = (data : IForecast[]) : IForecast[] => {
    return data.slice(1, 6);
}

const getDayliCollection = (data : IForecast[]) : IForecast[] => {
    return data.filter((item : IForecast, index : number) => index % 7 === 0 && index !== 0);
}

// const convertDate = (dateStr : string, forecastType : string) => {
//     const date : Date = new Date(dateStr);
//     console.log(format(date, "HH:mm"));
//     switch(forecastType){
//         case 'hourly':

//     }
// }