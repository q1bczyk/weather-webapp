"use client";

import React from "react";
import CitySearch from "@/components/CitySearch/CitySearch";
import Logo from "./components/Logo/Logo";
import MetricUnits from "./components/Unit/Units";

const Home: React.FC = () => {
  return (
    <div className="h-fit min-h-screen w-screen color-white flex flex-col items-center justify-start bg-gradient-to-r from-sky-500 to-indigo-500 relative">
      <Logo />
      <MetricUnits />
      <CitySearch absolute={false} />
    </div>
  );
};

export default Home;
