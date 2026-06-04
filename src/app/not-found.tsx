import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#1e1e1e] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-bold text-white">Página no encontrada</h1>
        <p className="mt-3 text-white/80">
          El enlace puede estar desactualizado o la página ya no existe.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-[6px] bg-[#0da9e1] px-5 py-3 text-[#003a61] hover:bg-white"
          >
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="rounded-[6px] border border-white/20 px-5 py-3 text-white hover:bg-white/10"
          >
            Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}