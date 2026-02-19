import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const method = req.method.toUpperCase();

  // Marketing site hardening: only allow safe methods
  if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  // Reject unexpectedly large requests early (best-effort)
  const cl = req.headers.get("content-length");
  if (cl) {
    const n = Number(cl);
    if (Number.isFinite(n) && n > 64 * 1024) {
      return new NextResponse("Payload Too Large", { status: 413 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
