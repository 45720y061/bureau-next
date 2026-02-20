import Image from "next/image";

const logoSrc = "/assets/isotipo-variante.png";
const rectangleSrc = "/assets/rectangle.png";

export function BrandFooter() {
  return (
    <footer className="bg-[#003a61]">
      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 border-4 border-[#0da9e1]" />

        <div className="mx-auto flex max-w-[1400px] flex-wrap items-start gap-[16px_24px] px-6 py-10 lg:gap-[32px_48px] lg:px-[60px] lg:py-[60px]">
          <div className="relative h-[85px] w-[312px] shrink-0 lg:h-[110px] lg:w-[400px]">
            <Image src={logoSrc} alt="Bureau Consulting" fill sizes="400px" className="object-contain" />
          </div>

          <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] gap-6">
            <div>
              <div className="text-[16px] font-bold text-white lg:text-[18px]">Legal</div>
              <div className="mt-3 text-[16px] font-bold text-white lg:text-[18px]">Servicios</div>
            </div>
          </div>

          <div className="w-[345px] shrink-0 text-white lg:w-[400px]">
            <div className="text-[16px] font-bold lg:text-[18px]">Contacto</div>
            <div className="mt-3 space-y-2 text-[16px] lg:text-[18px]">
              <div>+51 999 888 777</div>
              <div>contacto@bureauconsulting.pe</div>
              <div>Cal. el Boulevard Nro. 145 Oficina 302, Santiago de Surco, Lima - Perú</div>
            </div>
          </div>

          <div className="relative h-[152px] w-[345px] shrink-0 lg:h-[200px] lg:w-[400px]">
            <Image src={rectangleSrc} alt="" fill sizes="400px" className="object-cover" />
          </div>
        </div>
      </div>
    </footer>
  );
}