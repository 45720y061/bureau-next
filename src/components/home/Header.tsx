"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import svgPaths from "@/imports/svg-tns2fd1uue";
import { localizedPath } from "@/lib/routes";

const imgIsotipo = "/assets/isotipo.png";

export default function Header({ locale }: { locale?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Focus utility class for consistency on light blue background
  const focusClasses = "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003a61] focus:outline-none rounded-[4px]";

  return (
    <>
      <header className="bg-[#0da9e1] h-[58px] relative shrink-0 w-full sticky top-0 z-50">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.588px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] py-[7px] relative size-full">
            {/* Logo */}
            <button 
              className={`h-[38.12px] relative shrink-0 w-[138.758px] cursor-pointer ${focusClasses}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Volver arriba"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image alt="Bureau Consulting Logo" className="absolute h-[231.64%] left-[-7.97%] max-w-none top-[-72%] w-[113.19%]" src={imgIsotipo} width={1366} height={768} priority sizes="139px" />
              </div>
            </button>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex gap-6 items-center" aria-label="Navegación principal">
              <Link href={localizedPath(locale, "/servicios")} className={`font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors ${focusClasses}`}>
                Servicios
              </Link>
              <Link href={localizedPath(locale, "/quienes-somos")} className={`font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors ${focusClasses}`}>
                Quiénes somos
              </Link>
              <Link href={localizedPath(locale, "/liderazgo")} className={`font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors ${focusClasses}`}>
                Liderazgo
              </Link>
              <Link href={localizedPath(locale, "/contacto")} className={`font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors ${focusClasses}`}>
                Contacto
              </Link>
            </nav>

            {/* Hamburger Menu - Mobile only */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden content-stretch flex items-start p-[8px] relative rounded-[4px] shrink-0 ${focusClasses}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú de navegación"
            >
              <div aria-hidden="true" className="absolute border border-[#003a61] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path clipRule="evenodd" d={svgPaths.pfb2be00} fill="#003A61" fillRule="evenodd" />
                </svg>
              </div>
            </button>

            {/* CTA Button - Hidden on mobile, shown on desktop */}
            <Link 
              href={localizedPath(locale, "/contacto")}
              className={`hidden md:flex content-stretch items-center justify-center px-[14px] py-[7px] relative rounded-[4px] shrink-0 bg-transparent hover:bg-[#003a61] transition-colors group ${focusClasses}`}
            >
              <div aria-hidden="true" className="absolute border-[#003a61] border-[1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#003a61] group-hover:text-white transition-colors">
                Reservar consulta
              </p>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden fixed top-[58px] left-0 right-0 bg-[#003a61] z-40 shadow-lg">
          <nav className="flex flex-col p-4 gap-4" aria-label="Navegación móvil">
            <Link 
              href={localizedPath(locale, "/servicios")}
              onClick={() => setMenuOpen(false)}
              className={`font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#003a61] outline-none rounded-sm`}
            >
              Servicios
            </Link>
            <Link 
              href={localizedPath(locale, "/quienes-somos")}
              onClick={() => setMenuOpen(false)}
              className={`font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#003a61] outline-none rounded-sm`}
            >
              Quiénes somos
            </Link>
            <Link 
              href={localizedPath(locale, "/liderazgo")}
              onClick={() => setMenuOpen(false)}
              className={`font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#003a61] outline-none rounded-sm`}
            >
              Liderazgo
            </Link>
            <Link 
              href={localizedPath(locale, "/contacto")}
              onClick={() => setMenuOpen(false)}
              className={`font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-[#003a61] outline-none rounded-sm`}
            >
              Contacto
            </Link>
            <Link 
              href={localizedPath(locale, "/contacto")}
              onClick={() => setMenuOpen(false)}
              className={`bg-[#0da9e1] text-[#003a61] text-center px-4 py-2 rounded-[4px] font-['Roboto:Regular',sans-serif] hover:bg-white transition-colors inline-block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#003a61] outline-none`}
            >
              Reservar consulta
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
