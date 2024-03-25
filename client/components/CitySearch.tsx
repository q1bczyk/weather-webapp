import React from 'react'
import SearchInput from './SearchInput'

const CitySearch : React.FC = () => {
  return (
    <div className='w-screen fixed top-0 left-0 pt-10 pb-10 flex justify-center'>
        <SearchInput/>
    </div>
  )
}

export default CitySearch