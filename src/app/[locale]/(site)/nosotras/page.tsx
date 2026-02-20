import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  return {
    title: "Nosotras",
    description:
      "Conozca Bureau Consulting: una firma orientada a resultados, con enfoque humano y criterios técnicos claros.",
    alternates: { canonical: `/${locale}/nosotras` },
  };
}

export default function NosotrasPage() {
  return (
    <>
      <Section
        eyebrow="Bureau Consulting"
        title="Nosotras"
        subtitle="Una firma orientada a resultados, con enfoque humano y criterios técnicos claros."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Nuestra misión</h2>
            <p className="mt-3 text-white/70">
              Brindar soluciones contables, tributarias y de gestión con orden, transparencia y acompañamiento cercano.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Nuestra forma de trabajar</h2>
            <ul className="mt-3 space-y-2 text-white/70 list-disc pl-5">
              <li>Procesos claros y trazables</li>
              <li>Comunicación simple, sin jerga innecesaria</li>
              <li>Entrega consistente y puntual</li>
            </ul>
          </div>
        </div>
      </Section>

      <section className="pb-20">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Valores</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Confianza", "Rigor", "Cercanía"].map((v) => (
                <div key={v} className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <div className="font-semibold">{v}</div>
                  <p className="mt-2 text-sm text-white/70">
                    Enfoque consistente en resultados y relaciones de largo plazo.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
