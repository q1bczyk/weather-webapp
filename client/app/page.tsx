'use client'

import React, { useState } from 'react'
import Loader from '@/components/Loader'

const HomePage : React.FC = () => {

  const[isLoading, setLoading] = useState(false);

  return (
    <div className='h-screen w-screen bg-white color-white flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 relative'>
      {isLoading === true ? <Loader/> : null}
    </div>
  )
}

export default HomePage
