import React from 'react'
import SuggestedCitiesItem from './SuggestedCitiesItem/SuggestedCitiesItem';

const SuggestedCities : React.FC = () => {

  const cities : string[] = [] 

  return (
    <div className='w-80 bg-white top-11 border-cyan-950 rounded-b-lg overflow-hidden'>
      {cities.map((item) => (
       <SuggestedCitiesItem cityName={item}/> 
      ))}
    </div>
  )
}

export default SuggestedCities;
