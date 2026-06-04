import type { ReactNode } from "react";
import { BrandHeader } from "@/components/site/BrandHeader";
import { BrandFooter } from "@/components/site/BrandFooter";

export default function SiteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-[#434343] text-white flex flex-col">
      <BrandHeader locale={params.locale} />
      <main className="flex-1">{children}</main>
      <BrandFooter locale={params.locale} />
    </div>
  );
}

