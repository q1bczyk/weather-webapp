import IForecast from '@/types/IForecast';
import React from 'react'
import Image from '@/node_modules/next/image';
import { convertTemperature } from '@/utils/convertTemperature';
import { useSelector } from '@/node_modules/react-redux/dist/react-redux';

const ForecastItem : React.FC<IForecast> = (props) => {

  const unit: string = useSelector(state => state.searchCity.unit);

  return (
    <div className='p-1 w-100 h-72 bg-black bg-opacity-10 flex flex-col justify-center items-center xl:p-6 2xl:p-12 rounded-lg mt-3 xl:mt-0'>
      <h2 className='p-2 text-2xl'>{props.date}</h2>
      <Image className='p-2 xl:p-5' src={`/${props.weather[0].icon}.png`} width='150' height='100' alt=''/>
      <h2 className='p-2 text-2xl'>{convertTemperature(props.main.temp, unit)}</h2>
    </div>
  )
}

export default ForecastItem;
