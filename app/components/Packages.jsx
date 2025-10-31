export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">
          Paquetes Oliman CX
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-[#002B5B] mb-3">Starter</h3>
            <p className="text-3xl font-bold text-[#1E56A0] mb-6">$4,900 MXN / mes</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• WhatsApp API: <strong>200 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Auto-respuesta 24/7, agenda básica y recordatorios.</li>
              <li>• 1 plantilla de cobro.</li>
              <li>• Soporte estándar (SLA &lt; 24 h por email/WhatsApp).</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-[#002B5B] mb-3">Pro</h3>
            <p className="text-3xl font-bold text-[#1E56A0] mb-6">$7,900 MXN / mes</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• WhatsApp API: <strong>500 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Todo Starter + router multicanal de intentos y lead-scoring.</li>
              <li>• Dashboards, fidelización (recontactos) y catálogo básico.</li>
              <li>• Soporte prioritario (SLA &lt; 12 h) + 1 sesión mensual (30 min).</li>
            </ul>
          </div>

          {/* Elite */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-[#002B5B] mb-3">Elite</h3>
            <p className="text-3xl font-bold text-[#1E56A0] mb-6">$11,900 MXN / mes</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• WhatsApp API: <strong>1,000 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Todo Pro + catálogos completos y flujos de pago avanzados.</li>
              <li>• Plantillas premium y entrenamiento al equipo.</li>
              <li>• Soporte premium (SLA &lt; 6 h) + revisión ejecutiva (60 min) y asesoría comercial ligera.</li>
            </ul>
          </div>
        </div>

        {/* Leyenda legal */}
        <p className="mt-10 text-sm leading-6 text-gray-500 text-center max-w-3xl mx-auto">
          *Precios en MXN por mes. Incluyen hosting y mantenimiento. WhatsApp API:
          Starter 200, Pro 500 y Elite 1,000 mensajes/mes; excedente $0.10 por mensaje o
          upgrade de plan. Comisiones de Stripe/MercadoPago no incluidas. Google Calendar
          sin costo adicional. Implementación: 50% al inicio y 50% antes del go-live.
          El primer mes se cobra al activar en real. Sujeto a disponibilidad y aprobación
          de plantillas Meta.
        </p>
      </div>
    </section>
  );
}
