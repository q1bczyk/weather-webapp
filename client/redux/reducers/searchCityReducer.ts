export interface ISearchCityState {
  cityName: string;
  unit: string;
  isLoading: boolean;
}

const initialState: ISearchCityState = {
  cityName: "",
  unit: "standard",
  isLoading: false,
};

const searchCityReducer = (
  state: ISearchCityState = initialState,
  action: any
) => {
  switch (action.type) {
    case "ENTER_DATA":
      return {
        ...state,
        cityName: action.payload,
      };

    case "SELECT_UNIT":
      return {
        ...state,
        unit: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default searchCityReducer;
