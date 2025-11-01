// app/sitemap.js
export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://olimancx.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/#quienes`, lastModified: new Date() },
    { url: `${base}/#soluciones`, lastModified: new Date() },
    { url: `${base}/#beneficios`, lastModified: new Date() },
    { url: `${base}/#paquetes`, lastModified: new Date() },
    { url: `${base}/#contacto`, lastModified: new Date() },
  ];
}
