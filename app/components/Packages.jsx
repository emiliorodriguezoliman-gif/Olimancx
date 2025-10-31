export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Paquetes Oliman CX
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Starter</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">$4,900 MXN / mes</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• WhatsApp API: <strong>200 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Auto-respuesta 24/7, agenda básica y recordatorios.</li>
              <li>• 1 plantilla de cobro.</li>
              <li>• Soporte estándar (SLA &lt; 24 h por email/WhatsApp).</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Pro</h3>
            <p className="text-3xl font-bold text-blue-700 mb-6">$7,900 MXN / mes</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• WhatsApp API: <strong>500 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Todo Starter + router multicanal de intentos y lead-scoring.</li>
              <li>• Dashboards, fidelización (recontactos) y catálogo básico.</li>
              <li>• Soporte prioritario (SLA &lt; 12 h) + 1 sesión mensual (30 min).</li>
            </ul>
          </div>

          {/* Elite */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Elite</h3>
            <p className="text-3xl font-bold text-blue-800 mb-6">$11,900 MXN / mes</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>• WhatsApp API: <strong>1,000 mensajes/mes</strong> (excedente $0.10).</li>
              <li>• Todo Pro + catálogos completos y flujos de pago avanzados.</li>
              <li>• Plantillas premium y entrenamiento al equipo.</li>
              <li>• Soporte premium (SLA &lt; 6 h) + revisión ejecutiva (60 min) y asesoría comercial ligera.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Notas: excedentes de WhatsApp = upgrade o bloques. Comisiones Stripe/MercadoPago → cliente.
            Google Calendar sin costo adicional. Hosting + mantenimiento incluidos.
          </p>
        </div>

        <div className="mt-8 text-center text-gray-700">
          <h4 className="font-semibold mb-2">Implementación inicial</h4>
          <p>
            Etapa 1 (Inicio): $3,000 · Etapa 2 (Go-Live): $3,000 · Etapa 3 (Primer mes): $7,900 → 
            Total <strong>$13,900 MXN</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
