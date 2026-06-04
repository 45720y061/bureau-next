import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { leaders } from "@/content/leadership";

// ── Valores ─────────────────────────────────────────────────────────────────
const valores = [
  {
    title: "Perseverancia",
    description:
      "Sostenemos una lógica de mejora continua, buscando soluciones y manteniendo el foco en los objetivos definidos.",
  },
  {
    title: "Confianza",
    description:
      "Actuamos con responsabilidad, profesionalismo, rectitud y honradez en cada relación de trabajo.",
  },
  {
    title: "Iniciativa",
    description:
      "Nos anticipamos a las necesidades del cliente con acciones oportunas, criterio profesional y capacidad de respuesta.",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Sumamos capacidades de forma articulada para brindar un servicio más completo, coordinado y consistente.",
  },
  {
    title: "Honestidad",
    description:
      "Trabajamos con una conducta ética, transparente y responsable como base de cada intervención.",
  },
];




// ── Metadata ────────────────────────────────────────────────────────────────
export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  return {
    title: "Quiénes somos | Bureau Consulting",
    description:
      "Bureau Consulting es una firma de servicios profesionales que acompaña a empresas con criterio profesional, calidad de servicio, cercanía ejecutiva y visión de conjunto.",
    alternates: {
      canonical:
        params.locale === "en" ? `/en/quienes-somos` : `/quienes-somos`,
    },
  };
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function QuienesSomosPage({
  params,
}: {
  params: { locale: string };
}) {
  const prefix = params.locale === "en" ? "/en" : "";

  return (
    <div className="bg-[#1a1a1a] text-white">

      {/* ════════════════════════════════════════════════════════════════
          1. HERO EDITORIAL — 2 columnas desktop
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden border-b border-white/8">
        {/* Fondo con acento superior */}
        <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[3px] bg-[#0da9e1]" />

        <div className="mx-auto max-w-[1200px] px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna izquierda — texto */}
            <div className="flex flex-col gap-6 order-1">
              {/* Eyebrow */}
              <p className="text-[11px] font-['Outfit:Bold',sans-serif] font-bold uppercase tracking-[0.18em] text-[#0da9e1]">
                Bureau Consulting
              </p>

              {/* H1 */}
              <h1 className="font-['Outfit:Regular',sans-serif] font-normal text-[38px] lg:text-[54px] leading-[1.1] text-white">
                Quiénes somos
              </h1>

              {/* Bajada */}
              <p className="font-['Outfit:Regular',sans-serif] text-[18px] lg:text-[20px] leading-[1.5] text-white/80 max-w-[480px]">
                Acompañamos a empresas que necesitan orden, criterio y
                continuidad para sostener su gestión.
              </p>

              {/* Texto breve */}
              <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] leading-[1.7] text-white/60 max-w-[480px]">
                Bureau Consulting es una firma de servicios profesionales que
                trabaja desde una lógica clara: aportar respaldo técnico,
                calidad de servicio y una relación cercana que ayude a tomar
                decisiones con mayor seguridad.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href={`${prefix}/servicios`}
                  className="inline-flex items-center justify-center bg-[#0da9e1] rounded-[6px] px-6 py-3 font-['Outfit:Medium',sans-serif] font-medium text-[15px] text-[#003a61] hover:bg-[#0b96cc] transition-colors focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
                >
                  Conocer servicios
                </Link>
                <Link
                  href={`${prefix}/contacto`}
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 rounded-[6px] px-6 py-3 font-['Outfit:Medium',sans-serif] font-medium text-[15px] text-white/80 hover:border-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
                >
                  Contactar
                </Link>
              </div>
            </div>

            {/* Columna derecha — imagen */}
            <div className="relative order-2 w-full aspect-[4/3] lg:aspect-[3/2] rounded-[14px] overflow-hidden border border-white/10">
              <Image
                src="/assets/oficina21.png"
                alt="Equipo profesional revisando información de gestión empresarial"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
              {/* Gradient overlay bottom */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.5) 0%, transparent 100%)",
                }}
              />
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          2. NUESTRA FORMA DE ACOMPAÑAR — franja editorial
         ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0d2238] border-y border-white/8 relative overflow-hidden">
        {/* Acento visual lateral */}
        <div aria-hidden="true" className="absolute left-0 top-0 w-[4px] h-full bg-[#0da9e1]" />

        <div className="mx-auto max-w-[1200px] px-8 lg:px-20 py-16 lg:py-20">
          <div className="max-w-[720px]">
            <p className="text-[11px] font-['Outfit:Bold',sans-serif] font-bold uppercase tracking-[0.18em] text-[#0da9e1] mb-5">
              Enfoque profesional
            </p>
            <h2 className="font-['Outfit:Regular',sans-serif] font-normal text-[28px] lg:text-[38px] leading-[1.2] text-white mb-6">
              Nuestra forma de acompañar
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[18px] leading-[1.75] text-white/70">
              No trabajamos desde la distancia. Nos involucramos con criterio
              profesional, entendemos el contexto de cada cliente y articulamos
              capacidades contables, legales, administrativas y de gestión para
              brindar soporte con visión de conjunto.
            </p>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          3. MISIÓN Y VISIÓN — paneles editoriales
         ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-24 border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-px bg-transparent lg:bg-white/8 rounded-[16px] overflow-hidden">

            {/* 01 — Misión */}
            <div className="bg-[#1a1a1a] lg:bg-[#1e1e1e] p-8 lg:p-12 flex flex-col gap-5 border border-white/8 lg:border-0 rounded-[16px] lg:rounded-none mb-4 lg:mb-0">
              <span className="font-['Outfit:Regular',sans-serif] text-[44px] lg:text-[56px] leading-none font-normal text-[#0da9e1]/20 select-none">
                01
              </span>
              <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[22px] lg:text-[26px] text-white leading-snug">
                Nuestra misión
              </h2>
              <div className="w-10 h-[2px] bg-[#0da9e1] rounded-full" aria-hidden="true" />
              <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] leading-[1.75] text-white/70">
                Brindar servicios eficientes y de excelente calidad,
                coadyuvando al desarrollo de nuestros clientes con su
                participación activa y liderazgo compartido.
              </p>
            </div>

            {/* 02 — Visión */}
            <div className="bg-[#1a1a1a] lg:bg-[#222222] p-8 lg:p-12 flex flex-col gap-5 border border-white/8 lg:border-0 rounded-[16px] lg:rounded-none">
              <span className="font-['Outfit:Regular',sans-serif] text-[44px] lg:text-[56px] leading-none font-normal text-[#0da9e1]/20 select-none">
                02
              </span>
              <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[22px] lg:text-[26px] text-white leading-snug">
                Nuestra visión
              </h2>
              <div className="w-10 h-[2px] bg-[#0da9e1] rounded-full" aria-hidden="true" />
              <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] leading-[1.75] text-white/70">
                Ser reconocidos como el mejor socio estratégico de negocios por
                nuestros clientes, por nuestra eficacia y calidad de servicio.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          4. VALORES — grid 3 + 2
         ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-24 border-b border-white/8 bg-[#161616]">
        <div className="mx-auto max-w-[1200px] px-4">

          {/* Header */}
          <div className="max-w-[620px] mb-12">
            <p className="text-[11px] font-['Outfit:Bold',sans-serif] font-bold uppercase tracking-[0.18em] text-[#0da9e1] mb-4">
              Valores institucionales
            </p>
            <h2 className="font-['Outfit:Regular',sans-serif] font-normal text-[28px] lg:text-[38px] leading-[1.2] text-white mb-4">
              Valores que se traducen en conducta
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] leading-[1.7] text-white/60">
              Nuestros valores orientan la forma en que acompañamos a cada
              cliente: con responsabilidad, iniciativa, colaboración y una
              conducta profesional transparente.
            </p>
          </div>

          {/* Grid 3 + 2 centrados */}
          <div className="flex flex-wrap justify-center gap-5">
            {valores.map((v, idx) => (
              <div
                key={idx}
                className="bg-[#222222] border border-white/8 rounded-[10px] p-6 lg:p-7 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(33.333%-14px)] hover:border-white/15 hover:bg-[#252525] transition-all duration-200 flex flex-col gap-3"
              >
                <h3 className="font-['Outfit:Bold',sans-serif] font-bold text-[16px] lg:text-[17px] text-white leading-snug">
                  {v.title}
                </h3>
                <div className="w-6 h-[2px] bg-[#0da9e1] rounded-full shrink-0" aria-hidden="true" />
                <p className="font-['Outfit:Regular',sans-serif] text-[13px] lg:text-[14px] text-white/60 leading-[1.65]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          5. LIDERAZGO GERENCIAL — cards compactas
         ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-24 border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-4">

          {/* Header */}
          <div className="max-w-[640px] mb-12">
            <p className="text-[11px] font-['Outfit:Bold',sans-serif] font-bold uppercase tracking-[0.18em] text-[#0da9e1] mb-4">
              Equipo gerencial
            </p>
            <h2 className="font-['Outfit:Regular',sans-serif] font-normal text-[28px] lg:text-[38px] leading-[1.2] text-white mb-4">
              Un equipo gerencial con capacidades complementarias
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] leading-[1.7] text-white/60">
              La dirección de Bureau integra experiencia en gestión, contabilidad
              y soporte legal corporativo, lo que permite acompañar a las
              empresas con una mirada más completa sobre sus necesidades de
              negocio.
            </p>
          </div>

          {/* Cards 2x2 — ahora enlazan a /liderazgo/[slug] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {leaders.map((m) => (
              <Link
                key={m.slug}
                href={`${prefix}/liderazgo/${m.slug}`}
                className="group bg-[#1e1e1e] border border-white/8 rounded-[12px] overflow-hidden flex flex-col sm:flex-row hover:border-white/15 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
              >
                {/* Foto cuadrada compacta */}
                <div className="relative w-full sm:w-[140px] lg:w-[160px] aspect-square sm:aspect-auto shrink-0 overflow-hidden bg-black/20">
                  {m.flipped ? (
                    <div className="-scale-x-100 absolute inset-0">
                      <Image
                        src={m.img}
                        alt={`Foto de ${m.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="160px"
                      />
                    </div>
                  ) : (
                    <Image
                      src={m.img}
                      alt={`Foto de ${m.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="160px"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center gap-2 p-5 lg:p-6">
                  <h3 className="font-['Outfit:Bold',sans-serif] font-bold text-[16px] lg:text-[17px] text-white leading-tight">
                    {m.name}
                  </h3>
                  <p className="font-['Outfit:Medium',sans-serif] font-medium text-[11px] text-white/40 uppercase tracking-[0.1em]">
                    {m.role}
                  </p>
                  <div className="w-6 h-[2px] bg-[#0da9e1] rounded-full" aria-hidden="true" />
                  <p className="font-['Outfit:Regular',sans-serif] text-[13px] lg:text-[14px] text-[#0da9e1] leading-snug">
                    {m.aporte}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-['Outfit:Medium',sans-serif] font-medium text-white/40 group-hover:text-[#0da9e1] group-hover:gap-2.5 transition-all mt-1">
                    Ver perfil
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          6. CTA FINAL
         ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-24 bg-[#0d2238]">
        <div className="mx-auto max-w-[1200px] px-4 text-center flex flex-col items-center gap-8">
          <h2 className="font-['Outfit:Regular',sans-serif] font-normal text-[26px] lg:text-[36px] leading-[1.25] text-white max-w-[680px]">
            Conversemos sobre cómo Bureau Consulting puede acompañar la gestión
            de su empresa con criterio profesional, orden y continuidad
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