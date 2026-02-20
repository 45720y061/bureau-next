import type { Metadata } from "next";
import { BrandHero } from "@/components/ui/BrandHero";
import { ContactSection } from "@/components/site/ContactSection";
import { ContactInfo } from "@/components/site/ContactInfo";

type Props = { params?: { locale?: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params?.locale ?? "es";
  return {
    title: locale === "en" ? "Contact" : "Contacto",
    description:
      locale === "en"
        ? "Contact us for a consultation. Tell us what you need and a Bureau specialist will reach out."
        : "Contáctenos para una consulta. Cuéntenos qué necesita y un especialista Bureau se comunicará con usted.",
    alternates: { canonical: `/${locale}/contacto` },
  };
}

export default function ContactoPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <BrandHero
        title="Contacto"
        subtitle="Cuéntenos qué necesita y un especialista Bureau se comunicará con usted."
      />

      <section className="bg-[#003a61]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-[60px] lg:py-[60px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ContactSection showHeading={false} />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
