'use client'

import React, { useState } from 'react'
import Loader from '@/components/Loader'
import CitySearch from '@/components/CitySearch'

const HomePage : React.FC = () => {

  const[isLoading, setLoading] = useState(false);

  return (
    <div className='h-screen w-screen color-white flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 relative'>
      {isLoading === true ? <Loader/> : null}
      <CitySearch/>
    </div>
  )
}

export default HomePage
