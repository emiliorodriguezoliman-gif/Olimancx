// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliman CX",
  description:
    "Consultoría y mejora de procesos con enfoque humano. Orden, claridad y eficiencia para que tu negocio crezca.",
  metadataBase: new URL("https://olimancx.vercel.app"),
  alternates: { canonical: "https://olimancx.vercel.app" },
  openGraph: {
    title: "Oliman CX",
    description:
      "Consultoría profesional, procesos claros y acompañamiento humano para hacer crecer tu negocio.",
    images: [{ url: "/brand/oi.png", width: 600, height: 600 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
