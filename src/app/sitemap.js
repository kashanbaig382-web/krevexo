const baseUrl = "https://krevexo-tools.vercel.app";

export default function sitemap() {
  const routes = [
    "",
    "/tools",
    "/about",
    "/contact",
    "/privacy",
    "/terms",

    "/tools/image-compressor",
    "/tools/image-resizer",
    "/tools/aspect-ratio-calculator",
    "/tools/word-counter",
    "/tools/character-counter",
    "/tools/case-converter",
    "/tools/hashtag-cleaner",
    "/tools/social-caption-formatter",
    "/tools/utm-builder",
    "/tools/qr-code-generator",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/tools" ? 0.9 : 0.8,
  }));
}