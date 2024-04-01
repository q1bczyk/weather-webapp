"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../redux/stores/searchCityStore";

interface ProvidersProps {
  children: ReactNode;
  store: typeof store;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;