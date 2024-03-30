export const enterData = (cityName: string) => {
  return {
    type: "ENTER_DATA",
    payload: cityName,
  };
};

export const selectUnit = (unit: string) => {
  return {
    type: "SELECT_UNIT",
    payload: unit,
  };
};

export const setLoading = (state: boolean) => {
  return {
    type: "SET_LOADING",
    payload: state,
  };
};
