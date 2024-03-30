import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import SuggestedCities from "./SuggestedCities/SuggestedCities";

const CitySearch: React.FC<{absolute : boolean}> = (props) => {
  return (
    <div className='w-screen zpt-10 pb-10 flex flex-col justify-center items-center relative'>
      <SearchInput />
      <SuggestedCities absolute={props.absolute}/>
    </div>
  );
};

export default CitySearch;
