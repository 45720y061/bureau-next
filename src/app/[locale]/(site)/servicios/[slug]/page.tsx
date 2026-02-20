import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";

const locales = ["es", "en"] as const;

type Params = { locale: (typeof locales)[number]; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio solicitado no existe.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/${params.locale}/servicios/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.short,
      url: `/${params.locale}/servicios/${service.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.short,
    },
  };
}

export default function ServicioDetailPage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <section className="bg-[#1e1e1e] py-[24px] lg:py-[60px]">
      <div className="mx-auto w-full max-w-[900px] px-4">
        <Link href={`/${params.locale}/servicios`} className="text-white/80 hover:text-white">
          ← Volver a servicios
        </Link>

        <div className="mt-6 bg-[#434343] rounded-[12px] p-6 lg:p-10">
          <div className="flex items-center gap-4">
            <Image
              alt={service.title}
              src={service.iconSrc}
              width={64}
              height={64}
              className="object-contain"
            />
            <h1 className="font-['Outfit:Bold',sans-serif] font-bold text-[28px] lg:text-[34px] text-white">
              {service.title}
            </h1>
          </div>

          <p className="mt-4 text-white/90">{service.long}</p>

          <h2 className="mt-8 font-['Outfit:Bold',sans-serif] font-bold text-[18px] text-white">
            Incluye
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-white/90">
            {service.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
