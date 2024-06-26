"use client";

import React from "react";
import { FaTemperatureHalf } from "react-icons/fa6";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { WiSunset, WiSunrise } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { useSelector } from "@/node_modules/react-redux/dist/react-redux";
import { convertTemperature } from "@/utils/convertTemperature";
import ICurrentWeather from "@/types/ICurrentWeather";
import { convertTime } from "@/utils/convertTime";
import { RootState } from "@/redux/stores/searchCityStore";

const WeatherProperties: React.FC<{
  data: ICurrentWeather;
}> = (props) => {
  const unit: string = useSelector((state: RootState) => state.searchCity.unit);

  return (
    <div className="flex flex-wrap justify-center items-center lg:flex-col w-11/12 lg:w-1/2">
      <h2 className="flex items-center text-l p-3 justify-start w-72">
        <FaTemperatureHalf className="mr-2 text-sky-900 text-3xl" />{" "}
        Temperatura: {convertTemperature(props.data.main.temp, unit)}
      </h2>
      <h2 className="flex items-center text-l p-3 justify-start w-72">
        <BsSpeedometer2 className="mr-2 text-sky-900 text-3xl" /> Ciśnienie:{" "}
        {props.data.main.pressure} hPa
      </h2>
      <h2 className="flex items-center text-l p-3 justify-start w-72">
        <IoWaterOutline className="mr-2 text-sky-900 text-3xl" /> Wilgotność:{" "}
        {props.data.main.humidity}%
      </h2>
      <h2 className="flex items-center text-l p-3 justify-start w-72">
        <FaWind className="mr-2 text-sky-900 text-3xl" /> Wiatr: {props.data.wind.speed}{" "}
        km/h
      </h2>
      <h2 className="flex items-center text-l p-3 justify-start w-72">
        <WiSunrise className="mr-2 text-sky-900 text-3xl" /> Wschód: {convertTime(props.data.sys.sunrise)}
      </h2>
      <h2 className="flex items-center text-l p-3 justify-start w-72">
        <WiSunset className="mr-2 text-sky-900 text-3xl" /> Zachód: {convertTime(props.data.sys.sunset)}
      </h2>
    </div>
  );
};

export default WeatherProperties;
