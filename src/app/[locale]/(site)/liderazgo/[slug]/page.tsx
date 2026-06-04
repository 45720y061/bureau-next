import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { leaders } from "@/content/leadership";
import { site } from "@/lib/site";

const locales = ["es", "en"] as const;
type Params = { locale: (typeof locales)[number]; slug: string };

// ── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    leaders.map((l) => ({ locale, slug: l.slug }))
  );
}

// ── Metadata ─────────────────────────────────────────────────────────────────
export function generateMetadata({ params }: { params: Params }): Metadata {
  const leader = leaders.find((l) => l.slug === params.slug);
  if (!leader) {
    return {
      title: "Perfil no encontrado",
      robots: { index: false, follow: false },
    };
  }
  const canonical =
    params.locale === "en"
      ? `/en/liderazgo/${leader.slug}`
      : `/liderazgo/${leader.slug}`;

  return {
    title: `${leader.name} — ${leader.role} | Bureau Consulting`,
    description: leader.bio.slice(0, 160),
    alternates: { canonical },
    openGraph: {
      title: `${leader.name} — ${leader.role} | Bureau Consulting`,
      description: leader.bio.slice(0, 160),
      url: canonical,
      type: "profile",
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LiderazgoProfilePage({ params }: { params: Params }) {
  const leader = leaders.find((l) => l.slug === params.slug);
  if (!leader) return notFound();

  const prefix = params.locale === "en" ? "/en" : "";
  const siteBase = site.url.replace(/\/$/, "");
  const canonical =
    params.locale === "en"
      ? `${siteBase}/en/liderazgo/${leader.slug}`
      : `${siteBase}/liderazgo/${leader.slug}`;

  // Schema.org/Person JSON-LD
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: leader.name,
    jobTitle: leader.role,
    description: leader.bio,
    worksFor: {
      "@type": "Organization",
      name: "Bureau Consulting",
      url: siteBase,
    },
    url: canonical,
  };

  // Perfiles adyacentes para navegación prev/next
  const currentIdx = leaders.findIndex((l) => l.slug === leader.slug);
  const prevLeader = currentIdx > 0 ? leaders[currentIdx - 1] : null;
  const nextLeader = currentIdx < leaders.length - 1 ? leaders[currentIdx + 1] : null;

  return (
    <div className="bg-[#1a1a1a] text-white">

      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav className="bg-[#161616] border-b border-white/8 py-4" aria-label="Ruta de navegación">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <ol className="flex items-center gap-2 text-[13px] text-white/40 flex-wrap" role="list">
            <li><Link href={`${prefix}/`} className="hover:text-white/70 transition-colors">Inicio</Link></li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li><Link href={`${prefix}/liderazgo`} className="hover:text-white/70 transition-colors">Liderazgo</Link></li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li className="text-white/70 truncate max-w-[160px] sm:max-w-[300px]" aria-current="page">
              {leader.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero del perfil ─────────────────────────────────────────────── */}
      <section className="bg-[#0d2238] py-14 lg:py-20 border-b border-white/8">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">

            {/* Foto */}
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-[10px] overflow-hidden border border-white/12 bg-black/20 mx-auto lg:mx-0">
              {leader.flipped ? (
                <div className="-scale-x-100 absolute inset-0">
                  <Image
                    src={leader.img}
                    alt={`Foto de ${leader.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                    priority
                  />
                </div>
              ) : (
                <Image
                  src={leader.img}
                  alt={`Foto de ${leader.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority
                />
              )}
            </div>

            {/* Texto del hero */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] font-['Outfit:Bold',sans-serif] font-bold uppercase tracking-[0.18em] text-[#0da9e1]">
                Equipo gerencial
              </p>
              <h1 className="font-['Outfit:Regular',sans-serif] font-normal text-[34px] lg:text-[46px] leading-[1.1] text-white">
                {leader.name}
              </h1>
              <p className="font-['Outfit:Medium',sans-serif] font-medium text-[12px] text-white/40 uppercase tracking-[0.12em]">
                {leader.role}
              </p>
              <div className="w-10 h-[2px] bg-[#0da9e1] rounded-full" aria-hidden="true" />
              <p className="font-['Outfit:Regular',sans-serif] text-[17px] lg:text-[19px] text-[#0da9e1] leading-snug">
                {leader.aporte}
              </p>
              <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] text-white/70 leading-[1.75] max-w-[540px]">
                {leader.bio}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Áreas de especialidad ───────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-[#1e1e1e] border-b border-white/8">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[11px] text-[#0da9e1] uppercase tracking-widest mb-6">
            Áreas de especialidad
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {leader.areas.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 font-['Outfit:Regular',sans-serif] text-[14px] lg:text-[15px] text-white/75 leading-[1.6]"
              >
                <svg className="mt-0.5 shrink-0 w-4 h-4 text-[#0da9e1]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Experiencia relevante ───────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-[#161616] border-b border-white/8">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[11px] text-white/40 uppercase tracking-widest mb-6">
            Experiencia relevante
          </h2>
          <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[17px] text-white/75 leading-[1.8] max-w-[700px]">
            {leader.experiencia}
          </p>
        </div>
      </section>

      {/* ── CTA individual ──────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0d2238] border-b border-white/8">
        <div className="mx-auto w-full max-w-[680px] px-4 text-center flex flex-col items-center gap-6">
          <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[18px] text-white/75 leading-[1.75]">
            {leader.cta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] bg-[#0da9e1] px-7 py-3 text-[15px] font-['Outfit:Medium',sans-serif] font-medium text-[#003a61] hover:bg-[#0b96cc] transition-colors focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
            >
              Iniciar conversación
            </Link>
            <Link
              href={`${prefix}/liderazgo`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] border border-white/25 px-7 py-3 text-[15px] font-['Outfit:Medium',sans-serif] font-medium text-white/75 hover:border-white/50 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
            >
              ← Ver todo el equipo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Navegación prev / next ──────────────────────────────────────── */}
      {(prevLeader || nextLeader) && (
        <nav className="bg-[#1e1e1e] border-t border-white/8 py-6" aria-label="Perfiles adyacentes">
          <div className="mx-auto w-full max-w-[960px] px-4 flex justify-between items-center gap-4 flex-wrap">
            {prevLeader ? (
              <Link
                href={`${prefix}/liderazgo/${prevLeader.slug}`}
                className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none rounded-sm"
              >
                <svg className="w-4 h-4 text-white/40 group-hover:text-[#0da9e1] transition-colors" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
                </svg>
                <span>
                  <span className="block text-[11px] text-white/35 uppercase tracking-wider">Anterior</span>
                  <span className="block text-[14px] text-white/70 group-hover:text-white transition-colors">{prevLeader.name}</span>
                </span>
              </Link>
            ) : <span />}
            {nextLeader ? (
              <Link
                href={`${prefix}/liderazgo/${nextLeader.slug}`}
                className="flex items-center gap-3 text-right group focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none rounded-sm"
              >
                <span>
                  <span className="block text-[11px] text-white/35 uppercase tracking-wider">Siguiente</span>
                  <span className="block text-[14px] text-white/70 group-hover:text-white transition-colors">{nextLeader.name}</span>
                </span>
                <svg className="w-4 h-4 text-white/40 group-hover:text-[#0da9e1] transition-colors" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            ) : <span />}
          </div>
        </nav>
      )}

    </div>
  );
}
