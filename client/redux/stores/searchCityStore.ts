"use client";

import { combineReducers, createStore } from "redux";
import searchCityReducer from "../reducers/searchCityReducer";

const rootReducer = combineReducers({
  searchCity: searchCityReducer,
});

const rootStore = createStore(rootReducer);

export default rootStore;
