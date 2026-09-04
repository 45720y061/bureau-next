"use client";

import Image from "next/image";

const imgBanner = "/assets/banner.png";
const imgTrustBeacon = "/assets/trust-beacon.png";

export default function Hero() {
  return (
    <section className="w-full bg-[#003a61] relative overflow-hidden" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1440px] mx-auto min-h-screen lg:min-h-[700px]">
        
        {/* Left Column: Text Engine & Trust Beacon */}
        <div className="lg:col-span-7 flex flex-col justify-center px-[24px] lg:px-[80px] xl:px-[100px] py-[60px] lg:py-[120px] relative z-10 w-full">
          <div className="flex flex-col gap-6 lg:gap-8 max-w-[680px]">
            
            {/* Master Headline */}
            <h1 id="hero-title" className="font-['Outfit:Bold',sans-serif] text-[38px] lg:text-[56px] xl:text-[62px] leading-[1.15] text-[#eee] whitespace-pre-wrap tracking-tight">
              Socio Estratégico de Negocios para el Crecimiento de su Empresa<span className="text-[#0da9e1]">.</span>
            </h1>
            
            {/* Supporting Context Copy */}
            <p className="font-['Outfit:Regular',sans-serif] text-[16px] lg:text-[20px] leading-[1.6] text-white/80 max-w-[560px]">
              Acompañamiento profesional apoyado en el orden, criterio ejecutivo y continuidad operativa.
            </p>
            
            {/* Executive CTA Matrix */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-4">
              <a 
                href="#contacto"
                className="bg-[#0da9e1] text-white border border-[#0da9e1] font-['Outfit:Bold',sans-serif] text-[15px] lg:text-[16px] px-[28px] py-[16px] rounded-[10px] hover:bg-white hover:text-[#0da9e1] hover:border-white transition-all duration-300 shadow-[0_8px_20px_rgba(13,169,225,0.25)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#003a61] outline-none shrink-0"
              >
                Conversemos
              </a>
              <a 
                href="mailto:bureau@bureauconsulting.pe"
                className="bg-transparent text-white border-[2px] border-white/25 font-['Outfit:Bold',sans-serif] text-[15px] lg:text-[16px] px-[28px] py-[15px] rounded-[10px] hover:border-white hover:bg-white/5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#003a61] outline-none shrink-0"
              >
                Escríbanos
              </a>
            </div>

            {/* Ambient Credibility Cue */}
            <div className="mt-10 lg:mt-12 flex flex-col gap-3 lg:gap-4 w-full">
              <span className="font-['Outfit:Regular',sans-serif] text-[14px] lg:text-[15px] text-white/60 tracking-wide">
                Trayectoria y respaldo
              </span>
              <div className="h-[38px] lg:h-[48px] relative w-fit opacity-80 hover:opacity-100 transition-opacity duration-500">
                <Image 
                  alt="Certificaciones y afiliaciones institucionales" 
                  className="h-full w-auto object-contain pointer-events-none" 
                  src={imgTrustBeacon} 
                  width={600} 
                  height={150} 
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Environmental Photograph */}
        <div className="lg:col-span-5 relative w-full h-[380px] lg:h-auto min-h-[380px] lg:min-h-[700px] flex overflow-hidden">
           {/* Mobile Gradient Fade-in Overlay */}
           <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-[#003a61] to-transparent lg:hidden z-10 pointer-events-none" />
           
           {/* Desktop Feathered Seam Layer: Softens the hard boundary between the text panel and the photograph */}
           <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-[180px] bg-gradient-to-r from-[#003a61] via-[#003a61]/70 to-transparent z-10 pointer-events-none" />
           
           <Image 
            alt="Vista de la oficina de Bureau Consulting" 
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]" 
            src={imgBanner}
            fill
            priority 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
