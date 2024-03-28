'use client'

import { getCurrentWeather } from '@/services/WeatherService';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ICurrentWeather from '@/types/ICurrentWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Loader from '@/components/Loader';

const WeatherPage : React.FC = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const[isLoading, setLoading] = useState(true);
  const[weather, setWeather] = useState<ICurrentWeather>();

  useEffect(() => {
    getCurrentWeather(searchParams.get('place'))
    .then((res : any) => {
      setWeather(res.data);
      setLoading(false);
    })
    .catch((e : Error) => {
      router.push('/not-found');
    })
  }, [])

  return (
    <div className='w-full flex flex-column justify-center'>
      {isLoading ? <Loader/> : <CurrentWeather {...weather}/>}
    </div>
  )
}

export default WeatherPage;
