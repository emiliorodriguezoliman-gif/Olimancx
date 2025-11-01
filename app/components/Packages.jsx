// app/components/Packages.jsx
import CentralContainer from "./layout/CentralContainer";

const Nota = () => (
  <p className="mt-3 text-xs text-[#6C757D]">
    Precios cerrados con licencias e IVA incluidos. Excedentes de WhatsApp: upgrade de plan o cargo por bloques.
    Comisiones de Stripe/MercadoPago las asume el cliente. Google Calendar sin costo adicional.
  </p>
);

export default function Packages() {
  return (
    <section
      id="paquetes"
      className="scroll-mt-28 md:scroll-mt-32 bg-[#F6F8FB] py-16 md:py-20"
    >
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Paquetes Oliman CX
        </h2>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#002B5B]">Starter</h3>
            <p className="mt-2 text-3xl font-extrabold text-[#1E56A0]">
              $4,900 <span className="text-sm text-[#6C757D]">MXN/mes</span>
            </p>
            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>• WhatsApp API incluido (hasta 100 conversaciones/mes).</li>
              <li>• Auto-respuesta 24/7, agenda básica, recordatorios.</li>
              <li>• 1 plantilla de cobro.</li>
              <li>• Soporte estándar (SLA &lt;24h).</li>
            </ul>
            <Nota />
            <a
              href="https://wa.me/522228208051?text=Quiero%20el%20plan%20Starter"
              className="mt-6 inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
            >
              Contratar por WhatsApp
            </a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#002B5B]">Pro</h3>
            <p className="mt-2 text-3xl font-extrabold text-[#1E56A0]">
              $7,900 <span className="text-sm text-[#6C757D]">MXN/mes</span>
            </p>
            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>• Todo Starter + router de intentos, lead-scoring, dashboards.</li>
              <li>• Fidelización (re-contactos), catálogo básico.</li>
              <li>• WhatsApp hasta 300 conversaciones/mes.</li>
              <li>• Soporte prioritario (SLA &lt;12h) + 1 sesión de optimización (30 min).</li>
            </ul>
            <Nota />
            <a
              href="https://wa.me/522228208051?text=Quiero%20el%20plan%20Pro"
              className="mt-6 inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
            >
              Contratar por WhatsApp
            </a>
          </div>

          {/* Elite */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#002B5B]">Elite</h3>
            <p className="mt-2 text-3xl font-extrabold text-[#1E56A0]">
              $11,900 <span className="text-sm text-[#6C757D]">MXN/mes</span>
            </p>
            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>• Todo Pro + catálogos completos y flujos de pago avanzados.</li>
              <li>• Plantillas premium y entrenamiento al equipo.</li>
              <li>• WhatsApp hasta 600 conversaciones/mes.</li>
              <li>• Soporte premium (SLA &lt;6h) + revisión ejecutiva (60 min).</li>
            </ul>
            <Nota />
            <a
              href="https://wa.me/522228208051?text=Quiero%20el%20plan%20Elite"
              className="mt-6 inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
            >
              Contratar por WhatsApp
            </a>
          </div>
        </div>

        {/* Implementación y activación del servicio */}
<div className="mt-10 rounded-xl border border-[#E2E8F0] bg-white p-6">
  <h4 className="text-lg font-semibold text-[#002B5B]">
    Implementación y activación del servicio
  </h4>

  <ul className="mt-3 space-y-2 text-[#334155] text-sm">
    <li>✔️ <strong>Inicio:</strong> se realiza con un anticipo del 50 % para cubrir la configuración y personalización inicial.</li>
    <li>✔️ <strong>Go-Live:</strong> el 50 % restante se liquida antes de la entrega final y puesta en marcha del sistema.</li>
    <li>✔️ <strong>Activación mensual:</strong> corresponde al plan vigente contratado (Starter, Pro o Elite) una vez que el bot comienza a operar con clientes reales.</li>
  </ul>

  <p className="mt-2 text-xs text-[#6C757D] leading-relaxed">
    Los pagos incluyen licencias base, hosting y mantenimiento indicados en cada plan.
    Cualquier excedente de uso, comisión de pasarela o servicio adicional se cotiza por separado.
    Precios en MXN y sujetos a actualización conforme a las condiciones comerciales de Oliman CX.
  </p>
</div>
      </CentralContainer>
    </section>
  );
}
