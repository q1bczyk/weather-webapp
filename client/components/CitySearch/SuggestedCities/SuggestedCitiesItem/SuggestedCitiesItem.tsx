import React from 'react'

interface ISuggestedCitiesItem{
    cityName : string
    state : string
    country : string
    index : number
    onClick : (index : number) => void;
}

const SuggestedCitiesItem : React.FC<ISuggestedCitiesItem> = (props) => {
  
  const handleClick = () => {
    props.onClick(props.index); 
  };

  return (
    <div>
      <div className='w-full relative cursor-pointer hover:bg-sky-50' onClick={handleClick}>
        <span className='w-11/12 left-2 h-px bg-black absolute bg-slate-200 rounded-md'></span>
        <h2 className='mb-1 ml-3 text-cyan-800 text-lg'>{props.cityName}</h2>
        <h4 className='ml-3 mb-1 text-cyan-950 text-xs'>{props.state}, {props.country}</h4>
      </div>
    </div>
  )
}

export default SuggestedCitiesItem;