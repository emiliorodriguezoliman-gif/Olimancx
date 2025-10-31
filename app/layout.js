// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliman CX — Automatización para vender más",
  description:
    "Automatizamos pagos, agendas y respuestas 24/7 con WhatsApp API incluido, reportes y coaching humano.",
  metadataBase: new URL("https://olimancx.vercel.app"),
  alternates: { canonical: "https://olimancx.vercel.app" },
  openGraph: {
    title: "Oliman CX — Automatización con toque humano",
    description:
      "Pagos, agendas y respuestas 24/7 + coaching. Más ventas con menos esfuerzo.",
    images: [{ url: "/brand/oi.png", width: 600, height: 600 }],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Oliman CX",
    telephone: "+52 222 820 8051",
    email: "oibot@olimancx.com",
    url: "https://olimancx.vercel.app",
    logo: "/brand/favicon.png",
    areaServed: "MX",
    description:
      "Pagos, agendas y respuestas 24/7 con coaching humano y reportes.",
  };

  return (
    <html lang="es">
      <head>
        {/* Respaldo (Next usa app/icon.png automáticamente) */}
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className + " bg-white text-gray-800 antialiased"}>
        {children}
      </body>
    </html>
  );
}
