'use client'

import { getForecast } from '@/services/WeatherService';
import IForecast from '@/types/IForecast';
import { createForecastCollection } from '@/utils/createForecastCollection';
import React, { useEffect, useState } from 'react'

const Forecast : React.FC<{cityName : string, unit : string}> = (props) => {
  
  const[forecast, setForecast] = useState<IForecast[]>([]);

  useEffect(() => {
    getForecast(props.cityName, props.unit)
        .then(res => {
            setForecast(createForecastCollection('hourly', res.data.list));
        })
        .catch((e : Error) => {
            console.log(e);
        })
  }, [])  
  
  return (
    <div>
      {forecast.map((item : IForecast) => (
        <h2>{item.dt_txt}</h2>
      ))}
    </div>
  )
}

export default Forecast;
