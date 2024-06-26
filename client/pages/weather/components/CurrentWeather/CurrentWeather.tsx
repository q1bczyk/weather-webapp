"use client";

import ICurrentWeather from "@/types/ICurrentWeather";
import React from "react";
import WeatherDescription from "./WeatherDescription/WeatherDescription";
import WeatherProperties from "./WeatherProperties/WeatherProperties";

const CurrentWeather: React.FC<ICurrentWeather> = (props) => {
  return (
    <div className="w-full sm:w-11/12 md:w-8/12 lg:w-11/12 flex flex-col items-center lg:flex-row lg:justify-around bg-black bg-opacity-10 rounded-lg h-90 p-10">
      <WeatherDescription {...props}/>
      <span className="bg-sky-500 h-px w-full mt-10 mb-10 lg:h-full lg:w-px lg:mt-0 lg:mb-0 rounded"></span>
      <WeatherProperties data={props} />
    </div>
  );
};

export default CurrentWeather;
