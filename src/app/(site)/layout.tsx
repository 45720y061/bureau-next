import type { ReactNode } from "react";
import { BrandHeader } from "@/components/site/BrandHeader";
import { BrandFooter } from "@/components/site/BrandFooter";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#434343] text-white">
      <BrandHeader locale="es" />
      <main>{children}</main>
      <BrandFooter locale="es" />
    </div>	
  );
}