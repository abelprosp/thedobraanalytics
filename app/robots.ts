import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/prelancamento" },
    sitemap: "https://www.thedobra.cc/sitemap.xml",
  };
}
