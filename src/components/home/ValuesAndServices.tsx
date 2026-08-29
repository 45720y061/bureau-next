"use client";

import Link from "next/link";
import svgPaths from "@/imports/svg-tns2fd1uue";
import { serviceCategories } from "@/content/services";
import { localizedPath } from "@/lib/routes";

// Íconos SVG de categoría (reutilizados del diseño existente)
const categoryIcons: Record<string, React.ReactNode> = {
  "servicios-contables": (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.462 35.462" aria-hidden="true">
      <path d={svgPaths.p104401b0} fill="#0DA9E1" />
    </svg>
  ),
  "servicios-legales": (
    <svg className="block size-full p-1" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0DA9E1" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  ),
  "servicios-administrativos": (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.462 28.3696" aria-hidden="true">
      <g clipPath="url(#clip0_home_adm)">
        <path d={svgPaths.p123a2a80} fill="#0DA9E1" />
      </g>
      <defs>
        <clipPath id="clip0_home_adm">
          <rect fill="white" height="28.3696" width="35.462" />
        </clipPath>
      </defs>
    </svg>
  ),
  "gestion-y-proyectos": (
    <svg className="block size-full p-0.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0DA9E1" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
    </svg>
  ),
};

export default function ValuesAndServices({ locale }: { locale?: string }) {
  const focusDarkBg =
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#1e1e1e] focus:outline-none rounded-[9.048px]";

  return (
    <section id="servicios" className="bg-[#1e1e1e] content-stretch flex flex-col gap-[27px] items-center py-[24px] lg:py-[60px] relative shrink-0 w-full">
      {/* Values Header */}
      <div className="content-stretch flex items-start justify-center min-w-[322px] overflow-clip relative shrink-0 w-full px-4">
        <h2 className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[36px] lg:leading-[48px] min-h-px min-w-px relative text-[36px] lg:text-[48px] text-center text-white">
          Nuestra forma de trabajar
        </h2>
      </div>

      {/* Value Cards — 3 + 2 layout on desktop, stacked on mobile */}
      <div className="content-start flex flex-wrap gap-[27px] items-stretch justify-center min-w-[328px] relative shrink-0 w-full max-w-[1200px] px-4">
        {[
          {
            icon: (
              // Perseverancia — progreso / camino hacia adelante
              <svg className="block size-full" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M3 17l4-8 4 4 4-6 4 6" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M21 12v7H3" />
              </svg>
            ),
            title: "Perseverancia",
            description:
              "Sostenemos una lógica de mejora continua, buscando soluciones y manteniendo el foco en los objetivos definidos.",
          },
          {
            icon: (
              // Confianza — escudo con check
              <svg className="block size-full p-0.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M9 12l2 2 4-4" />
              </svg>
            ),
            title: "Confianza",
            description:
              "Actuamos con responsabilidad, profesionalismo, rectitud y honradez en cada relación de trabajo.",
          },
          {
            icon: (
              // Iniciativa — flecha / impulso hacia adelante
              <svg className="block size-full p-0.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#0DA9E1" strokeWidth="1.8" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M12 8v4l3 3" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M16 6l-1.5 1.5" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeWidth="2"
                  d="M17 4l1 1-1.5 1.5" />
              </svg>
            ),
            title: "Iniciativa",
            description:
              "Nos anticipamos a las necesidades del cliente con acciones oportunas, criterio profesional y capacidad de respuesta.",
          },
          {
            icon: (
              // Trabajo en equipo — nodos conectados / red
              <svg className="block size-full p-0.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="5" r="2.2" stroke="#0DA9E1" strokeWidth="1.8" />
                <circle cx="5" cy="17" r="2.2" stroke="#0DA9E1" strokeWidth="1.8" />
                <circle cx="19" cy="17" r="2.2" stroke="#0DA9E1" strokeWidth="1.8" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeWidth="1.8"
                  d="M12 7.2v4.8M10.1 11.7L6.8 15M13.9 11.7l3.3 3.3" />
              </svg>
            ),
            title: "Trabajo en equipo",
            description:
              "Sumamos capacidades de forma articulada para brindar un servicio más completo, coordinado y consistente.",
          },
          {
            icon: (
              // Honestidad — balanza / equilibrio
              <svg className="block size-full p-0.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M12 3v18M5 21h14" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M5 8l-3 5h6L5 8zM19 8l-3 5h6l-3-5z" />
                <path stroke="#0DA9E1" strokeLinecap="round" strokeWidth="1.8"
                  d="M5 8h14" />
              </svg>
            ),
            title: "Honestidad",
            description:
              "Trabajamos con una conducta ética, transparente y responsable como base de cada intervención.",
          },
        ].map((value, idx) => (
          <article
            key={idx}
            className="bg-[#434343] content-stretch flex flex-col items-center justify-start px-[31px] py-[28px] lg:py-[32px] relative rounded-[6.304px] shrink-0 w-[328px] lg:w-[340px] hover:bg-[#4a4a4a] transition-colors gap-[12px] lg:gap-[14px]"
          >
            <div aria-hidden="true" className="absolute border-0 border-[#434343] border-solid inset-0 pointer-events-none rounded-[6.304px]" />
            <div className="relative shrink-0 size-[38px] lg:size-[44px]">{value.icon}</div>
            <h3 className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] text-[16px] lg:text-[18px] text-center text-white w-full">
              {value.title}
            </h3>
            <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.65] text-[13px] lg:text-[14px] text-white/75 text-center w-full">
              {value.description}
            </p>
          </article>
        ))}
      </div>


      {/* Services Header */}
      <div className="content-stretch flex flex-col items-center justify-center min-w-[322px] relative shrink-0 w-full px-4 mt-8 lg:mt-12">
        <h2 className="font-['Outfit:Regular',sans-serif] font-normal leading-[36px] lg:leading-[48px] min-w-[322px] relative shrink-0 text-[36px] lg:text-[48px] text-center text-white w-full whitespace-pre-wrap">
          Nuestros Servicios.
        </h2>
        <p className="mt-3 font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[18px] text-white/70 text-center max-w-[680px]">
          Acompañamos a empresas con servicios contables, legales, administrativos y de gestión desde una lógica de criterio profesional y cercanía ejecutiva.
        </p>
      </div>

      {/* 4 Category Cards — grid: 4 cols desktop · 2 cols tablet · 1 col mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full max-w-[1200px] px-4">
        {serviceCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`${localizedPath(locale, "/servicios")}#${cat.id}`}
            className={`bg-[#434343] flex flex-col items-start px-[24px] py-[28px] lg:px-[22px] lg:py-[32px] relative hover:bg-[#4a4a4a] transition-colors rounded-[9.048px] overflow-hidden group ${focusDarkBg}`}
          >
            {/* Icon — centrado */}
            <div className="mx-auto mb-5 size-[44px] lg:size-[48px] shrink-0">
              {categoryIcons[cat.id]}
            </div>

            {/* Title */}
            <h3 className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] text-[18px] lg:text-[19px] text-white mb-2 w-full">
              {cat.title}
            </h3>

            {/* Description */}
            <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.6] text-[13px] lg:text-[14px] text-white/75 flex-1 mb-5 w-full">
              {cat.description}
            </p>

            {/* CTA — anclado al fondo */}
            <span className="mt-auto inline-flex items-center gap-2 text-[#0da9e1] text-[13px] font-['Outfit:Medium',sans-serif] font-medium group-hover:gap-3 transition-all">
              Ver servicios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}
