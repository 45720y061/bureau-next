import { contact } from "@/lib/site";

/**
 * ContactInfo — bloque de datos de contacto con mapa.
 * Datos consumidos desde @/lib/site (fuente única).
 */
export function ContactInfo() {
  return (
    <div className="w-full">
      <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 lg:p-8">
        <h2 className="font-['Outfit:Bold',sans-serif] text-[18px] font-semibold text-white">
          Información de contacto
        </h2>

        <ul className="mt-5 space-y-4 text-white/80">
          <li className="flex flex-col gap-0.5">
            <span className="text-[12px] text-white/45 uppercase tracking-wider font-['Outfit:Bold',sans-serif]">Teléfono</span>
            <a
              href={contact.phoneTel}
              className="text-[14px] text-white/85 hover:text-[#0da9e1] transition-colors font-['Outfit:Regular',sans-serif]"
            >
              {contact.phone}
            </a>
          </li>
          <li className="flex flex-col gap-0.5">
            <span className="text-[12px] text-white/45 uppercase tracking-wider font-['Outfit:Bold',sans-serif]">Correo</span>
            <a
              href={`mailto:${contact.email}`}
              className="text-[14px] text-white/85 hover:text-[#0da9e1] transition-colors font-['Outfit:Regular',sans-serif] break-all"
            >
              {contact.email}
            </a>
          </li>
          <li className="flex flex-col gap-0.5">
            <span className="text-[12px] text-white/45 uppercase tracking-wider font-['Outfit:Bold',sans-serif]">Dirección</span>
            <p className="text-[14px] text-white/85 leading-relaxed font-['Outfit:Regular',sans-serif]">
              {contact.address}
            </p>
          </li>
        </ul>

        <div className="mt-6 overflow-hidden rounded-[10px] border border-white/10">
          <iframe
            title="Mapa de la oficina de Bureau Consulting"
            loading="lazy"
            className="h-[260px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
            src={contact.mapsEmbed}
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  );
}