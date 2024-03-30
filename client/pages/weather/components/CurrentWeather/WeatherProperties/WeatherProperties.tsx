"use client";

import React from "react";
import IMainWeatherPropeties from "@/types/IMainWeatherPropeties";
import { FaTemperatureHalf } from "react-icons/fa6";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { useSelector } from "@/node_modules/react-redux/dist/react-redux";
import { convertTemperature } from "@/utils/convertTemperature";

const WeatherProperties: React.FC<{
  main: IMainWeatherPropeties;
  wind: number;
}> = (props) => {
  const unit: string = useSelector((state) => state.searchCity.unit);

  return (
    <div className="flex flex-wrap justify-center items-center lg:flex-col w-1/2">
      <h2 className="flex items-center text-l p-3">
        <FaTemperatureHalf className="mr-2 text-sky-900 text-3xl" />{" "}
        Temperatura: {convertTemperature(props.main.temp, unit)}
      </h2>
      <h2 className="flex items-center text-l p-3">
        <BsSpeedometer2 className="mr-2 text-sky-900 text-3xl" /> Ciśnienie:{" "}
        {props.main.pressure} hPa
      </h2>
      <h2 className="flex items-center text-l p-3">
        <IoWaterOutline className="mr-2 text-sky-900 text-3xl" /> Wilgotność:{" "}
        {props.main.humidity}%
      </h2>
      <h2 className="flex items-center text-l p-3">
        <FaWind className="mr-2 text-sky-900 text-3xl" /> Wiatr: {props.wind}{" "}
        km/h
      </h2>
    </div>
  );
};

export default WeatherProperties;
