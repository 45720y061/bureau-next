"use client";

import { ContactForm } from "@/components/site/ContactForm";
import svgPaths from "@/imports/svg-tns2fd1uue";

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#003a61] relative shrink-0 w-full overflow-hidden" aria-labelledby="contact-heading">
      {/* Ambient Radial Graphic Element */}
      <div className="absolute top-0 right-[-10%] w-[70%] h-[90%] bg-[radial-gradient(ellipse_at_top_right,rgba(13,169,225,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start w-full max-w-[1200px] mx-auto p-[32px] lg:px-[60px] lg:py-[80px] relative z-10">
        {/* Left Column: Trust Panel & Directory */}
        <div className="flex flex-col items-start gap-10 lg:gap-16 w-full lg:pr-8">
          <div className="flex flex-col gap-6 w-full">
            <h2 id="contact-heading" className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.15] text-[#eee] text-[36px] lg:text-[48px] whitespace-pre-wrap">
              Conversemos Sobre las Necesidades de su Empresa<span className="text-[#0da9e1]">.</span>
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[18px] text-white/80 leading-relaxed max-w-[480px]">
              Comparta su consulta y nuestro equipo se pondrá en contacto para conocer el contexto de su empresa y definir el siguiente paso.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* Email Directory Anchor */}
            <a href="mailto:bureau@bureauconsulting.pe" className="flex items-center gap-4 group w-fit outline-none focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003a61] rounded-lg">
              <div className="w-[48px] h-[48px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0da9e1] group-hover:border-[#0da9e1] transition-all duration-300">
                <svg className="w-[18px] h-[18px] fill-[#0da9e1] group-hover:fill-[#003a61] transition-colors duration-300" viewBox="0 0 12 12" aria-hidden="true">
                  <path d={svgPaths.p2c8a0600} />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit:Semi_Bold',sans-serif] text-[12px] text-white/50 tracking-wide uppercase">Email Corporativo</span>
                <span className="font-['Outfit:Regular',sans-serif] text-[16px] text-white group-hover:text-[#0da9e1] transition-colors">bureau@bureauconsulting.pe</span>
              </div>
            </a>

            {/* Phone Directory Anchor */}
            <a href="tel:+514800415" className="flex items-center gap-4 group w-fit outline-none focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003a61] rounded-lg">
              <div className="w-[48px] h-[48px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0da9e1] group-hover:border-[#0da9e1] transition-all duration-300">
                <svg className="w-[20px] h-[20px] fill-[#0da9e1] group-hover:fill-[#003a61] transition-colors duration-300" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit:Semi_Bold',sans-serif] text-[12px] text-white/50 tracking-wide uppercase">Comuníquese Al</span>
                <span className="font-['Outfit:Regular',sans-serif] text-[16px] text-white group-hover:text-[#0da9e1] transition-colors">480-0415</span>
              </div>
            </a>

            {/* Address Location Info */}
            <div className="flex items-center gap-4 group w-fit mt-2">
              <div className="w-[48px] h-[48px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-[20px] h-[20px] fill-[#0da9e1]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit:Semi_Bold',sans-serif] text-[12px] text-white/50 tracking-wide uppercase">Oficina Principal</span>
                <span className="font-['Outfit:Regular',sans-serif] text-[15px] text-white max-w-[280px] leading-[1.4]">Cal. el Boulevard Nro. 145 Oficina 302,<br/>Santiago de Surco, Lima - Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form User Interface */}
        <div className="w-full relative shrink-0">
          <ContactForm className="max-w-none" cardClassName="rounded-[24px] p-[32px] lg:p-[48px]" />
        </div>
      </div>
    </section>
  );
}
