import React from 'react'

interface IProps {
    forecastType : string,
    onChangeForecastType : (newType : string) => void
}

const ForecastControls : React.FC<IProps> = (props) => {
  return (
    <div className='flex justify-start w-full'>
        <h2 
            className={`py-2 px-8 cursor-pointer rounded-md ${props.forecastType === 'hourly' ? 'bg-sky-900' : 'bg-black bg-opacity-10'}`} 
            onClick={() => props.onChangeForecastType('hourly')}>
            Pogoda godzinowa
        </h2>
        <h2 
            className={`ml-5 py-2 px-8 cursor-pointer rounded-md ${props.forecastType !== 'hourly' ? 'bg-sky-900' : 'bg-black bg-opacity-10'}`}
            onClick={() => props.onChangeForecastType('dayli')}>
                Pogoda dzienna
        </h2>
    </div>
  )
}

export default ForecastControls;