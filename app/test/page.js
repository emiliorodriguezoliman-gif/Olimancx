// app/layout.js
export const metadata = {
  title: "Oliman CX — Automatización para vender más",
  description: "Pagos, agendas y respuestas 24/7 con enfoque humano.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}