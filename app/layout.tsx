export const metadata = {
  alternates: {
    canonical: 'https://www.olimancx.com/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}