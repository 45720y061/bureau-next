import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";
import { localizedPath } from "@/lib/routes";

const imgIsotipoVariante1 = "/assets/isotipo-variante.png";

export default function Footer({ locale }: { locale?: string }) {
  return (
    <footer className="bg-[#003a61] relative shrink-0 w-full mt-auto text-white">
      {/* Top Border Divider */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[4px] bg-[#0da9e1]" />
      
      {/* 12-Column Desktop Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 p-[32px] lg:px-[60px] lg:py-[64px] relative w-full max-w-[1400px] mx-auto items-start">
        
        {/* Column 1: Logo Block (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
          <Link href={localizedPath(locale)} className="w-[180px] lg:w-[220px] h-auto relative shrink-0 focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none rounded-sm" aria-label="Bureau Consulting">
            <Image alt="Bureau Consulting" className="w-full object-contain" src={imgIsotipoVariante1} width={1366} height={768} sizes="220px" />
          </Link>
          <p className="font-['Outfit:Regular',sans-serif] text-[13px] lg:text-[14px] text-white/70 leading-relaxed max-w-[280px]">
            Socio Estratégico de Negocios para el Crecimiento de su Empresa.
          </p>
        </div>

        {/* Column 2: Navigation / Legal (col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full">
          <nav className="flex flex-col gap-3" aria-label="Navegación del pie de página">
            <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[16px] text-white">Institucional</h2>
            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
              <li><a href="#quienes-somos" className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/80 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm">Quiénes Somos</a></li>
              <li><a href="#servicios" className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/80 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm">Servicios</a></li>
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[16px] text-white">Legal</h2>
            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
              <li><a href="#" className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/80 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm">Política de Privacidad</a></li>
              <li><a href="#" className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/80 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Directory (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-4 w-full">
          <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[16px] text-white">Contacto</h2>
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            <li className="flex flex-col items-start gap-1">
              <strong className="text-white font-['Outfit:Bold',sans-serif] text-[14px] block tracking-wide">Teléfono</strong>
              <a href={contact.phoneTel} className="font-['Outfit:Regular',sans-serif] text-[14.5px] text-white/90 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm">
                {contact.phone}
              </a>
            </li>
            <li className="flex flex-col items-start gap-1">
              <strong className="text-white font-['Outfit:Bold',sans-serif] text-[14px] block tracking-wide">E-mail</strong>
              <a href={`mailto:${contact.email}`} className="font-['Outfit:Regular',sans-serif] text-[14.5px] text-white/90 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm">
                {contact.email}
              </a>
            </li>
            <li className="flex flex-col items-start gap-1">
              <strong className="text-white font-['Outfit:Bold',sans-serif] text-[14px] block tracking-wide">Dirección</strong>
              <p className="font-['Outfit:Regular',sans-serif] text-[14.5px] text-white/90 leading-relaxed max-w-[280px]">
                {contact.address}
              </p>
            </li>
          </ul>
        </div>

        {/* Column 4: Interactive Map Embed (col-span-4) */}
        <div className="lg:col-span-4 w-full h-[250px] lg:h-[280px] xl:h-[300px] relative rounded-[16px] overflow-hidden shadow-lg border border-white/10 shrink-0">
          <iframe 
            src={contact.mapsEmbed} 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="Mapa interactivo de la oficina de Bureau Consulting en Santiago de Surco"
          />
        </div>

      </div>
    </footer>
  );
}
