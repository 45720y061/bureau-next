import Image from "next/image";

const partnerLogos = [
  { id: "damma", src: "/assets/partner-logo.png", alt: "Socio Damma" },
  { id: "client1", src: "/assets/client-logo-1.svg", alt: "Socio Institucional" },
  { id: "client2", src: "/assets/client-logo-2.svg", alt: "Socio Institucional" },
  { id: "client3", src: "/assets/client-logo-3.svg", alt: "Socio Institucional" },
];

export default function Clients() {
  return (
    <section className="bg-[#434343] relative shrink-0 w-full lg:min-h-0" aria-labelledby="clients-heading">
      <div className="flex flex-col items-center size-full relative z-10 w-full px-[24px] lg:px-[60px] xl:px-[100px]">
        
        {/* Unified Banner Container */}
        <div className="flex flex-col gap-[32px] lg:gap-[48px] items-center w-full max-w-[1200px] border-t border-b border-white/5 py-[50px] lg:py-[80px] my-[10px] lg:my-[30px]">
          
          {/* Top: Proposition Logic */}
          <div className="flex flex-col gap-[16px] lg:gap-[20px] w-full max-w-[800px] text-center">
            <h2 id="clients-heading" className="font-['Outfit:Bold',sans-serif] leading-[1.25] text-[32px] lg:text-[40px] text-[#eee]">
              Relaciones Construidas con Confianza y Continuidad.
            </h2>
            <p className="font-['Outfit:Regular',sans-serif] leading-[1.6] text-[16px] lg:text-[18px] text-white/80">
              Brindamos acompañamiento profesional a organizaciones de diversos sectores que valoran el orden, la discreción y el criterio ejecutivo a lo largo del tiempo.
            </p>
          </div>

          {/* Bottom: 4-Column Logo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px] w-full lg:mt-6">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="bg-[#1e1e1e]/40 border border-white/10 rounded-[12px] p-[24px] xl:p-[32px] flex items-center justify-center w-full aspect-[4/3] lg:aspect-[3/2] shadow-lg hover:border-white/20 hover:bg-[#1e1e1e]/60 transition-all duration-500 group">
                <div className="relative shrink-0 w-full h-full max-w-[140px] max-h-[80px] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 mix-blend-luminosity group-hover:mix-blend-normal brightness-200 contrast-125 focus:mix-blend-normal">
                  <Image 
                    alt={logo.alt} 
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
                    src={logo.src} 
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
