import Image from "next/image";
import Link from "next/link";
import { leaders } from "@/content/leadership";
import { localizedPath } from "@/lib/routes";

export default function Team({ locale }: { locale?: string }) {
  const focusDarkBg =
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#1a1a1a] outline-none rounded-[12px]";

  return (
    <section
      id="quienes-somos"
      className="bg-[#161616] relative shrink-0 w-full"
      aria-labelledby="team-heading"
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-10 lg:gap-16 items-center px-4 py-14 lg:py-20 w-full max-w-[1200px] mx-auto">

          {/* ── Section Header ───────────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-5 w-full max-w-[800px] text-center">
            <h2
              id="team-heading"
              className="font-['Outfit:Regular',sans-serif] font-normal text-[32px] lg:text-[46px] leading-[1.15] text-white"
            >
              Liderazgo que acompaña la gestión del negocio
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] leading-[1.7] text-white/65 max-w-[680px]">
              Nuestro equipo gerencial integra experiencia en dirección, gestión
              de proyectos, contabilidad y soporte legal corporativo para
              acompañar a cada cliente con criterio profesional, cercanía
              ejecutiva y visión de conjunto.
            </p>
          </div>

          {/* ── Team Grid ────────────────────────────────────────────────── */}
          {/*
            Desktop:  2×2 grid, cada card con foto izquierda + texto derecha
            Tablet:   2 columnas, foto arriba + texto abajo
            Mobile:   1 columna, foto arriba + texto abajo
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 w-full">
            {leaders.map((member) => (
              <Link
                key={member.slug}
                href={localizedPath(locale, `/liderazgo/${member.slug}`)}
                className="group bg-[#222222] border border-white/8 rounded-[12px] overflow-hidden flex flex-col hover:border-white/15 hover:bg-[#252525] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none"
              >
                {/* Photo */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-black/30 shrink-0">
                  {member.flipped ? (
                    <div className="-scale-x-100 absolute inset-0">
                      <Image
                        alt={`Foto de ${member.name}`}
                        src={member.img}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                      />
                    </div>
                  ) : (
                    <Image
                      alt={`Foto de ${member.name}`}
                      src={member.img}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    />
                  )}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(34,34,34,0.85) 0%, transparent 100%)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Info block */}
                <div className="flex flex-col gap-3 px-6 py-6 lg:px-7 lg:py-7">
                  <h3 className="font-['Outfit:Bold',sans-serif] font-bold text-[19px] lg:text-[21px] text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-['Outfit:Medium',sans-serif] font-medium text-[11px] lg:text-[12px] text-white/45 uppercase tracking-[0.1em]">
                    {member.role}
                  </p>
                  <div className="w-8 h-[2px] bg-[#0da9e1] rounded-full" aria-hidden="true" />
                  <p className="font-['Outfit:Medium',sans-serif] font-medium text-[14px] lg:text-[15px] text-[#0da9e1] leading-snug">
                    {member.aporte}
                  </p>
                  <p className="font-['Outfit:Regular',sans-serif] font-normal text-[13px] lg:text-[14px] text-white/65 leading-[1.65]">
                    {member.bio}
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

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div className="flex items-center justify-center w-full">
            <a
              href="#contacto"
              className={`inline-flex items-center justify-center bg-transparent border border-[#0da9e1] rounded-[6px] px-8 py-3.5 hover:bg-[#0da9e1] transition-colors group ${focusDarkBg}`}
            >
              <span className="font-['Outfit:Medium',sans-serif] font-medium text-[15px] lg:text-[16px] text-[#0da9e1] group-hover:text-[#003a61] transition-colors">
                Conversar con el equipo
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
