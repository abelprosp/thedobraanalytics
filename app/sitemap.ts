import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.thedobra.cc",
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
