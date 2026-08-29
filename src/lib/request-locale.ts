import { cookies, headers } from "next/headers";
import type { SiteLocale } from "@/lib/routes";

export function requestLocale(): SiteLocale {
  const headerLocale = headers().get("x-bc-locale");

  if (headerLocale === "en" || headerLocale === "es") {
    return headerLocale;
  }

  return cookies().get("BC_LOCALE")?.value === "en" ? "en" : "es";
}
