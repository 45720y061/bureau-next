import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { localizedPath } from "@/lib/routes";

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|eot)).*)",
  ],
};

const locales = ["en", "es"];
const defaultLocale = "es";
const legacyRedirects = new Map([
  ["/nosotras", localizedPath(defaultLocale, "/quienes-somos")],
  ["/es/nosotras", localizedPath(defaultLocale, "/quienes-somos")],
  ["/en/nosotras", localizedPath("en", "/quienes-somos")],
]);

function requestHeadersWithLocale(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-bc-locale", locale);
  return requestHeaders;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalizedPathname =
    pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  const legacyRedirect = legacyRedirects.get(normalizedPathname);

  if (legacyRedirect) {
    const url = request.nextUrl.clone();
    url.pathname = legacyRedirect;
    const response = NextResponse.redirect(url, 308);
    const redirectLocale = legacyRedirect.startsWith("/en") ? "en" : defaultLocale;
    response.cookies.set("BC_LOCALE", redirectLocale, { path: "/" });
    return response;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Rewrite root/unlabeled traffic seamlessly to the hidden defaults.
  // We do not add accept-language redirect logic.
  if (!pathnameHasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeadersWithLocale(request, defaultLocale) },
    });
    response.cookies.set("BC_LOCALE", defaultLocale, { path: "/" });
    return response;
  }

  const currentLocale = pathname.startsWith("/en") ? "en" : "es";
  const response = NextResponse.next({
    request: { headers: requestHeadersWithLocale(request, currentLocale) },
  });
  response.cookies.set("BC_LOCALE", currentLocale, { path: "/" });
  return response;
}
