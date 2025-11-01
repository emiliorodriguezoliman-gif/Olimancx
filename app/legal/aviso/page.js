export const metadata = { title: "Aviso de Privacidad — Oliman CX" };

export default function Aviso() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#002B5B]">Aviso de Privacidad</h1>
      <p className="mt-4 text-slate-700">
        Oliman CX, como responsable del tratamiento de datos personales, informa que
        recaba datos para fines de contacto, prospección comercial y prestación de
        servicios de automatización. Los datos se resguardan con medidas de seguridad
        administrativas, técnicas y físicas. Podrás ejercer tus derechos ARCO
        (acceso, rectificación, cancelación y oposición) enviando un correo a
        <a className="underline" href="mailto:oibot@olimancx.com"> oibot@olimancx.com</a>.
      </p>
      <p className="mt-2 text-slate-700">
        El uso de WhatsApp y plataformas de terceros se sujeta a sus términos y políticas.
        Cambios sustanciales al presente aviso se publicarán en este sitio.
      </p>
      <p className="mt-6 text-sm text-slate-500">Última actualización: {new Date().toLocaleDateString("es-MX")}</p>
    </main>
  );
}
