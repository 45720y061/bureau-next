import BureauWebsite from "@/components/BureauWebsite";
import { notFound } from "next/navigation";

const allowedLocales = ["es", "en"] as const;

type PageProps = {
  params: { locale: string };
};

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bureau Consulting | Firma de Servicios Profesionales y Socio Estratégico",
  description: "Acompañamiento profesional en servicios contables, legales, administrativos y de gestión para empresas que valoran el orden, el criterio y la continuidad.",
  alternates: { canonical: "/" }, // Set natively, but Next.js will resolve domain relative.
};

export default function Page({ params }: PageProps) {
  const { locale } = params;
  if (!allowedLocales.includes(locale as (typeof allowedLocales)[number])) {
    notFound();
  }

  return (
    <BureauWebsite locale={locale} />
  );
}
