'use client'

import { getCurrentWeather } from '@/services/WeatherService';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

const WeatherPage : React.FC = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const[weather, setWeather] = useState<any>(null);

  useEffect(() => {
    getCurrentWeather(searchParams.get('place'))
    .then((res : any) => {
      setWeather(res.data);
      console.log(res.data);
    })
    .catch((e : Error) => {
      router.push('/not-found');
      console.log(e);
    })
  }, [])

  return (
    <div>
      <CurrentWeather/>
    </div>
  )
}

export default WeatherPage;
