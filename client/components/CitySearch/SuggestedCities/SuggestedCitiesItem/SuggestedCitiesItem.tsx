import React from 'react'

interface SuggestedCitiesItemInterface{
    cityName : string
}

const SuggestedCitiesItem : React.FC<SuggestedCitiesItemInterface> = (props) => {
  return (
    <div>
      <div className='w-full relative'>
        <span className='w-11/12 left-2 h-px bg-black absolute bg-slate-200 rounded-md'></span>
        <h2 className='p-3 cursor-pointer hover:bg-sky-50 text-cyan-800'>{props.cityName}</h2>
      </div>
    </div>
  )
}

export default SuggestedCitiesItem;