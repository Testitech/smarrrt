export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatForeign(amount: number, currencyCode: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRate(rate: number): string {
  return new Intl.NumberFormat("en-NG").format(rate);
}

export function formatMonth(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-NG", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
