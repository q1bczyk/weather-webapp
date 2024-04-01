"use client";

import { combineReducers, createStore } from "redux";
import searchCityReducer, { ISearchCityState } from "../reducers/searchCityReducer";

export interface RootState {
  searchCity: ISearchCityState;
}

const rootReducer = combineReducers({
  searchCity: searchCityReducer,
});

const store = createStore(rootReducer);

export default store;
