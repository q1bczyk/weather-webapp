'use client';

import ICurrentWeather from '@/types/ICurrentWeather';
import { fetchIcon } from '@/utils/fetechIcon';
import React, { useEffect } from 'react'

const CurrentWeather : React.FC<ICurrentWeather> = (props) => {
  
  return (
    <div className='w-11/12 flex justify-center items-center h-90 p-10'>
      <div>
      <h2 className='text-5xl'>{props.name}</h2>
      {props.weather.map(item => (
        <div className='flex items-center'>
          <h2>{item.description}</h2>
          <img src={fetchIcon(item.icon)}></img>
        </div>
      ))}
      </div>
      <div>
        <h2>{props.main.temp}</h2>
        <h2>{props.main.pressure}</h2>
        <h2>{props.main.humidity}</h2>
      </div>
    </div>
  )
}

export default CurrentWeather;
