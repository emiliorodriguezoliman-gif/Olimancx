// app/aviso-de-privacidad/page.jsx
export const metadata = { title: "Aviso de privacidad — Oliman CX" };
export default function Page(){
  return (
    <main className="container-pro py-12">
      <h1 className="text-3xl font-bold">Aviso de privacidad</h1>
      <p className="mt-4 text-gray-700">
        Este aviso resume cómo Oliman CX trata tus datos personales con fines de contacto,
        contratación y soporte. Conservamos lo mínimo necesario y puedes ejercer tus derechos
        de acceso, rectificación y cancelación escribiendo a <a href="mailto:oibot@olimancx.com" className="text-[var(--brand-primary)]">oibot@olimancx.com</a>.
      </p>
      {/* Agrega tu texto completo aquí si lo deseas */}
    </main>
  );
}
