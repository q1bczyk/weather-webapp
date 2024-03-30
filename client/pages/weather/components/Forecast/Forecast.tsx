'use client'

import { getForecast } from '@/services/WeatherService';
import IForecast from '@/types/IForecast';
import { createForecastCollection } from '@/utils/createForecastCollection';
import { mapForecastData } from '@/utils/mapForecastData';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ForecastControls from './ForecastControls/ForecastControls';
import ForecastItem from './ForecastItem/ForecastItem';

const Forecast : React.FC<{cityName : string, unit : string}> = (props) => {
  
  const searchParams = useSearchParams();

  const[data, setData] = useState<any[]>([]);
  const[forecast, setForecast] = useState<IForecast[]>([]);
  const[forecastType, setForecastType] = useState<string>('hourly');

  const createCollection = (data : any) : IForecast[] => {
    const mappedData : IForecast[] = mapForecastData(data);
    const forecastCollection : IForecast[] = createForecastCollection(forecastType, mappedData);
    return forecastCollection;
  }

  useEffect(() => {
    getForecast(props.cityName, props.unit)
        .then(res => {
            setData(res.data.list);
            setForecast(createCollection(res.data.list));
        })
        .catch((e : Error) => {
            console.log(e);
        })
  }, [searchParams.get('place')])  
  
  useEffect(() => {
    setForecast(createCollection(data));
  }, [forecastType])

  return (
    <div className='w-full sm:w-11/12 md:w-8/12 lg:w-11/12 mt-10 mb-10 w-10/12'>
      <ForecastControls 
        forecastType={forecastType}
        onChangeForecastType={(type : string) => setForecastType(type)}  
      />
      <div className='w-full flex flex-col xl:flex-row justify-between mt-10'>
        {forecast.map((item : IForecast) => (
          <ForecastItem {...item}/>
        ))}
      </div>
    </div>
  )
}

export default Forecast;
