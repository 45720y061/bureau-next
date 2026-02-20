import Link from "next/link";

export default function NotFound({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  return (
    <section className="bg-[#003a61]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-[60px]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white">
          <h1 className="text-2xl font-semibold">Página no encontrada</h1>
          <p className="mt-3 text-white/80">La página que buscas no existe o fue movida.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${locale}`}
              className="rounded-md bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            >
              Ir al inicio
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="rounded-md bg-[#0da9e1] px-4 py-2 text-sm text-[#003a61] hover:bg-white"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
