export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://krevexo-tools.vercel.app/sitemap.xml",
  };
}