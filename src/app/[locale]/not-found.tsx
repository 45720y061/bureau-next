import Link from "next/link";
import { cookies } from "next/headers";

export default function NotFound() {
  const locale = cookies().get("BC_LOCALE")?.value === "en" ? "en" : "es";

  const t =
    locale === "en"
      ? { title: "Page not found", back: "Go back home" }
      : { title: "Página no encontrada", back: "Volver al inicio" };

  return (
    <main style={{ padding: 24 }}>
      <h1>{t.title}</h1>
      <p>
        <Link href={`/${locale}`}>{t.back}</Link>
      </p>
    </main>
  );
}