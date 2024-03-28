import React from 'react'
import Image from '@/node_modules/next/image';


const WeatherDescription : React.FC<{imgCode : string, description : string, cityName : string}> = (props) => {
  return (
    <div className='flex flex-col justify-center items-center w-1/2'>
      <h2 className='text-5xl text-sky-900'>{props.cityName}</h2>
      <div className='flex flex-col items-center'>
        <Image className='p-5' src={`/${props.imgCode}.png`} width='200' height='200' alt=''/>
        <h2 className='text-sky-900'>{props.description}</h2>
      </div>
    </div>
  )
}

export default WeatherDescription;
