export type SiteLocale = "es" | "en";

export function localePrefix(locale?: string) {
  return locale === "en" ? "/en" : "";
}

export function localizedPath(locale: string | undefined, path = "/") {
  const prefix = localePrefix(locale);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return prefix || "/";
  }

  return `${prefix}${normalizedPath}`;
}
