import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

const imgLogo = "/assets/isotipo-variante.png";

/**
 * SiteFooter — footer canónico compartido por todas las rutas públicas.
 * Reemplaza BrandFooter (placeholder) y home/Footer (origen aprobado).
 * Datos de contacto consumidos desde @/lib/site para evitar duplicación.
 */
export function BrandFooter({ locale }: { locale?: string }) {
  const prefix = locale === "en" ? "/en" : "";

  return (
    <footer className="bg-[#003a61] relative shrink-0 w-full text-white">
      {/* Top accent line */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[4px] bg-[#0da9e1]" />

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 px-6 py-10 lg:px-[60px] lg:py-16 relative w-full max-w-[1200px] mx-auto items-start">

        {/* Col 1 — Logo + tagline (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
          <Link href={`${prefix}/`} className="block w-[160px] lg:w-[200px] h-auto shrink-0 focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:outline-none rounded-sm">
            <Image
              alt="Bureau Consulting"
              src={imgLogo}
              width={1366}
              height={768}
              sizes="200px"
              className="w-full object-contain"
            />
          </Link>
          <p className="font-['Outfit:Regular',sans-serif] text-[13px] lg:text-[14px] text-white/65 leading-relaxed max-w-[260px]">
            Firma de servicios profesionales para empresas que valoran el orden, el criterio y la continuidad.
          </p>
        </div>

        {/* Col 2 — Navigation (col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full">
          <nav aria-label="Navegación del pie de página">
            <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[14px] text-white uppercase tracking-wider mb-3">
              Institucional
            </h2>
            <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
              <li>
                <Link
                  href={`${prefix}/`}
                  className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/75 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/servicios`}
                  className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/75 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/contacto`}
                  className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/75 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          {/* Legal — sin ruta real, se muestra como texto no-link */}
          <div>
            <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[14px] text-white uppercase tracking-wider mb-3">
              Legal
            </h2>
            <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
              <li>
                <span className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/40 cursor-default select-none">
                  Política de privacidad
                </span>
              </li>
              <li>
                <span className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/40 cursor-default select-none">
                  Términos y condiciones
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3 — Contact directory (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-4 w-full">
          <h2 className="font-['Outfit:Bold',sans-serif] font-bold text-[14px] text-white uppercase tracking-wider">
            Contacto
          </h2>
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            <li className="flex flex-col items-start gap-1">
              <strong className="font-['Outfit:Bold',sans-serif] text-[13px] text-white/50 uppercase tracking-wider">
                Teléfono
              </strong>
              <a
                href={contact.phoneTel}
                className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/85 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex flex-col items-start gap-1">
              <strong className="font-['Outfit:Bold',sans-serif] text-[13px] text-white/50 uppercase tracking-wider">
                Correo
              </strong>
              <a
                href={`mailto:${contact.email}`}
                className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/85 hover:text-[#0da9e1] transition-colors focus-visible:ring-1 focus-visible:ring-[#0da9e1] outline-none rounded-sm break-all"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex flex-col items-start gap-1">
              <strong className="font-['Outfit:Bold',sans-serif] text-[13px] text-white/50 uppercase tracking-wider">
                Dirección
              </strong>
              <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-white/85 leading-relaxed max-w-[280px]">
                {contact.address}
              </p>
            </li>
          </ul>
        </div>

        {/* Col 4 — Map embed (col-span-4) */}
        <div className="lg:col-span-4 w-full h-[220px] lg:h-[260px] relative rounded-[12px] overflow-hidden border border-white/10 shrink-0">
          <iframe
            src={contact.mapsEmbed}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="Mapa de la oficina de Bureau Consulting en Santiago de Surco, Lima"
          />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-4 lg:px-[60px]">
        <p className="font-['Outfit:Regular',sans-serif] text-[12px] text-white/40 text-center">
          © {new Date().getFullYear()} Bureau Consulting S.A.C. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}