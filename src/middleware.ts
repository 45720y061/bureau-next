import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|eot)).*)",
  ],
};

export function middleware(request: NextRequest) {
  console.log("MIDDLEWARE RUNNING:", request.nextUrl.pathname);

  const pathname = request.nextUrl.pathname;
  const locale = pathname.startsWith("/en") ? "en" : "es";

  const response = NextResponse.next();

  response.cookies.set("BC_LOCALE", locale, {
    path: "/",
  });

  return response;
}
