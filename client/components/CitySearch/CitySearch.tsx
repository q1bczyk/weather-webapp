import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import SuggestedCities from "./SuggestedCities/SuggestedCities";

const CitySearch: React.FC = () => {
  return (
    <div className="w-screen zpt-10 pb-10 flex flex-col justify-center items-center relative">
      <SearchInput />
      <SuggestedCities />
    </div>
  );
};

export default CitySearch;
