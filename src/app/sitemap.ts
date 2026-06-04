import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { leaders } from "@/content/leadership";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const locales = ["es", "en"] as const;

  const staticPaths = ["", "quienes-somos", "servicios", "contacto", "liderazgo"];
  const staticRoutes = locales.flatMap((locale) =>
    staticPaths.map((p) => {
      const prefix = locale === "en" ? "/en" : "";
      return {
        url: `${base}${prefix}${p ? `/${p}` : ""}`,
        lastModified: new Date(),
      };
    })
  );

  const serviceRoutes = locales.flatMap((locale) =>
    services.map((s) => {
      const prefix = locale === "en" ? "/en" : "";
      return {
        url: `${base}${prefix}/servicios/${s.slug}`,
        lastModified: new Date(),
      };
    })
  );

  const leaderRoutes = locales.flatMap((locale) =>
    leaders.map((l) => {
      const prefix = locale === "en" ? "/en" : "";
      return {
        url: `${base}${prefix}/liderazgo/${l.slug}`,
        lastModified: new Date(),
      };
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...leaderRoutes];
}
