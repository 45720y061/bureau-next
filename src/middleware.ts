import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|eot)).*)",
  ],
};

const locales = ["en", "es"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Rewrite root/unlabeled traffic seamlessly to the hidden defaults.
  // We do not add accept-language redirect logic.
  if (!pathnameHasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    const response = NextResponse.rewrite(url);
    response.cookies.set("BC_LOCALE", defaultLocale, { path: "/" });
    return response;
  }

  const currentLocale = pathname.startsWith("/en") ? "en" : "es";
  const response = NextResponse.next();
  response.cookies.set("BC_LOCALE", currentLocale, { path: "/" });
  return response;
}
