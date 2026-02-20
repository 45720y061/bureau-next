export function ContactInfo() {
  const address = "Cal. el Boulevard Nro. 145 Oficina 302, Santiago de Surco, Lima - Perú";
  const mapQuery = encodeURIComponent(address);

  return (
    <div className="w-full">
      <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 lg:p-8">
        <h2 className="text-xl font-semibold text-white">Información de contacto</h2>

        <div className="mt-4 space-y-2 text-white/80">
          <div>📞 +51 999 888 777</div>
          <div>✉️ contacto@bureauconsulting.pe</div>
          <div>📍 {address}</div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[10px] border border-white/10">
          <iframe
            title="Mapa Bureau Consulting"
            loading="lazy"
            className="h-[280px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}