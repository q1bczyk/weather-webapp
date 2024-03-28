'use client'

import React from 'react'
import CitySearch from '@/components/CitySearch/CitySearch'
import Logo from './components/Logo/Logo'
import MetricUnits from './components/MetricUnits/MetricUnits'

const Home : React.FC = () => {

  return (
    <div className='h-screen w-screen color-white flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500 relative p-20'>
      <Logo/>
      <CitySearch/>
      <MetricUnits/>
    </div>
  )
}

export default Home;