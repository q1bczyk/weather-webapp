export const convertTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  const convertedTime: string = date.toLocaleTimeString();

  if (convertedTime[0] === "0") return convertedTime.substring(1, 5);

  return convertedTime.substring(0, 5);
};
