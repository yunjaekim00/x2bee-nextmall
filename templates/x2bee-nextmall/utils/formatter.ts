export const StringToDate = (data: string) => {
  const year = data.slice(0, 4);
  const month = data.slice(4, 6);
  const day = data.slice(6, 8);

  const date = new Date(Number(year), Number(month) - 1, Number(day)); // month is zero based
  const formatter = new Intl.DateTimeFormat("ko-KO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatter.format(date);
};
