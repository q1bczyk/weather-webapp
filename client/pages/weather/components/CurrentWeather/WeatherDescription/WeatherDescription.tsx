'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { getTime } from '@/utils/todaysDateConventer.ts';
import ICurrentWeather from '@/types/ICurrentWeather';

const WeatherDescription : React.FC<ICurrentWeather> = (props) => {

  const[time, setTime] = useState<string>(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);

  }, [])

  return (
    <div className='flex flex-col justify-center items-center w-1/2'>
      <div className='flex flex-col items-center'>
        <h2 className='text-5xl'>{props.name}</h2>
        <h5 className='text-lg w-full text-center'>{time}</h5>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='p-5' src={`/${props.weather[0].icon}.png`} width='200' height='200' alt=''/>
        <h2>{props.weather[0].description}</h2>
      </div>
    </div>
  )
}

export default WeatherDescription;
