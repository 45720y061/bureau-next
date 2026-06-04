import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BrandHero } from "@/components/ui/BrandHero";
import { services, serviceCategories, getServicesByCategory } from "@/content/services";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  const title = "Servicios contables, legales y administrativos | Bureau Consulting";
  const description =
    "Acompañamiento contable, legal, administrativo, tributario, laboral, societario y de gestión para empresas que necesitan orden, continuidad y criterio profesional.";

  return {
    title,
    description,
    keywords: [
      "servicios contables para empresas",
      "outsourcing contable Perú",
      "administración de planillas",
      "gestión tributaria empresarial",
      "asesoría laboral para empresas",
      "asesoría societaria",
      "gestión administrativa empresarial",
      "consultoría de gestión y proyectos",
    ],
    alternates: {
      canonical: locale === "en" ? `/en/servicios` : `/servicios`,
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/servicios`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ServiciosPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const localePrefix = locale === "en" ? "/en" : "";
  const grouped = getServicesByCategory();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <BrandHero
        title="Servicios"
        subtitle="Acompañamos a empresas con servicios contables, legales, administrativos y de gestión, desde una lógica de trabajo que combina criterio profesional, calidad de servicio, eficiencia y cercanía ejecutiva."
        actions={
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
            <Link
              href={`${localePrefix}/contacto`}
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-[6px] bg-[#0da9e1] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0b94c8]"
            >
              Solicitar una conversación
            </Link>
            <a
              href="#grid-servicios"
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-[6px] border border-white/30 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Ver servicios en detalle
            </a>
          </div>
        }
      />

      {/* ── Introducción narrativa ────────────────────────────────────────── */}
      <section className="bg-[#1e1e1e] py-[48px] lg:py-[72px]">
        <div className="mx-auto w-full max-w-[800px] px-4 text-center">
          <p className="font-['Outfit:Regular',sans-serif] text-[17px] lg:text-[19px] leading-[1.75] text-white/80">
            En Bureau Consulting entendemos que una empresa necesita más que cumplir tareas operativas.
            Necesita información confiable, procesos ordenados, soporte oportuno y criterio profesional
            para tomar mejores decisiones. Por eso, nuestros servicios están diseñados para integrarse
            a la gestión del negocio y brindar respaldo en funciones que requieren precisión, seguimiento
            y experiencia.
          </p>
        </div>
      </section>

      {/* ── Bloque 4 categorías ───────────────────────────────────────────── */}
      <section className="bg-[#161616] py-[48px] lg:py-[64px]">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <h2 className="font-['Outfit:Regular',sans-serif] text-[30px] lg:text-[40px] text-white text-center mb-10 lg:mb-14">
            Áreas de servicio
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group bg-[#434343] hover:bg-[#4a4a4a] transition-colors rounded-[10px] w-[328px] lg:w-[270px] px-6 py-7 flex flex-col gap-3 border border-white/5 hover:border-[#0da9e1]/30"
              >
                <span className="inline-block w-fit text-[11px] font-medium tracking-widest uppercase text-[#0da9e1] bg-[rgba(13,169,225,0.08)] border border-[rgba(13,169,225,0.2)] rounded-full px-3 py-1">
                  {cat.title}
                </span>
                <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6]">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#0da9e1] text-[13px] font-medium mt-auto group-hover:gap-2 transition-all">
                  Ver detalle
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid de 7 servicios ───────────────────────────────────────────── */}
      <section id="grid-servicios" className="bg-[#1e1e1e] py-[48px] lg:py-[64px] scroll-mt-[58px]">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <h2 className="font-['Outfit:Regular',sans-serif] text-[30px] lg:text-[40px] text-white text-center mb-10 lg:mb-14">
            Todos los servicios
          </h2>
          <div className="flex flex-wrap gap-[24px] justify-center">
            {services.map((s) => {
              const cat = serviceCategories.find((c) => c.id === s.categoryId);
              return (
                <div
                  key={s.slug}
                  className="bg-[#2a2a2a] rounded-[10px] w-[328px] lg:w-[340px] px-6 py-7 flex flex-col gap-4 border border-white/5"
                >
                  {/* Category chip */}
                  {cat && (
                    <span className="inline-block w-fit text-[11px] font-medium tracking-widest uppercase text-[#0da9e1] bg-[rgba(13,169,225,0.08)] border border-[rgba(13,169,225,0.2)] rounded-full px-3 py-1">
                      {cat.title}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="h-[52px] w-[60px]">
                    <Image
                      alt=""
                      src={s.iconSrc}
                      width={60}
                      height={52}
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Outfit:Bold',sans-serif] font-bold text-[19px] lg:text-[20px] text-white leading-[1.3]">
                    {s.title}
                  </h3>

                  {/* Short */}
                  <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6] flex-1">
                    {s.short}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`${localePrefix}/servicios/${s.slug}`}
                    className="inline-flex items-center gap-2 text-[#0da9e1] text-[13px] font-medium hover:gap-3 transition-all mt-2 group"
                  >
                    Ver detalle
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke="#0DA9E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Desarrollo detallado por categoría ───────────────────────────── */}
      {grouped.map(({ category, services: catServices }, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-[56px] lg:py-[80px] scroll-mt-[58px] ${catIdx % 2 === 0 ? "bg-[#161616]" : "bg-[#1a1a1a]"}`}
        >
          <div className="mx-auto w-full max-w-[1000px] px-4">
            {/* Category heading */}
            <div className="mb-10 lg:mb-14">
              <span className="inline-block text-[11px] font-medium tracking-widest uppercase text-[#0da9e1] bg-[rgba(13,169,225,0.08)] border border-[rgba(13,169,225,0.2)] rounded-full px-4 py-1.5 mb-4">
                {category.title}
              </span>
              <h2 className="font-['Outfit:Regular',sans-serif] text-[28px] lg:text-[36px] text-white">
                {category.description}
              </h2>
            </div>

            {/* Services in this category */}
            <div className="flex flex-col gap-12 lg:gap-16">
              {catServices.map((s) => (
                <article
                  key={s.slug}
                  className="border border-white/8 rounded-[12px] bg-[#232323] overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-start gap-5 p-6 lg:p-8 border-b border-white/8">
                    <div className="shrink-0 h-[52px] w-[56px]">
                      <Image
                        alt=""
                        src={s.iconSrc}
                        width={56}
                        height={52}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-['Outfit:Bold',sans-serif] font-bold text-[22px] lg:text-[26px] text-white leading-[1.25] mb-2">
                        {s.title}
                      </h3>
                      <p className="font-['Outfit:Regular',sans-serif] text-[15px] lg:text-[16px] text-white/60 leading-[1.5]">
                        {s.bajada}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-8 grid md:grid-cols-2 gap-8">
                    {/* Left: intro + includes */}
                    <div>
                      <p className="font-['Outfit:Regular',sans-serif] text-[15px] text-white/75 leading-[1.75] mb-6">
                        {s.intro}
                      </p>
                      <h4 className="font-['Outfit:Bold',sans-serif] font-semibold text-[14px] text-[#0da9e1] uppercase tracking-wider mb-3">
                        Puede incluir
                      </h4>
                      <ul className="space-y-2">
                        {s.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 font-['Outfit:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6]"
                          >
                            <svg className="mt-1 shrink-0 w-3.5 h-3.5 text-[#0da9e1]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: benefit + CTA */}
                    <div className="flex flex-col gap-6">
                      <div className="bg-[#0da9e1]/8 border border-[#0da9e1]/20 rounded-[8px] p-5">
                        <h4 className="font-['Outfit:Bold',sans-serif] font-semibold text-[13px] text-[#0da9e1] uppercase tracking-wider mb-2">
                          Beneficio para el cliente
                        </h4>
                        <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/80 leading-[1.65]">
                          {s.benefit}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/60 italic mb-4 leading-[1.6]">
                          {s.cta}
                        </p>
                        <Link
                          href={`${localePrefix}/servicios/${s.slug}`}
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-[6px] border border-[#0da9e1]/40 px-5 py-2.5 text-[13px] font-medium text-[#0da9e1] transition-colors hover:bg-[#0da9e1] hover:text-white hover:border-[#0da9e1]"
                        >
                          Ver página completa
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA final ────────────────────────────────────────────────────── */}
      <section className="bg-[#003a61] py-[56px] lg:py-[80px]">
        <div className="mx-auto w-full max-w-[760px] px-4 text-center">
          <h2 className="font-['Outfit:Regular',sans-serif] text-[28px] lg:text-[38px] text-white leading-[1.3] mb-6">
            Un acompañamiento diseñado para su empresa.
          </h2>
          <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[17px] text-white/75 leading-[1.75] mb-3">
            Los servicios de Bureau Consulting pueden contratarse de manera específica o articularse
            dentro de una relación de acompañamiento más amplia, según las necesidades de cada empresa.
          </p>
          <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[17px] text-white/75 leading-[1.75] mb-10">
            Nuestro objetivo es brindar respaldo profesional en áreas que requieren orden, continuidad,
            criterio técnico y calidad de servicio, para que nuestros clientes puedan enfocarse en la
            gestión y desarrollo de su negocio.
          </p>
          <Link
            href={`${localePrefix}/contacto`}
            className="inline-flex min-h-[48px] items-center rounded-[6px] bg-[#0da9e1] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0b94c8]"
          >
            Solicite una conversación con Bureau Consulting
          </Link>
        </div>
      </section>
    </>
  );
}
