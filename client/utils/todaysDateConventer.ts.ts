export const getTime = (): string => {
  const date: Date = new Date();

  const today = getToday();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();

  if (hours.length === 1) hours = "0" + hours;

  if (minutes.length === 1) minutes = "0" + minutes;

  if (seconds.length === 1) seconds = "0" + seconds;

  return `${today}, ${hours}:${minutes}:${seconds}`;
};

const getToday = (): string => {
  const days: string[] = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];

  const now: Date = new Date();

  return days[now.getDay()];
};
