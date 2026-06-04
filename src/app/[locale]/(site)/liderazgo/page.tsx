import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { leaders } from "@/content/leadership";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const canonical =
    params.locale === "en" ? "/en/liderazgo" : "/liderazgo";
  return {
    title: "Liderazgo gerencial | Bureau Consulting",
    description:
      "Conoce al equipo gerencial de Bureau Consulting: dirección, contabilidad, gestión de proyectos y soporte legal corporativo para acompañar tu negocio con criterio profesional.",
    alternates: { canonical },
  };
}

export default function LiderazgoPage({
  params,
}: {
  params: { locale: string };
}) {
  const prefix = params.locale === "en" ? "/en" : "";

  return (
    <div className="bg-[#1a1a1a] text-white">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative w-full border-b border-white/8">
        <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[3px] bg-[#0da9e1]" />
        <div className="mx-auto max-w-[1200px] px-4 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegación" className="mb-8">
            <ol className="flex items-center gap-2 text-[13px] text-white/40" role="list">
              <li><Link href={`${prefix}/`} className="hover:text-white/70 transition-colors">Inicio</Link></li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li className="text-white/70" aria-current="page">Liderazgo</li>
            </ol>
          </nav>

          <p className="text-[11px] font-['Outfit:Bold',sans-serif] font-bold uppercase tracking-[0.18em] text-[#0da9e1] mb-5">
            Equipo gerencial
          </p>
          <h1 className="font-['Outfit:Regular',sans-serif] font-normal text-[36px] lg:text-[52px] leading-[1.1] text-white mb-5 max-w-[700px]">
            Liderazgo que acompaña la gestión del negocio
          </h1>
          <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[18px] leading-[1.7] text-white/65 max-w-[640px]">
            Nuestro equipo gerencial integra experiencia en dirección, gestión
            de proyectos, contabilidad y soporte legal corporativo para
            acompañar a cada cliente con criterio profesional, cercanía
            ejecutiva y visión de conjunto.
          </p>
        </div>
      </section>

      {/* ── Grid de perfiles ────────────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leaders.map((leader) => (
              <Link
                key={leader.slug}
                href={`${prefix}/liderazgo/${leader.slug}`}
                className="group bg-[#1e1e1e] border border-white/8 rounded-[12px] overflow-hidden flex flex-col hover:border-white/20 hover:bg-[#222] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
              >
                {/* Foto */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/20 shrink-0">
                  {leader.flipped ? (
                    <div className="-scale-x-100 absolute inset-0">
                      <Image
                        src={leader.img}
                        alt={`Foto de ${leader.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 560px"
                      />
                    </div>
                  ) : (
                    <Image
                      src={leader.img}
                      alt={`Foto de ${leader.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 560px"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(30,30,30,0.9) 0%, transparent 100%)" }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-6 lg:p-7">
                  <div>
                    <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[19px] lg:text-[21px] text-white leading-tight">
                      {leader.name}
                    </h2>
                    <p className="font-['Outfit:Medium',sans-serif] font-medium text-[11px] text-white/40 uppercase tracking-[0.1em] mt-1">
                      {leader.role}
                    </p>
                  </div>
                  <div className="w-7 h-[2px] bg-[#0da9e1] rounded-full" aria-hidden="true" />
                  <p className="font-['Outfit:Regular',sans-serif] text-[13px] lg:text-[14px] text-[#0da9e1] leading-snug">
                    {leader.aporte}
                  </p>
                  <p className="font-['Outfit:Regular',sans-serif] text-[13px] lg:text-[14px] text-white/60 leading-[1.65] line-clamp-3">
                    {leader.bio}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-['Outfit:Medium',sans-serif] font-medium text-[#0da9e1] group-hover:gap-3 transition-all mt-1">
                    Ver perfil
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d2238] py-16 lg:py-20 border-t border-white/8">
        <div className="mx-auto max-w-[1200px] px-4 text-center flex flex-col items-center gap-7">
          <h2 className="font-['Outfit:Regular',sans-serif] font-normal text-[24px] lg:text-[34px] leading-[1.25] text-white max-w-[620px]">
            Conversemos sobre cómo Bureau Consulting puede acompañar la gestión de su empresa
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center justify-center bg-[#0da9e1] rounded-[6px] px-7 py-3.5 font-['Outfit:Medium',sans-serif] font-medium text-[15px] text-[#003a61] hover:bg-[#0b96cc] transition-colors focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
            >
              Solicitar una conversación
            </Link>
            <Link
              href={`${prefix}/servicios`}
              className="inline-flex items-center justify-center bg-transparent border border-white/30 rounded-[6px] px-7 py-3.5 font-['Outfit:Medium',sans-serif] font-medium text-[15px] text-white/80 hover:border-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
