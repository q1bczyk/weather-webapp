"use client";

import {
  useDispatch,
  useSelector,
} from "@/node_modules/react-redux/dist/react-redux";
import { selectUnit } from "@/redux/actions/searchCityAction";
import React, { useState } from "react";

const Units = () => {
  const dispatch = useDispatch();
  const selectedUnit = useSelector((state) => state.searchCity.unit);

  const [unit, setUnits] = useState<string>(selectedUnit);

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnits(event.target.value);
    dispatch(selectUnit(event.target.value));
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Wybierz jednostkę metryczną
        </label>
        <select
          id="countries"
          className="w-80 text-sm rounded-lg p-2.5 dark:border-black dark:placeholder-black bg-black bg-opacity-10 text-white pointer"
          value={unit}
          onChange={handleUnitChange}
        >
          <option value="standard">Standardowa</option>
          <option value="metric">Metryczna</option>
          <option value="imperial">Imperialna</option>
        </select>
      </form>
    </div>
  );
};

export default Units;
