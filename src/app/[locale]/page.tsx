import BureauWebsite from "@/components/BureauWebsite";
import { notFound } from "next/navigation";

const allowedLocales = ["es", "en"] as const;

type PageProps = {
  params: { locale: string };
};

export default function Page({ params }: PageProps) {
  const { locale } = params;
  if (!allowedLocales.includes(locale as (typeof allowedLocales)[number])) {
    notFound();
  }

  const title = locale === "en" ? "Welcome" : "Bienvenido";

  return (
    <div>
      <h1 className="sr-only">{title}</h1>
      <BureauWebsite locale={locale} />
    </div>
  );
}
