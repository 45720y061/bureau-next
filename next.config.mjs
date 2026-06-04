/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    // ── Slugs legados (sin prefijo = español público) ──────────────────────
    const legacyServiceSlugs = [
      {
        source: "/servicios/outsourcing-contable",
        destination: "/servicios/gestion-contable",
      },
      {
        source: "/servicios/outsourcing-planilla",
        destination: "/servicios/administracion-de-planillas",
      },
      {
        source: "/servicios/outsourcing-administrativo",
        destination: "/servicios/gestion-administrativa",
      },
      {
        source: "/servicios/gestion-laboral",
        destination: "/servicios/asesoria-laboral",
      },
      {
        source: "/servicios/consultoria-proyectos",
        destination: "/servicios/consultoria-de-gestion-y-proyectos",
      },
    ];

    // ── Variantes /en/ ─────────────────────────────────────────────────────
    const legacyServiceSlugsEn = legacyServiceSlugs.map((r) => ({
      source: `/en${r.source}`,
      destination: `/en${r.destination}`,
    }));

    // ── Variantes /es/ directas (evitan redirect chain) ───────────────────
    // Sin estas entradas, /es/servicios/[slug-antiguo] haría 2 saltos:
    //   /es/servicios/X → /servicios/X → /servicios/nuevo
    // Con estas entradas, el salto es directo en 1 paso.
    // Deben ir ANTES del redirect genérico /es/:path*.
    const legacyServiceSlugsEsDirect = legacyServiceSlugs.map((r) => ({
      source: `/es${r.source}`,
      destination: r.destination, // destino sin /es → URL pública correcta
      permanent: true,
    }));

    // ── Redirect /es → / ya existente ─────────────────────────────────────
    const localeRedirects = [
      {
        source: "/es/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/es",
        destination: "/",
        permanent: true,
      },
    ];

    return [
      // 1. Primero: /es/servicios/[slug-antiguo] → directo a slug nuevo (1 salto)
      ...legacyServiceSlugsEsDirect,
      // 2. Luego: redirect genérico /es/:path* → /:path* (para cualquier otra ruta /es/)
      ...localeRedirects,
      // 3. Por último: slugs legacy sin prefijo y variantes /en/
      ...[...legacyServiceSlugs, ...legacyServiceSlugsEn].map((r) => ({
        ...r,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;