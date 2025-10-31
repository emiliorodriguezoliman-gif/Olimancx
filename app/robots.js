// app/robots.js
export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://olimancx.vercel.app";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
