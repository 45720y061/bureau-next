import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceCategories } from "@/content/services";
import { site } from "@/lib/site";

const locales = ["es", "en"] as const;

type Params = { locale: (typeof locales)[number]; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio solicitado no existe.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical:
        params.locale === "en"
          ? `/en/servicios/${service.slug}`
          : `/servicios/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/${params.locale}/servicios/${service.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

export default function ServicioDetailPage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const localePrefix = params.locale === "en" ? "/en" : "";
  const category = serviceCategories.find((c) => c.id === service.categoryId);

  // ── Schema.org/Service JSON-LD ──────────────────────────────────────────
  const siteBase = site.url.replace(/\/$/, "");
  const serviceCanonicalUrl =
    params.locale === "en"
      ? `${siteBase}/en/servicios/${service.slug}`
      : `${siteBase}/servicios/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Bureau Consulting",
      url: siteBase,
    },
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
    url: serviceCanonicalUrl,
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* ── Schema.org/Service JSON-LD ──────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <nav className="bg-[#161616] border-b border-white/8 py-4" aria-label="Ruta de navegación">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <ol className="flex items-center gap-2 text-[13px] text-white/50" role="list">
            <li>
              <Link href={`${localePrefix}/`} className="hover:text-white/80 transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li>
              <Link href={`${localePrefix}/servicios`} className="hover:text-white/80 transition-colors">
                Servicios
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-white/80 truncate max-w-[160px] sm:max-w-[280px]" aria-current="page">
              {service.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero de servicio ───────────────────────────────────────────── */}
      <div className="bg-[#003a61] py-[48px] lg:py-[64px]">
        <div className="mx-auto w-full max-w-[960px] px-4">
          {/* Category chip */}
          {category && (
            <Link
              href={`${localePrefix}/servicios#${category.id}`}
              className="inline-block text-[11px] font-medium tracking-widest uppercase text-[#0da9e1] bg-[rgba(13,169,225,0.1)] border border-[rgba(13,169,225,0.3)] rounded-full px-4 py-1.5 mb-6 hover:bg-[rgba(13,169,225,0.15)] transition-colors"
            >
              {category.title}
            </Link>
          )}

          <div className="flex items-start gap-6">
            <div className="shrink-0 h-[64px] w-[70px] hidden sm:block">
              <Image
                alt=""
                src={service.iconSrc}
                width={70}
                height={64}
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="font-['Outfit:Bold',sans-serif] font-bold text-[32px] lg:text-[44px] text-white leading-[1.2] mb-3">
                {service.title}
              </h1>
              <p className="font-['Outfit:Regular',sans-serif] text-[17px] lg:text-[19px] text-white/70 leading-[1.55] max-w-[640px]">
                {service.bajada}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Introducción ───────────────────────────────────────────────── */}
      <section className="py-[48px] lg:py-[60px] bg-[#1e1e1e]">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[18px] text-white/80 leading-[1.8]">
            {service.intro}
          </p>
        </div>
      </section>

      {/* ── Puede incluir ──────────────────────────────────────────────── */}
      <section className="py-[48px] lg:py-[60px] bg-[#161616]">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <h2 className="font-['Outfit:Bold',sans-serif] font-semibold text-[13px] text-[#0da9e1] uppercase tracking-widest mb-6">
            Puede incluir
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-['Outfit:Regular',sans-serif] text-[15px] text-white/75 leading-[1.6]"
              >
                <svg
                  className="mt-0.5 shrink-0 w-4 h-4 text-[#0da9e1]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Beneficio + Cómo trabajamos ────────────────────────────────── */}
      <section className="py-[48px] lg:py-[60px] bg-[#1e1e1e]">
        <div className="mx-auto w-full max-w-[960px] px-4 grid md:grid-cols-2 gap-8">
          {/* Beneficio */}
          <div className="bg-[#0da9e1]/8 border border-[#0da9e1]/20 rounded-[10px] p-6 lg:p-8">
            <h2 className="font-['Outfit:Bold',sans-serif] font-semibold text-[13px] text-[#0da9e1] uppercase tracking-widest mb-4">
              Beneficio para el cliente
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] text-white/80 leading-[1.75]">
              {service.benefit}
            </p>
          </div>

          {/* Cómo trabajamos */}
          <div className="bg-[#2a2a2a] border border-white/8 rounded-[10px] p-6 lg:p-8">
            <h2 className="font-['Outfit:Bold',sans-serif] font-semibold text-[13px] text-white/50 uppercase tracking-widest mb-4">
              Cómo trabajamos
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] text-white/75 leading-[1.75]">
              {service.howWeWork}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA final ──────────────────────────────────────────────────── */}
      <section className="py-[56px] lg:py-[72px] bg-[#003a61]">
        <div className="mx-auto w-full max-w-[680px] px-4 text-center">
          <p className="font-['Outfit:Regular',sans-serif] text-[17px] lg:text-[19px] text-white/80 leading-[1.7] italic mb-8">
            {service.cta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${localePrefix}/contacto`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] bg-[#0da9e1] px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0b94c8]"
            >
              Iniciar conversación
            </Link>
            <Link
              href={`${localePrefix}/servicios`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] border border-white/30 px-7 py-3 text-[15px] font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              ← Todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
