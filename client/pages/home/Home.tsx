'use client'

import React, { useState } from 'react'
import Loader from '@/components/Loader'
import CitySearch from '@/components/CitySearch/CitySearch'

const Home : React.FC = () => {

  return (
    <div className='h-screen w-screen color-white flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500 relative p-20'>
      <h2 className='p-5 text-xl text-white font-sans'>Wprowadź nazwę miasta: </h2>
      <CitySearch/>
    </div>
  )
}

export default Home;