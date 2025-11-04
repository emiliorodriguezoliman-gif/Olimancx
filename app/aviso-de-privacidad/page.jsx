// app/aviso-de-privacidad/page.jsx
export const metadata = {
  title: "Aviso de Privacidad — Oliman CX",
  description:
    "Aviso de privacidad de Oliman CX. Tratamiento de datos personales conforme a la legislación aplicable en México.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <main className="bg-white">
      <section className="max-w-[1100px] mx-auto px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
          Aviso de Privacidad
        </h1>

        <p className="mt-4 text-[#334155]">
          En <strong>Oliman CX</strong> nos comprometemos a proteger tus datos personales y
          a darles un uso responsable conforme a la Ley Federal de Protección
          de Datos Personales en Posesión de los Particulares y demás normativa aplicable.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Responsable</h2>
        <p className="mt-2 text-[#334155]">
          Responsable del tratamiento: <strong>Oliman CX</strong>. Contacto:
          <br />
          Correo: <a className="underline" href="mailto:oibot@olimancx.com">oibot@olimancx.com</a>
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Datos personales tratados</h2>
        <p className="mt-2 text-[#334155]">
          Dependiendo del servicio, podemos solicitar: nombre, correo, teléfono, datos de facturación,
          y/o información necesaria para ejecutar el servicio contratado.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Finalidades</h2>
        <ul className="mt-2 list-disc pl-6 text-[#334155] space-y-1">
          <li>Proveer y dar soporte a los servicios de automatización.</li>
          <li>Facturación y administración.</li>
          <li>Atención a clientes y mejora de servicio.</li>
          <li>Comunicaciones operativas relacionadas con el servicio.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Transferencias</h2>
        <p className="mt-2 text-[#334155]">
          Podremos compartir datos con proveedores que nos ayudan a prestar el servicio (p. ej. plataformas
          de mensajería, pagos o agenda), bajo obligaciones de confidencialidad y sólo para las finalidades indicadas.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Derechos ARCO</h2>
        <p className="mt-2 text-[#334155]">
          Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición contactándonos en
          <a className="underline" href="mailto:oibot@olimancx.com"> oibot@olimancx.com</a>.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Cambios al aviso</h2>
        <p className="mt-2 text-[#334155]">
          Cualquier cambio se publicará en este mismo apartado. Recomendamos revisarlo periódicamente.
        </p>

        <p className="mt-8 text-[#6C757D]">Última actualización: Noviembre 2025</p>
      </section>
    </main>
  );
}
