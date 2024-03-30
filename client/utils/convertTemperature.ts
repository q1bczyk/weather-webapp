export const convertTemperature = (temp: number, unit: string): string => {
  const roundedTemp: number = roundNumber(temp);

  switch (unit) {
    case "standard":
      return roundedTemp + "K";

    case "metric":
      return roundedTemp + "°C";

    default:
      return roundedTemp + "°F";
  }
};

const roundNumber = (temp: number): number => {
  const numberFloor: number = Math.floor(temp);

  if (temp - numberFloor < 0.5) return Math.floor(temp);

  return Math.ceil(temp);
};
