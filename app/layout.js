// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Oliman CX — Automatización para vender más",
  description:
    "Automatizamos pagos, agendas y respuestas 24/7 con WhatsApp API incluido. Reportes claros + coaching humano.",
  metadataBase: new URL("http://localhost:3000"), // cámbialo a tu dominio prod en Vercel
  openGraph: {
    title: "Oliman CX — Automatización con toque humano",
    description:
      "Pagos, agendas y respuestas 24/7 + coaching. Más ventas con menos esfuerzo.",
    images: [{ url: "/brand/oi.png", width: 600, height: 600 }],
  },
  icons: {
    icon: "/icon.png",               // Next usa app/icon.png automáticamente
    apple: "/apple-touch-icon.png",  // si lo tienes en /public
    shortcut: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Oliman CX",
    telephone: "+52 222 820 8051",
    email: "emilio.rodriguez.oliman@gmail.com",
    url: "https://tudominio.com", // cambia en prod
    logo: "/brand/oi.png",
    areaServed: "MX",
    description:
      "Pagos, agendas y respuestas 24/7 con coaching humano y reportes.",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // JSON-LD inline
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className + " bg-white text-gray-800 antialiased"}>
        {children}
      </body>
    </html>
  );
}
