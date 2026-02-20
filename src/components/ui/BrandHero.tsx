import type { ReactNode } from "react";
import { Container } from "./Container";

export function BrandHero({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="bg-[#003a61]">
      <Container>
        <div className="py-12 lg:py-16 text-center">
          <h1 className="font-['Outfit:Bold',sans-serif] text-[40px] font-bold leading-tight text-white md:text-[56px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-3xl font-['Roboto:Regular',sans-serif] text-white/80">
              {subtitle}
            </p>
          )}
          {actions && <div className="mt-8 flex justify-center gap-4">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}