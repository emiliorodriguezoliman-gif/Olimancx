// app/aviso-de-privacidad/page.jsx
export const metadata = {
  title: "Aviso de Privacidad — Oliman CX",
  description:
    "Aviso de privacidad de Oliman CX. Tratamiento de datos personales conforme a la legislación mexicana.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <main className="bg-white">
      <section className="max-w-[1100px] mx-auto px-5 py-12 text-[#334155] leading-relaxed">

        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
          Aviso de Privacidad
        </h1>

        <p className="mt-4">
          En <strong>Oliman CX</strong> nos comprometemos a proteger tus datos personales y 
          darles un uso responsable conforme a la Ley Federal de Protección de Datos Personales 
          en Posesión de los Particulares y demás normativa aplicable.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">
          1. Responsable del tratamiento
        </h2>
        <p className="mt-2">
          Responsable: <strong>Oliman CX</strong><br />
          Contacto:{" "}
          <a href="mailto:contacto@olimancx.com" className="underline text-[#1E56A0]">
            contacto@olimancx.com
          </a>
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">
          2. Datos personales que podemos recabar
        </h2>
        <p className="mt-2">Dependiendo del servicio contratado, podemos solicitar:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Nombre</li>
          <li>Correo electrónico</li>
          <li>Teléfono</li>
          <li>Datos de facturación</li>
          <li>Información necesaria para diagnóstico o implementación de procesos</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">
          3. Finalidades del tratamiento
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Proveer servicios de diagnóstico, consultoría y diseño de procesos</li>
          <li>Programar sesiones, reuniones y seguimiento</li>
          <li>Generar entregables internos</li>
          <li>Comunicación operativa relacionada con el servicio</li>
          <li>Facturación y gestión administrativa</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">
          4. Transferencias
        </h2>
        <p className="mt-2">
          Podemos compartir datos únicamente con proveedores necesarios para la prestación 
          del servicio, bajo obligaciones de confidencialidad.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">
          5. Derechos ARCO
        </h2>
        <p className="mt-2">
          Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición enviando 
          una solicitud a{" "}
          <a href="mailto:contacto@olimancx.com" className="underline text-[#1E56A0]">
            contacto@olimancx.com
          </a>.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">
          6. Cambios al aviso de privacidad
        </h2>
        <p className="mt-2">
          Cualquier modificación será publicada en este mismo apartado.
          <br />
          Última actualización: Diciembre 2025
        </p>

      </section>
    </main>
  );
}
