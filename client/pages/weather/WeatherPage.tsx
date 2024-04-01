"use client";

import { getCurrentWeather } from "@/services/WeatherService";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ICurrentWeather from "@/types/ICurrentWeather";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Loader from "@/components/Loader";
import CitySearch from "@/components/CitySearch/CitySearch";
import {
  useDispatch,
  useSelector,
} from "@/node_modules/react-redux/dist/react-redux";
import { setLoading } from "@/redux/actions/searchCityAction";
import Forecast from "./components/Forecast/Forecast";
import { RootState } from "@/redux/stores/searchCityStore";

const WeatherPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const [weather, setWeather] = useState<ICurrentWeather>();
  const place = searchParams.get('place');
  const unit: string = useSelector((state: RootState) => state.searchCity.unit);

  useEffect(() => {
    document.title = `Pogoda | ${place}`;
    getCurrentWeather(place, unit)
      .then((res: any) => {
        setWeather(res.data);
        dispatch(setLoading(false));
      })
      .catch((e: Error) => {
        router.push("/not-found");
      });
  }, [place]);

  return (
    <div className="min-h-screen min-w-screen w-full flex flex-column justify-center h-fit w-screen color-white flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500 relative p-20 text-white min-h-500">
      {weather ? (
        <>
          <CitySearch absolute={true} />
          <CurrentWeather
            key="1"
            name={weather.name}
            main={weather.main}
            weather={weather.weather}
            wind={weather.wind}
            sys={weather.sys}
          />
          <Forecast cityName={searchParams.get("place")} unit={unit} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default WeatherPage;
