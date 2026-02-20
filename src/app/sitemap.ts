import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const locales = ["es", "en"] as const;

  const staticPaths = ["", "nosotras", "servicios", "contacto"];
  const staticRoutes = locales.flatMap((locale) =>
    staticPaths.map((p) => ({
      url: `${base}/${locale}${p ? `/${p}` : ""}`,
      lastModified: new Date(),
    }))
  );

  const serviceRoutes = locales.flatMap((locale) =>
    services.map((s) => ({
      url: `${base}/${locale}/servicios/${s.slug}`,
      lastModified: new Date(),
    }))
  );

  return [...staticRoutes, ...serviceRoutes];
}
