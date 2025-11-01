// app/components/Packages.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Packages() {
  return (
    <section id="paquetes" className="scroll-mt-28 md:scroll-mt-32 bg-[#F6F8FB] py-16">
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Paquetes Oliman CX
        </h2>

        {/* Grid de tarjetas */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#002B5B]">Starter</h3>
            <p className="mt-2 text-3xl font-extrabold text-[#1E56A0]">
              $4,900 MXN / mes
            </p>

            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>• WhatsApp API: <strong>200 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Auto-respuesta 24/7, agenda básica y recordatorios.</li>
              <li>• 1 plantilla de cobro.</li>
              <li>• Soporte estándar (SLA &lt; 24 h por email/WhatsApp).</li>
            </ul>

            <div className="mt-5 rounded-lg bg-[#F6F8FB] p-4 text-sm text-[#475569]">
              <p className="font-medium text-[#002B5B]">Implementación inicial</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Etapa 1 (Inicio): $3,000</li>
                <li>Etapa 2 (Go-Live): $3,000</li>
                <li>Etapa 3 (Primer mes): $4,900</li>
              </ul>
              <p className="mt-2">El primer mes se cobra al activar el bot en producción.</p>
            </div>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#002B5B]">Pro</h3>
            <p className="mt-2 text-3xl font-extrabold text-[#1E56A0]">
              $7,900 MXN / mes
            </p>

            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>• WhatsApp API: <strong>500 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Todo Starter + router multicanal de intentos y lead-scoring.</li>
              <li>• Dashboards, fidelización (recontactos) y catálogo básico.</li>
              <li>• Soporte prioritario (SLA &lt; 12 h) + 1 sesión mensual (30 min).</li>
            </ul>

            <div className="mt-5 rounded-lg bg-[#F6F8FB] p-4 text-sm text-[#475569]">
              <p className="font-medium text-[#002B5B]">Implementación inicial</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Etapa 1 (Inicio): $3,000</li>
                <li>Etapa 2 (Go-Live): $3,000</li>
                <li>Etapa 3 (Primer mes): $7,900</li>
              </ul>
              <p className="mt-2">El primer mes se cobra al activar el bot en producción.</p>
            </div>
          </div>

          {/* Elite */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#002B5B]">Elite</h3>
            <p className="mt-2 text-3xl font-extrabold text-[#1E56A0]">
              $11,900 MXN / mes
            </p>

            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>• WhatsApp API: <strong>1,000 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Todo Pro + catálogos completos y flujos de pago avanzados.</li>
              <li>• Plantillas premium y entrenamiento al equipo.</li>
              <li>• Soporte premium (SLA &lt; 6 h) + revisión ejecutiva (60 min) + asesoría ligera.</li>
            </ul>

            <div className="mt-5 rounded-lg bg-[#F6F8FB] p-4 text-sm text-[#475569]">
              <p className="font-medium text-[#002B5B]">Implementación inicial</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Etapa 1 (Inicio): $3,000</li>
                <li>Etapa 2 (Go-Live): $3,000</li>
                <li>Etapa 3 (Primer mes): $11,900</li>
              </ul>
              <p className="mt-2">El primer mes se cobra al activar el bot en producción.</p>
            </div>
          </div>
        </div>

        {/* Nota legal */}
        <p className="mt-6 text-center text-sm text-[#475569]">
          Precios incluyen hosting, mantenimiento y licencias base. Excedentes de WhatsApp: upgrade de plan o cargo por bloques. 
          Comisiones de Stripe/MercadoPago las asume el cliente. Google Calendar sin costo adicional.
        </p>
      </CentralContainer>
    </section>
  );
}
