import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
