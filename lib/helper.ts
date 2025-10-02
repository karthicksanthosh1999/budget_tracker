import { Currencies } from "./currency";

export const DateToUTCDate = (date: Date) => {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );
};

export function GetFormatterForCurrency(currency: string) {
  const locate = Currencies.find((c) => c.value === currency)?.local;

  return new Intl.NumberFormat(locate, {
    style: "currency",
    currency,
  });
}
