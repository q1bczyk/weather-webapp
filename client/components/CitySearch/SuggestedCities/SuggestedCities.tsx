'use client'

import React, { useEffect, useState } from 'react'
import SuggestedCitiesItem from './SuggestedCitiesItem/SuggestedCitiesItem';
import { useSelector } from 'react-redux';
import { getCities } from '@/services/GeocodingService';
import IGeocodingData from '@/types/IGeocodingData';
import { useRouter } from 'next/navigation';
import { useDispatch } from '@/node_modules/react-redux/dist/react-redux';
import { enterData } from '@/redux/actions/searchCityAction';

const SuggestedCities : React.FC = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const [cities, setCities] = useState<IGeocodingData[]>([]);
  const searchParams : string = useSelector(state => state.searchCity.cityName);

  useEffect(() => {
      
      if(searchParams === '')
        setCities([]);
    
      getCities(searchParams)
      .then((res : any) => {
        setCities(res.data);
      })
      .catch((e : Error) => {
        
      })

  }, [searchParams]);

  const onCitySelect = (index : number) => {
    dispatch(enterData(''));
    router.push(`/weather?place=${cities[index].name}`);
  }

  return (
    <div className='w-80 bg-white top-11 border-cyan-950 rounded-b-lg overflow-hidden absolute'>
      {cities.map((item, index) => (
      <SuggestedCitiesItem
        key={index}
        cityName={item.name}
        state={item.state}
        country={item.country}
        index={index}
        onClick={() => onCitySelect(index)}
      /> 
      ))}
    </div>
  )
}

export default SuggestedCities;
