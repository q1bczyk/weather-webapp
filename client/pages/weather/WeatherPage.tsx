'use client'

import { getCurrentWeather } from '@/services/WeatherService';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ICurrentWeather from '@/types/ICurrentWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Loader from '@/components/Loader';
import CitySearch from '@/components/CitySearch/CitySearch';
import { useDispatch, useSelector } from '@/node_modules/react-redux/dist/react-redux';
import { setLoading } from '@/redux/actions/searchCityAction';

const WeatherPage : React.FC = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const[weather, setWeather] = useState<ICurrentWeather>();
  const unit: string = useSelector(state => state.searchCity.unit);
  const isLoading : boolean = useSelector(state => state.searchCity.isLoading);

  useEffect(() => {
    
    getCurrentWeather(searchParams.get('place'), unit)
    .then((res : any) => {
      setWeather(res.data);
      dispatch(setLoading(false));
    })
    .catch((e : Error) => {
      router.push('/not-found');
    })
  }, [searchParams.get('place')])

  return (
    <div className='w-full flex flex-column justify-center h-screen w-screen color-white flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500 relative p-20 text-white min-h-500 min-h-fit'>
      <CitySearch/>
      {weather ?  
        <CurrentWeather 
          key='1'
          name={weather.name}
          main={weather.main}
          weather={weather.weather}
          wind={weather.wind}
        /> : <Loader/> 
      }
    </div>
  )
}

export default WeatherPage;
