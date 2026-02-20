export const copy = {
  es: {
    nav: { nosotras: "Nosotras", servicios: "Servicios", contacto: "Contacto" },
    hero: { title: "…", subtitle: "…" },
    // etc...
  },
  en: {
    nav: { nosotras: "About", servicios: "Services", contacto: "Contact" },
    hero: { title: "…", subtitle: "…" },
    // etc...
  },
} as const;

export type Locale = keyof typeof copy;