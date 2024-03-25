'use client'

import React, { useState } from 'react'

const SearchInput : React.FC = () => {
  
    const [formValue, setFormValue] = useState<string>('');
  
    return (
    <div className='w-11/12'>
        <form className="max-w-md mx-auto flex justify-center w-96">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg 
                        className="w-4 h-4 text-gray-500 dark:text-slate-50" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 20 20">
                        <path 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input 
                    value={formValue} 
                    onChange={(event) => setFormValue(event.target.value)} 
                    type="search" id="default-search" 
                    className="block w-full p-3 ps-10 text-md text-slate-50 rounded-lg bg-black bg-opacity-40" 
                    placeholder="Podaj miejsce" 
                    required
                />
            </div>
        </form>
    </div>
  )
}

export default SearchInput;

