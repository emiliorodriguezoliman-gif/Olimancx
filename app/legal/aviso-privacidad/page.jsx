// app/legal/aviso-privacidad/page.jsx
import CentralContainer from "../../components/layout/CentralContainer";

export const metadata = {
  title: "Aviso de privacidad | Oliman CX",
  description:
    "Aviso de privacidad integral de Oliman CX conforme a la LFPDPPP en México. Conoce cómo protegemos tus datos personales y cómo ejercer tus derechos ARCO.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/legal/aviso-privacidad" },
  openGraph: {
    title: "Aviso de privacidad | Oliman CX",
    description:
      "Consulta nuestro aviso de privacidad conforme a la ley mexicana de protección de datos personales.",
  },
};

export default function AvisoPrivacidadPage() {
  return (
    <section className="scroll-mt-28 md:scroll-mt-32 bg-[#F6F8FB] py-16 md:py-20">
      <CentralContainer>
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
          Aviso de Privacidad
        </h1>
        <p className="mt-2 text-[#334155]">
          Última actualización: <strong>1 de noviembre de 2025</strong>
        </p>

        <div className="mt-10 space-y-8 text-[#334155] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#002B5B]">
              1. Responsable del tratamiento de datos personales
            </h2>
            <p className="mt-2">
              Oliman CX, con domicilio en Puebla, México, es responsable del
              uso y protección de sus datos personales. Para cualquier asunto
              relacionado con este aviso, puede escribirnos a{" "}
              <a
                className="underline text-[#1E56A0]"
                href="mailto:oibot@olimancx.com"
              >
                oibot@olimancx.com
              </a>{" "}
              o contactarnos por WhatsApp al{" "}
              <a
                className="underline text-[#1E56A0]"
                href="https://wa.me/522228208051"
                target="_blank"
                rel="noreferrer"
              >
                +52 222 820 8051
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#002B5B]">
              2. Datos que recabamos
            </h2>
            <p className="mt-2">
              Recabamos datos de identificación, contacto y facturación,
              exclusivamente para proveer los servicios contratados, emitir
              comprobantes fiscales y ofrecer soporte técnico o comercial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#002B5B]">
              3. Finalidades del tratamiento
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Prestación de servicios y soporte técnico.</li>
              <li>Facturación y administración de cuentas.</li>
              <li>Envío de información comercial y actualizaciones del servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#002B5B]">
              4. Derechos ARCO
            </h2>
            <p className="mt-2">
              Usted puede ejercer los derechos de Acceso, Rectificación,
              Cancelación u Oposición (ARCO) escribiendo a{" "}
              <a
                className="underline text-[#1E56A0]"
                href="mailto:oibot@olimancx.com"
              >
                oibot@olimancx.com
              </a>
              . Su solicitud será atendida conforme a la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#002B5B]">
              5. Cambios al aviso
            </h2>
            <p className="mt-2">
              Este aviso puede actualizarse sin previo aviso. Las
              modificaciones estarán disponibles en{" "}
              <a
                className="underline text-[#1E56A0]"
                href="/legal/aviso-privacidad"
              >
                www.olimancx.com/legal/aviso-privacidad
              </a>
              .
            </p>
          </section>

          <footer className="border-t border-[#E2E8F0] pt-4 mt-8 text-sm text-[#64748b]">
            Oliman CX © {new Date().getFullYear()} — Todos los derechos
            reservados.
          </footer>
        </div>
      </CentralContainer>
    </section>
  );
}
