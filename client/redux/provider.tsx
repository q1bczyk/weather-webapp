"use client";

import React from "react";
import { Provider, ProviderProps } from "react-redux";
import store from "../redux/stores/searchCityStore";

export default function Providers({ children } : ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
