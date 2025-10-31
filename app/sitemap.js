export default async function sitemap() {
  const base = "https://olimancx.vercel.app";
  return [
    { url: `${base}/`, changefreq: "weekly", priority: 1.0 },
    { url: `${base}/aviso-de-privacidad`, changefreq: "yearly", priority: 0.3 },
    { url: `${base}/terminos-y-condiciones`, changefreq: "yearly", priority: 0.3 },
  ];
}
