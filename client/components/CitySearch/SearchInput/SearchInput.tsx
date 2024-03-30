"use client";

import { enterData } from "@/redux/actions/searchCityAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState<string>("");

  const handleEnterData = (cityName: string) => {
    setFormValue(cityName);
    dispatch(enterData(cityName));
  };

  return (
    <div className="w-11/12 mt-5">
      <form className="max-w-md mx-auto flex flex-col justify-center w-80">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-slate-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
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
            onChange={(event) => handleEnterData(event.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-md text-slate-50 rounded-lg bg-black bg-opacity-10"
            placeholder="miasto"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
