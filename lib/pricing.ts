export const CURRENCIES = ["CAD", "USD", "EUR"] as const;
export type Currency = (typeof CURRENCIES)[number];

export const DEFAULT_CURRENCY: Currency = "CAD";

export const DEVICE_COUNTS = [1, 2, 3, 4] as const;
export type DeviceCount = (typeof DEVICE_COUNTS)[number];

/** Subscription lengths, in the same order as each row in PRICES. */
export const PLAN_DURATIONS = ["1 Month", "3 Months", "6 Months", "12 Months"] as const;
export const POPULAR_DURATION: (typeof PLAN_DURATIONS)[number] = "6 Months";

type PriceRow = readonly [number, number, number, number];

/** Fixed price lists per currency — not exchange-rate conversions of each other. */
export const PRICES: Record<Currency, Record<DeviceCount, PriceRow>> = {
  CAD: {
    1: [19, 29, 49, 79],
    2: [29, 49, 89, 129],
    3: [39, 69, 119, 179],
    4: [49, 89, 129, 199],
  },
  USD: {
    1: [14.99, 21.99, 35.99, 57.99],
    2: [21.99, 36.99, 65.99, 94.99],
    3: [28.99, 49.99, 86.99, 130.99],
    4: [36.99, 65.99, 94.99, 144.99],
  },
  EUR: {
    1: [11.99, 17.99, 30.99, 48.99],
    2: [17.99, 30.99, 55.99, 79.99],
    3: [24.99, 42.99, 73.99, 110.99],
    4: [30.99, 55.99, 79.99, 123.99],
  },
};

/** Shown after the amount, so the two dollar currencies are never ambiguous. */
const CURRENCY_SYMBOLS: Record<Currency, string> = { CAD: "$CA", USD: "$US", EUR: "€" };

export function isCurrency(value: unknown): value is Currency {
  return (CURRENCIES as readonly unknown[]).includes(value);
}

/** A price split for display: `amount` is "19" / "11.99" (whole prices drop the ".00"), `symbol` is "$CA" / "$US" / "€". */
export function priceParts(price: number, currency: Currency) {
  const digits = Number.isInteger(price) ? 0 : 2;
  const amount = price.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return { amount, symbol: CURRENCY_SYMBOLS[currency] };
}
