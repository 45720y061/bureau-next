export const copy = {
  es: {
    nav: { quienesSomos: "Quiénes Somos", servicios: "Servicios", contacto: "Contacto" },
    hero: { title: "…", subtitle: "…" },
    // etc...
  },
  en: {
    nav: { quienesSomos: "About", servicios: "Services", contacto: "Contact" },
    hero: { title: "…", subtitle: "…" },
    // etc...
  },
} as const;

export type Locale = keyof typeof copy;