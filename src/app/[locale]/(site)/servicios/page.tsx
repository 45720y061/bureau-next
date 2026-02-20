import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  return {
    title: "Servicios",
    description:
      "Outsourcing contable, administrativo y de planillas. Gestión tributaria y laboral. Asesoría societaria y consultoría de proyectos.",
    alternates: { canonical: `/${locale}/servicios` },
    openGraph: {
      title: "Servicios",
      description:
        "Outsourcing contable, administrativo y de planillas. Gestión tributaria y laboral. Asesoría societaria y consultoría de proyectos.",
      url: `/${locale}/servicios`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Servicios",
      description:
        "Outsourcing contable, administrativo y de planillas. Gestión tributaria y laboral. Asesoría societaria y consultoría de proyectos.",
    },
  };
}

export default function ServiciosPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  return (
    <section className="bg-[#1e1e1e] py-[24px] lg:py-[60px]">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h1 className="font-['Outfit:Regular',sans-serif] text-[36px] lg:text-[48px] text-center text-white">
          Servicios que entregan resultados.
        </h1>

        <div className="mt-10 flex flex-wrap gap-[27px] items-start justify-center">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${locale}/servicios/${s.slug}`}
              className="bg-[#434343] hover:bg-[#555] transition-colors cursor-pointer rounded-[9.048px] w-[328px] lg:w-[360px] h-[181px] lg:h-[220px] px-[25px] py-[12px] flex flex-col items-center justify-center"
            >
              <div className="h-[62px] lg:h-[80px] w-[81px] lg:w-[100px] mb-3">
                <Image
                  alt={s.title}
                  src={s.iconSrc}
                  width={100}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="font-['Outfit:Bold',sans-serif] font-bold text-[22.621px] lg:text-[26px] leading-[31.669px] text-center text-white mb-2">
                {s.title}
              </p>

              <p className="font-['Outfit:Regular',sans-serif] font-normal text-[14.26px] lg:text-[16px] leading-[21.4px] lg:leading-[24px] text-center text-white">
                {s.short}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
