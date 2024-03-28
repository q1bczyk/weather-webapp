'use client'

import React, { useState } from 'react'

const MetricUnits = () => {

    const[units, setUnits] = useState<string>('standard');

    const handleUnitChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setUnits(event.target.value);
        console.log(units);
    };

    return (
        <div>
        <form className="max-w-sm mx-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wybierz jednostkę metryczną</label>
                <select 
                    id="countries" 
                    className="w-80 text-sm rounded-lg p-2.5 dark:border-black dark:placeholder-black bg-black bg-opacity-10 text-white pointer" 
                    value={units} 
                    onChange={handleUnitChange}>
                    <option selected value="standard">Standardowa</option>
                    <option value="metric">Metryczna</option>
                    <option value="imperial">Imperialna</option>
                </select>
            </form>
        </div>
    )
}

export default MetricUnits;