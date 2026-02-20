import type { ReactNode } from "react";
import { notFound } from "next/navigation";

const allowedLocales = ["es", "en"] as const;

type Locale = (typeof allowedLocales)[number];

type LayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: LayoutProps) {
  const locale = (params?.locale ?? "es") as Locale;
  if (!allowedLocales.includes(locale)) {
    notFound();
  }

  return children;
}
