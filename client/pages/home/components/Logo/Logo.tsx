import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";

const Logo : React.FC = () => {
  return (
    <div className='flex flex-col relative'>
      <TiWeatherPartlySunny className="text-9xl text-sky-900"/>
    </div>
  )
}

export default Logo;
