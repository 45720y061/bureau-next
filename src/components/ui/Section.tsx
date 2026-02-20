import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/70">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}