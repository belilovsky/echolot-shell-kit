export const supportedLocales = ["ru", "kk", "en"];

export function chooseLocale(requested) {
  const normalized = String(requested || "").slice(0, 2).toLowerCase();
  return supportedLocales.includes(normalized) ? normalized : "ru";
}
