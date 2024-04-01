"use client";

import React, { useEffect, useState } from "react";
import SuggestedCitiesItem from "./SuggestedCitiesItem/SuggestedCitiesItem";
import { useSelector } from "react-redux";
import { getCities } from "@/services/GeocodingService";
import IGeocodingData from "@/types/IGeocodingData";
import { useRouter } from "next/navigation";
import { useDispatch } from "@/node_modules/react-redux/dist/react-redux";
import { enterData, setLoading } from "@/redux/actions/searchCityAction";
import Loader from "@/components/Loader";
import { RootState } from "@/redux/stores/searchCityStore";

const SuggestedCities: React.FC<{absolute : boolean}> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [cities, setCities] = useState<IGeocodingData[]>([]);
  const searchParams: string = useSelector(
    (state: RootState) => state.searchCity.cityName
  );
  const isLoading: boolean = useSelector((state: RootState) => state.searchCity.isLoading);

  useEffect(() => {
    if (searchParams === "") setCities([]);

    getCities(searchParams)
      .then((res: any) => {
        setCities(res.data);
      })
      .catch((e: Error) => {});
  }, [searchParams]);

  const onCitySelect = (index: number) => {
    dispatch(enterData(""));
    dispatch(setLoading(true));
    router.push(`/weather?place=${cities[index].name}`);
  };

  return (
    <div className={`w-80 bg-white border-cyan-950 rounded-b-lg overflow-hidden ${props.absolute ? 'absolute top-14' : 'relative bottom-1'}`}>
      {cities.map((item, index) => (
        <SuggestedCitiesItem
          key={index}
          cityName={item.name}
          state={item.state}
          country={item.country}
          index={index}
          onClick={() => onCitySelect(index)}
        />
      ))}
      {isLoading ? <Loader /> : null}
    </div>
  );
};

export default SuggestedCities;
