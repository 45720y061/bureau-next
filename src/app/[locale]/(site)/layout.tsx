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
    <div className="min-h-screen bg-[#434343] text-white">
      <BrandHeader locale={params.locale} />
      <main>{children}</main>
      <BrandFooter />
    </div>
  );
}
