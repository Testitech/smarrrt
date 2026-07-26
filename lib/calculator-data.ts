// The public calculator deliberately exposes only combinations backed by an
// active, source-checked database rule. The API remains the source of amounts.
export const COUNTRIES = [
  { id: "CA", name: "Canada", flag: "🇨🇦", currency: "CAD" },
  { id: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD" },
  { id: "NL", name: "Netherlands", flag: "🇳🇱", currency: "EUR" },
  { id: "FI", name: "Finland", flag: "🇫🇮", currency: "EUR" },
  { id: "SE", name: "Sweden", flag: "🇸🇪", currency: "SEK" },
] as const;

export const PURPOSES = [
  { id: "study", name: "Study", icon: "🎓" },
  { id: "work", name: "Work", icon: "💼" },
  { id: "visit", name: "Visit", icon: "✈️" },
  { id: "tourism", name: "Tourism", icon: "🏖️" },
  { id: "business", name: "Business", icon: "🤝" },
  { id: "permanent-residency", name: "Permanent Residency", icon: "🏡" },
] as const;

export const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const FULL_MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const INTAKE_MONTHS = FULL_MONTH_NAMES.map((label, index) => ({
  value: String(index),
  label,
}));
