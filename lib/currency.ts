export const Currencies = [
  { value: "USD", label: "$ Dollar", local: "en-US" },
  { value: "EUR", label: "$ Euro", local: "de-DE" },
  { value: "JPY", label: "$ Yen", local: "je-JP" },
  { value: "GBP", label: "$ Pound", local: "je-GB" },
];

export type Currency = (typeof Currencies)[0];
