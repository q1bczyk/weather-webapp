import IForecast from "@/types/IForecast";

export const createForecastCollection = (forecastType : string, data : IForecast[]) : IForecast[] => {
    switch(forecastType)
    {
        case 'hourly':
            return getHourlyCollection(data);
        default:
            return getDayliCollection(data);
    }
} 

const getHourlyCollection = (data : IForecast[]) : IForecast[] => {
    const arr = data.slice(1, 6);

    arr.map((item : IForecast) => {
        item.date = convertDate(item.date, 'hourly');
    })

    return arr;
}

const getDayliCollection = (data : IForecast[]) : IForecast[] => {
    const arr = data.filter((item : IForecast, index : number) => index % 7 === 0 && index !== 0);

    arr.map((item : IForecast) => {
        item.date = convertDate(item.date, 'dayli');
    })

    return arr
}

const convertDate = (dateStr : string, forecastType : string) : string => {
    const date : Date = new Date(dateStr);
    switch(forecastType)
    {
        case 'hourly':
            return `${date.getHours()}:00`;
        
        default:
            let day : string = date.getDate().toString();
            let mounth : string = (date.getMonth() + 1).toString();
            
            if(day.length === 1)
                day = '0' + day;
            
            if(mounth.length === 1)
                mounth = '0' + mounth;    

            return `${day}.${mounth}`
    }
}