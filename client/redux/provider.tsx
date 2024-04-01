"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../redux/stores/searchCityStore";

interface ProvidersProps {
  children: ReactNode;
  store: typeof store;
}

export default function Providers({ children } : ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
