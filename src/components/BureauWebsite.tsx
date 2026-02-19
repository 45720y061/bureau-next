"use client";

import Image from "next/image";
import { useState, useRef, type FormEvent, type RefObject } from "react";

import svgPaths from "@/imports/svg-tns2fd1uue";

// Static assets are served from /public/assets (Next.js)
const imgIsotipo = "/assets/isotipo.png";
const imgBanner = "/assets/banner.png";
const imgTrustBeacon = "/assets/trust-beacon.png";
const imgIconOutCont = "/assets/icon-out-cont.png";
const imgOutAdm = "/assets/out-adm.png";
const imgOutPlaIcon = "/assets/out-pla-icon.png";
const imgIconAsSocietaria = "/assets/icon-as-societaria.png";
const imgIconGestLab = "/assets/icon-gest-lab.png";
const imgIconConsProy = "/assets/icon-cons-proy.png";
const imgIconGestTrib = "/assets/icon-gest-trib.png";
const imgPartnerLogo = "/assets/partner-logo.png";
const imgFrydaRetrato = "/assets/fryda-retrato.png";
const imgRochiRetrato = "/assets/rochi-retrato.png";
const imgJuanRetrato = "/assets/juan-retrato.png";
const imgAlejandroIa = "/assets/alejandro-ia.png";
const imgOficina21 = "/assets/oficina-21.png";
const imgIsotipoVariante1 = "/assets/isotipo-variante.png";
const imgRectangle = "/assets/rectangle.png";

// Types for form data
interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
}

export default function BureauWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [],
  });

  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert(`Mensaje enviado! Nos pondremos en contacto con usted pronto.\n\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}`);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="bg-[#434343] content-stretch flex flex-col items-center relative size-full">
      {/* Header/Toolbar */}
      <div className="bg-[#0da9e1] h-[58px] relative shrink-0 w-full sticky top-0 z-50">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.588px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] py-[7px] relative size-full">
            {/* Logo */}
            <div className="h-[38.12px] relative shrink-0 w-[138.758px] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image alt="Bureau Consulting" className="absolute h-[231.64%] left-[-7.97%] max-w-none top-[-72%] w-[113.19%]" src={imgIsotipo} width={1366} height={768} priority sizes="139px" />
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex gap-6 items-center">
              <button onClick={() => scrollToSection(servicesRef)} className="font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection(aboutRef)} className="font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors">
                Nosotras
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="font-['Roboto:Regular',sans-serif] text-[#003a61] hover:text-white transition-colors">
                Contacto
              </button>
            </nav>

            {/* Hamburger Menu - Mobile only */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden content-stretch flex items-start p-[8px] relative rounded-[4px] shrink-0"
            >
              <div aria-hidden="true" className="absolute border border-[#003a61] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pfb2be00} fill="#003A61" fillRule="evenodd" />
                </svg>
              </div>
            </button>

            {/* CTA Button - Hidden on mobile, shown on desktop */}
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="hidden md:flex content-stretch items-center justify-center px-[14px] py-[7px] relative rounded-[4px] shrink-0 bg-transparent hover:bg-[#003a61] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-[#003a61] border-[1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#003a61] hover:text-white transition-colors">
                Reservar Consulta
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[58px] left-0 right-0 bg-[#003a61] z-40 shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => scrollToSection(servicesRef)}
              className="font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors"
            >
              Nosotras
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="font-['Roboto:Regular',sans-serif] text-white text-left py-2 hover:text-[#0da9e1] transition-colors"
            >
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="bg-[#0da9e1] text-[#003a61] px-4 py-2 rounded-[4px] font-['Roboto:Regular',sans-serif] hover:bg-white transition-colors"
            >
              Reservar Consulta
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <div className="content-stretch flex flex-col items-center min-w-[393px] lg:min-w-full relative shrink-0 w-full">
        <div className="bg-[#003a61] content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[15px] items-center justify-center py-[41px] lg:py-[60px] relative shrink-0 w-[377.033px] lg:w-[800px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[48px] lg:leading-[64px] relative shrink-0 text-[48px] lg:text-[64px] text-center text-white w-full whitespace-pre-wrap">
                Soluciones Contables Integrales para su Empresa
              </p>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16.484px] lg:leading-[24px] relative shrink-0 text-[#f3f4f6] text-[10.597px] lg:text-[16px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Transformamos desafíos financieros en oportunidades de crecimiento con tecnología y expertise.
              </p>
            </div>
            <div className="content-stretch flex gap-[25.181px] items-center justify-center relative shrink-0 w-full flex-wrap">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#0da9e1] content-stretch flex items-center justify-center px-[14.129px] py-[7.065px] relative rounded-[3.532px] shrink-0 hover:bg-white transition-colors group"
              >
                <div aria-hidden="true" className="absolute border-[#003a61] border-[0.589px] border-solid inset-0 pointer-events-none rounded-[3.532px]" />
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14.129px] relative shrink-0 text-[#003a61] text-[9.352px] lg:text-[14px] group-hover:text-[#003a61]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Reservar Consulta
                </p>
              </button>
              <a 
                href="mailto:hola@bureauconsulting.pe"
                className="bg-[#003a61] content-stretch flex items-center justify-center px-[14.718px] py-[6.476px] relative rounded-[3.532px] shrink-0 hover:bg-[#0da9e1] transition-colors group"
              >
                <div aria-hidden="true" className="absolute border-[0.589px] border-solid border-white inset-0 pointer-events-none rounded-[3.532px]" />
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14.129px] relative text-[9.419px] lg:text-[14px] text-white whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Enviar Correo
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="content-stretch flex flex-col h-[217px] lg:h-[400px] items-start justify-between max-w-full relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image alt="Bureau Consulting Office" className="absolute h-full left-1/2 -translate-x-1/2 max-w-none object-cover w-full" src={imgBanner} width={1366} height={768} priority sizes="100vw" />
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-[#434343] content-stretch flex h-[102px] lg:h-[150px] items-center justify-center relative shrink-0 w-full">
          <div className="h-full relative shrink-0 w-[180px] lg:w-[250px]">
            <Image alt="Certifications" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgTrustBeacon} width={1366} height={768} sizes="180px" />
          </div>
        </div>
      </div>

      {/* Values & Services Section */}
      <div ref={servicesRef} className="bg-[#1e1e1e] content-stretch flex flex-col gap-[27px] items-center py-[24px] lg:py-[60px] relative shrink-0 w-full">
        {/* Values Header */}
        <div className="content-stretch flex items-start justify-center min-w-[322px] overflow-clip relative shrink-0 w-full px-4">
          <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[36px] lg:leading-[48px] min-h-px min-w-px relative text-[36px] lg:text-[48px] text-center text-white whitespace-pre-wrap">
            Valores que practicamos.
          </p>
        </div>

        {/* Value Cards */}
        <div className="content-start flex flex-wrap gap-[27px] items-start justify-center min-w-[328px] relative shrink-0 w-full max-w-[1200px] px-4">
          {[
            {
              icon: <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.462 35.462">
                <path d={svgPaths.p104401b0} fill="#0DA9E1" />
              </svg>,
              title: "Inicio Ágil de Operaciones",
              description: "Constituimos y ponemos en marcha su empresa en Perú en semanas, no meses, con procesos digitales y sin fricciones."
            },
            {
              icon: <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3696 28.3696">
                <path d={svgPaths.p36dd3c00} fill="#0DA9E1" />
              </svg>,
              title: "Cumplimiento Garantizado",
              description: "Nos ocupamos de la contabilidad y reportes ante SUNAT, asegurando exactitud y respaldo frente a auditorías o revisiones."
            },
            {
              icon: <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.462 28.3696">
                <g clipPath="url(#clip0_1_1284)">
                  <path d={svgPaths.p123a2a80} fill="#0DA9E1" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1284">
                    <rect fill="white" height="28.3696" width="35.462" />
                  </clipPath>
                </defs>
              </svg>,
              title: "Soporte Personalizado",
              description: "Asignamos un equipo dedicado que entiende su negocio y adapta soluciones a su realidad operativa."
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-[#434343] content-stretch flex flex-col h-[181px] lg:h-[220px] items-center justify-center px-[31px] py-[17px] relative rounded-[6.304px] shrink-0 w-[328px] lg:w-[360px] hover:bg-[#555] transition-colors">
              <div aria-hidden="true" className="absolute border-0 border-[#434343] border-solid inset-0 pointer-events-none rounded-[6.304px]" />
              <div className="content-stretch flex flex-col gap-[9px] lg:gap-[12px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[35.462px] lg:size-[45px]">
                  {value.icon}
                </div>
                <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[22.065px] lg:leading-[28px] min-w-full relative shrink-0 text-[15.761px] lg:text-[18px] text-center text-white w-[min-content] whitespace-pre-wrap">
                  {value.title}
                </p>
                <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18.913px] lg:leading-[24px] min-w-full relative shrink-0 text-[12.609px] lg:text-[14px] text-white w-[min-content] whitespace-pre-wrap">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Header */}
        <div className="content-stretch flex flex-col items-center justify-center min-w-[322px] relative shrink-0 w-full px-4 mt-8">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[36px] lg:leading-[48px] min-w-[322px] relative shrink-0 text-[36px] lg:text-[48px] text-center text-white w-full whitespace-pre-wrap">
            Servicios que entregan resultados.
          </p>
        </div>

        {/* Service Cards */}
        <div className="content-start flex flex-wrap gap-[27px] items-start justify-center relative shrink-0 w-full max-w-[1200px] px-4">
          {[
            { img: imgIconOutCont, title: "Outsourcing Contable", desc: "Precisión y claridad en registros, reportes y estados financieros." },
            { img: imgOutAdm, title: "Outsourcing Administrativo", desc: "Procesos internos más ágiles y eficientes." },
            { img: imgOutPlaIcon, title: "Outsourcing de Planilla", desc: "Gestión segura y confiable de sueldos y beneficios." },
            { img: imgIconAsSocietaria, title: "Asesoría Societaria", desc: "Constitución, modificación y liquidación de sociedades." },
            { img: imgIconGestLab, title: "Gestión Laboral", desc: "Cumplimiento normativo y asesoría en contratación." },
            { img: imgIconConsProy, title: "Consultoría y Proyectos", desc: "Planes estratégicos y capacitación para crecer con solidez." },
            { img: imgIconGestTrib, title: "Gestión Tributaria", desc: "Estrategias fiscales eficientes y soporte en fiscalizaciones." },
          ].map((service, idx) => (
            <div key={idx} className="bg-[#434343] content-stretch flex flex-col h-[181px] lg:h-[220px] items-center justify-center px-[25px] py-[12px] relative rounded-[9.048px] shrink-0 w-[328px] lg:w-[360px] hover:bg-[#555] transition-colors cursor-pointer">
              <div aria-hidden="true" className="absolute border-0 border-[#434343] border-solid inset-0 pointer-events-none rounded-[9.048px]" />
              <div className="h-[62px] lg:h-[80px] w-[81px] lg:w-[100px] mb-3">
                <Image alt={service.title} className="h-full w-full object-contain" src={service.img} width={1366} height={768} sizes="100px" />
              </div>
              <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.669px] text-[22.621px] lg:text-[26px] text-center text-white mb-2">
                {service.title}
              </p>
              <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[21.4px] lg:leading-[24px] text-[14.26px] lg:text-[16px] text-center text-white whitespace-pre-wrap">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-[#434343] min-h-[275px] lg:min-h-[350px] relative shrink-0 w-full">
        <div className="flex flex-col items-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] lg:gap-[20px] items-center min-h-[inherit] px-[49px] py-[24px] lg:py-[60px] relative w-full max-w-[1200px]">
            <div className="content-stretch flex flex-col font-normal gap-[21px] items-center relative shrink-0 text-center text-white w-full whitespace-pre-wrap">
              <p className="font-['Outfit:Regular',sans-serif] leading-[36px] lg:leading-[48px] relative shrink-0 text-[36px] lg:text-[48px] w-full">
                La confianza de nuestros clientes nos respalda
              </p>
              <p className="font-['Roboto:Regular',sans-serif] leading-[28px] lg:leading-[32px] relative shrink-0 text-[18px] lg:text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Durante más de tres décadas hemos acompañado a empresas de distintos sectores en sus procesos contables, tributarios y administrativos. Nuestra relación a largo plazo con cada cliente es el mejor reflejo de nuestro compromiso y precisión.
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0">
              <div className="content-stretch flex flex-col h-[104px] lg:h-[140px] items-start p-[6.859px] relative shrink-0 w-[138px] lg:w-[180px]">
                <div className="aspect-[234/166] relative shrink-0 w-full">
                  <Image alt="Damma Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerLogo} width={234} height={166} sizes="120px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div ref={aboutRef} className="bg-[#1e1e1e] relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center p-[24px] lg:p-[60px] relative w-full max-w-[1400px]">
            {/* Section Header */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] font-normal leading-[36px] lg:leading-[48px] min-h-px min-w-px relative text-[36px] lg:text-[48px] text-center text-white whitespace-pre-wrap">
                Nuestra historia, su confianza
              </p>
            </div>

            {/* History Text */}
            <div className="content-stretch flex items-start justify-center py-[10px] relative shrink-0 w-full">
              <div className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] lg:leading-[32px] min-h-px min-w-px relative self-stretch text-[18px] lg:text-[20px] text-center text-white whitespace-pre-wrap max-w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="mb-4">Bureau Consulting nació hace más de 30 años de la visión de Fryda Argote, especialista en contabilidad y tributación.</p>
                <p>Hoy, nuestro equipo —conformado en su mayoría por mujeres profesionales— combina experiencia, eficiencia y modernidad para acompañar a las empresas en sus retos financieros y administrativos.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="h-[44px] relative shrink-0 w-full flex justify-center">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#0da9e1] h-[44px] rounded-[20px] w-[304px] hover:bg-white transition-colors group relative"
              >
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#003a61] text-[16px] text-center group-hover:text-[#003a61]">
                  Conozca más sobre Nosotras
                </p>
              </button>
            </div>

            {/* Team Cards */}
            <div className="content-start flex flex-wrap gap-[24px] lg:gap-[40px] items-start justify-center relative shrink-0 w-full">
              {[
                {
                  img: imgFrydaRetrato,
                  w: 666,
                  h: 766,
                  name: "Fryda Argote",
                  role: "Chief Executive Officer",
                  bio: "Fundadora y CEO de Bureau Consulting, con más de 30 años de experiencia en contabilidad y tributación. Lidera la firma con visión estratégica y compromiso con la excelencia.",
                  buttonText: "Agenda una reunión con Fryda"
                },
                {
                  img: imgRochiRetrato,
                  w: 652,
                  h: 768,
                  name: "Roxana Argote Lozano",
                  role: "Legal Manager",
                  bio: "Gerente Legal de Bureau Consulting, con más de 30 años de experiencia en derecho corporativo y asesoría empresarial. Lidera el área legal con visión estratégica y compromiso con la excelencia.",
                  buttonText: "Agenda una reunión con Roxana",
                  flipped: true
                },
                {
                  img: imgJuanRetrato,
                  w: 652,
                  h: 768,
                  name: "Juan Ayarza Richter",
                  role: "Project Manager",
                  bio: "Project Manager de Bureau Consulting, con amplia experiencia en gestión pública y privada. Lidera proyectos con enfoque estratégico, eficiencia operativa y compromiso con la excelencia.",
                  buttonText: "Agenda una reunión con Juan",
                  flipped: true
                },
                {
                  img: imgAlejandroIa,
                  w: 658,
                  h: 768,
                  name: "Alejandro Rocha",
                  role: "Accounting Manager",
                  bio: "Contador Público con más de 20 años de experiencia en PwC y EY. Dirige el área contable de Bureau Consulting con un enfoque en precisión y valor estratégico.",
                  buttonText: "Agenda una reunión con Alejandro"
                }
              ].map((member, idx) => (
                <div key={idx} className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[328px] lg:w-[380px]">
                  <div className="bg-[#003a61] content-stretch flex flex-col gap-[24px] h-[403px] lg:h-[450px] items-center justify-center px-[26.867px] py-[24px] relative rounded-[14.34px] shrink-0 w-full hover:shadow-xl transition-shadow">
                    <div aria-hidden="true" className="absolute border-[#003a61] border-[0.717px] border-solid inset-0 pointer-events-none rounded-[14.34px]" />
                    
                    {/* Avatar */}
                    <div className="h-[236.662px] lg:h-[260px] relative shrink-0 w-[164.905px] lg:w-[180px]">
                      <div className={`absolute h-[192.209px] lg:h-[210px] left-0 rounded-[14.34px] top-0 w-full ${member.flipped ? 'flex items-center justify-center' : ''}`}>
                        {member.flipped ? (
                          <div className="-scale-y-100 flex-none rotate-180">
                            <div className="h-[192.868px] lg:h-[210px] relative rounded-[14.34px] w-[164.905px] lg:w-[180px]">
                              <Image alt={member.name} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14.34px] size-full" src={member.img} width={member.w} height={member.h} sizes="180px" />
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14.34px]">
                            <Image alt={member.name} className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={member.img} width={member.w} height={member.h} sizes="180px" />
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="absolute h-[35.849px] left-0 top-[200.81px] lg:top-[220px] w-full">
                        <div className="h-[31.547px] leading-[0] text-[11.472px] lg:text-[13px] text-center whitespace-nowrap">
                          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center text-white">
                            <p className="leading-[1.4]">{member.name}</p>
                          </div>
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center text-[rgba(255,255,255,0.8)] mt-1">
                            <p className="leading-[1.4]">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[14.34px] lg:text-[15px] text-white w-full lg:w-[240px] whitespace-pre-wrap">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => scrollToSection(contactRef)}
                    className="bg-[#0da9e1] h-[44px] relative rounded-[20px] shrink-0 w-[304px] lg:w-full hover:bg-white transition-colors group"
                  >
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#003a61] text-[16px] text-center group-hover:text-[#003a61]">
                      {member.buttonText}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Office Images */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full overflow-hidden">
          <div className="content-stretch flex items-center justify-center relative w-full">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="content-stretch flex flex-col items-start max-w-[393px] lg:max-w-none flex-1 relative h-[280px] lg:h-[400px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Image alt="Bureau Office" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgOficina21} width={1366} height={768} sizes="(max-width: 1024px) 100vw, 600px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div ref={contactRef} className="bg-[#003a61] relative rounded-[12px] shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-center p-[24px] lg:p-[60px] relative w-full max-w-[1200px]">
            {/* Contact Header */}
            <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] lg:leading-[52px] relative shrink-0 text-[#eee] text-[36px] lg:text-[48px] text-center w-full whitespace-pre-wrap">
              <span className="leading-[normal]">
                Contacte con un <br className="lg:hidden" />experto Bureau
              </span>
              <span className="leading-[normal] text-[#0da9e1]">.</span>
            </p>

            {/* Form */}
            <div className="bg-white max-w-[544.9999389648438px] relative rounded-[12.255px] shrink-0 w-full">
              <div className="flex flex-col items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[24px] items-center max-w-[inherit] p-[24px] lg:p-[40px] relative w-full">
                  {/* Service Chips */}
                  <div className="content-start flex flex-wrap gap-[3px_3.064px] items-start relative shrink-0 w-full">
                    {[
                      "Out. Contable",
                      "Out. Administrativo",
                      "Out. de Planillas",
                      "Gest. Tributaria",
                      "Gest. Laboral",
                      "Proyectos",
                      "Ases. Societaria",
                      "Otros"
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`h-[29.615px] lg:h-[36px] relative rounded-[4.085px] shrink-0 w-[95.994px] lg:w-[120px] transition-all ${
                          formData.services.includes(service)
                            ? 'bg-[#0da9e1] border-[#0da9e1]'
                            : 'bg-transparent'
                        }`}
                      >
                        <div aria-hidden="true" className={`absolute border-[1.021px] border-solid inset-0 pointer-events-none rounded-[4.085px] ${
                          formData.services.includes(service)
                            ? 'border-[#0da9e1]'
                            : 'border-[rgba(13,169,225,0.3)]'
                        }`} />
                        <p className={`font-['Outfit:Medium',sans-serif] font-medium leading-[normal] text-[10.212px] lg:text-[12px] text-center ${
                          formData.services.includes(service)
                            ? 'text-white'
                            : 'text-[rgba(13,169,225,0.3)]'
                        }`}>
                          {service}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Form Fields */}
                  <div className="content-stretch flex flex-col gap-[24.509px] items-center justify-center relative shrink-0 w-full">
                    {/* Name Input */}
                    <div className="content-stretch flex flex-col gap-[6.127px] items-start relative shrink-0 w-full">
                      <label className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10.212px] lg:text-[12px] text-[rgba(13,169,225,0.3)]">
                        Su nombre
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b-[1.53px] border-[#0DA9E1]/30 pb-2 text-[#003a61] outline-none focus:border-[#0DA9E1] transition-colors"
                        required
                      />
                    </div>

                    {/* Company Input */}
                    <div className="content-stretch flex flex-col gap-[6.127px] items-start relative shrink-0 w-full">
                      <label className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10.212px] lg:text-[12px] text-[rgba(13,169,225,0.3)]">
                        Nombre de la empresa
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-b-[1.53px] border-[#0DA9E1]/30 pb-2 text-[#003a61] outline-none focus:border-[#0DA9E1] transition-colors"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="content-stretch flex flex-col gap-[6.127px] items-start relative shrink-0 w-full">
                      <label className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10.212px] lg:text-[12px] text-[rgba(13,169,225,0.3)]">
                        Su e-mail
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b-[1.53px] border-[#0DA9E1]/30 pb-2 text-[#003a61] outline-none focus:border-[#0DA9E1] transition-colors"
                        required
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="content-stretch flex flex-col gap-[6.127px] items-start relative shrink-0 w-full">
                      <label className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10.212px] lg:text-[12px] text-[rgba(13,169,225,0.3)]">
                        +51 999 999 999
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b-[1.53px] border-[#0DA9E1]/30 pb-2 text-[#003a61] outline-none focus:border-[#0DA9E1] transition-colors"
                        placeholder="+51"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <button
                      type="submit"
                      className="bg-white content-stretch flex gap-[2.17px] items-center px-[19.531px] py-[8.68px] relative rounded-[5.787px] shrink-0 hover:bg-[#0da9e1] transition-colors group"
                    >
                      <div aria-hidden="true" className="absolute border-[0.723px] border-[rgba(13,169,225,0.3)] border-solid inset-0 pointer-events-none rounded-[5.787px]" />
                      <div className="h-[8.68px] relative shrink-0 w-[8.681px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.68058 8.68039">
                          <path d={svgPaths.p8badfc0} fill="rgba(13,169,225,0.3)" fillOpacity="1" className="group-hover:fill-white" />
                        </svg>
                      </div>
                      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[7.234px] lg:text-[10px] text-[rgba(13,169,225,0.3)] text-center group-hover:text-white">
                        Enviar Mensaje
                      </p>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full">
              {/* Email */}
              <a href="mailto:hola@bureauconsulting.pe" className="h-[37px] lg:h-[44px] relative rounded-[8px] shrink-0 w-[225.5px] lg:w-[280px] hover:bg-[#0da9e1]/10 transition-colors group">
                <div aria-hidden="true" className="absolute border-[#0da9e1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute left-[12px] size-[12px] lg:size-[16px] top-[12.5px] lg:top-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path d={svgPaths.p2c8a0600} fill="#0DA9E1" />
                  </svg>
                </div>
                <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[normal] left-[32px] lg:left-[40px] text-[10px] lg:text-[14px] text-white top-[12px] lg:top-[14px]">
                  hola@bureauconsulting.pe
                </p>
              </a>

              {/* Phone */}
              <a href="tel:+51999456789" className="h-[37px] lg:h-[44px] relative rounded-[8px] shrink-0 w-[225.5px] lg:w-[280px] hover:bg-[#0da9e1]/10 transition-colors group">
                <div aria-hidden="true" className="absolute border-[#0da9e1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute left-[12px] size-[12px] lg:size-[16px] top-[12.5px] lg:top-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g clipPath="url(#clip0_1_1276)">
                      <path clipRule="evenodd" d={svgPaths.p9c3d7f0} fill="#0DA9E1" fillRule="evenodd" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1276">
                        <rect fill="white" height="12" width="12" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[normal] left-[32px] lg:left-[40px] text-[10px] lg:text-[14px] text-white top-[12px] lg:top-[14px]">
                  +51 999 456 789
                </p>
              </a>

              {/* Address */}
              <div className="h-[50px] lg:h-[60px] relative rounded-[8px] shrink-0 w-[225.5px] lg:w-[280px]">
                <div aria-hidden="true" className="absolute border-[#0da9e1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[14px] lg:h-[18px] left-[12px] top-[18px] lg:top-[21px] w-[12px] lg:w-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                    <path d={svgPaths.p5c7e040} fill="#0DA9E1" />
                  </svg>
                </div>
                <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[normal] left-[32px] lg:left-[40px] text-[10px] lg:text-[12px] text-white top-[12px] lg:top-[16px] w-[190.5px] lg:w-[230px] whitespace-pre-wrap">
                  Cal. el Boulevard Nro. 145 Oficina 302, Santiago de Surco, Lima - Perú
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="h-[32px] lg:h-[40px] relative shrink-0 w-[114px] lg:w-[140px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 32">
                <g>
                  <g>
                    <path d={svgPaths.pcb3df80} fill="#EEEEEE" />
                  </g>
                  <g>
                    <circle cx="61.5" cy="16" fill="#0DA9E1" r="16" />
                    <g clipPath="url(#clip0_1_1260)">
                      <path d={svgPaths.p865f380} fill="#EEEEEE" />
                    </g>
                  </g>
                  <path d={svgPaths.p2e9a6a40} fill="#EEEEEE" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1260">
                    <rect fill="white" height="12" transform="translate(55.5 10)" width="12" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#003a61] min-w-[393px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-4 border-[#0da9e1] border-solid inset-0 pointer-events-none" />
        <div className="content-start flex flex-wrap gap-[16px_24px] lg:gap-[32px_48px] items-start min-w-[inherit] p-[24px] lg:p-[60px] relative w-full max-w-[1400px] mx-auto">
          {/* Logo */}
          <div className="h-[85.616px] lg:h-[110px] relative shrink-0 w-[311.644px] lg:w-[400px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image alt="Bureau Consulting" className="absolute h-full left-0 max-w-none top-0 w-full object-contain" src={imgIsotipoVariante1} width={1366} height={768} sizes="400px" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 content-stretch flex items-start max-w-[345px] ml-0 mt-0 relative row-1">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[15.628px] lg:text-[18px] text-white w-[82px] whitespace-pre-wrap">
                Legal
              </p>
            </div>
            <div className="col-1 content-start flex flex-wrap h-[24px] items-start max-w-[345px] ml-0 mt-[23.62px] relative row-1">
              <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-[82px] not-italic relative text-[15.351px] lg:text-[18px] text-white whitespace-pre-wrap">
                Servicios
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="content-stretch flex flex-col h-[150px] items-start leading-[24px] max-w-[345px] min-h-[150px] min-w-[345px] not-italic relative shrink-0 text-white w-[345px] lg:w-[400px] whitespace-pre-wrap">
            <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] lg:text-[18px] w-full">
              Contacto
            </p>
            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[95px] items-start justify-between relative shrink-0 w-full">
              <p className="relative shrink-0 text-[16px] lg:text-[18px] w-full">+51 999 888 777</p>
              <p className="relative shrink-0 text-[15.932px] lg:text-[18px] w-full">contacto@bureauconsulting.pe</p>
              <p className="h-[43px] relative shrink-0 text-[16px] lg:text-[18px] w-full">
                Cal. el Boulevard Nro. 145 Oficina 302, Santiago de Surco, Lima - Perú
              </p>
            </div>
          </div>

          {/* Footer Image */}
          <div className="h-[152px] lg:h-[200px] min-w-[345px] lg:min-w-[400px] relative shrink-0 w-[345px] lg:w-[400px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgRectangle} width={640} height={640} sizes="400px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
