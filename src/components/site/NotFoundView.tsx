import Link from "next/link";
import { BrandFooter } from "@/components/site/BrandFooter";
import { BrandHeader } from "@/components/site/BrandHeader";
import { localizedPath, type SiteLocale } from "@/lib/routes";

export function NotFoundView({ locale }: { locale: SiteLocale }) {
  const t =
    locale === "en"
      ? { title: "Page not found", back: "Go back home" }
      : { title: "Pagina no encontrada", back: "Volver al inicio" };

  return (
    <div className="min-h-screen bg-[#434343] text-white flex flex-col">
      <BrandHeader locale={locale} />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <h1 className="font-['Outfit:Regular',sans-serif] text-[36px] leading-tight md:text-[48px]">
          {t.title}
        </h1>
        <Link
          href={localizedPath(locale)}
          className="inline-flex items-center justify-center rounded-[4px] border border-[#0da9e1] px-5 py-3 font-['Outfit:Medium',sans-serif] text-[#0da9e1] transition-colors hover:bg-[#0da9e1] hover:text-[#003a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0da9e1]"
        >
          {t.back}
        </Link>
      </main>
      <BrandFooter locale={locale} />
    </div>
  );
}
