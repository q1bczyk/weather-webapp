'use client'

import React, { useState } from 'react'
import Loader from '@/components/Loader'
import CitySearch from '@/components/CitySearch/CitySearch'

const Home : React.FC = () => {

  const[isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className='h-screen w-screen color-white flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 relative'>
      {isLoading === true ? <Loader/> : null}
      <h2 className='p-5 text-xl text-white font-sans'>Wprowadź nazwę miasta: </h2>
      <CitySearch/>
    </div>
  )
}

export default Home;