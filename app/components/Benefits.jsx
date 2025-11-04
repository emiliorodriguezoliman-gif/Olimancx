// app/components/Benefits.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Benefits() {
  return (
    <section id="beneficios" className="section-pad surface-soft">
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2343] text-center">
          Beneficios para ti
        </h2>

        <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Bloque ROJO: Lo que duele hoy */}
          <div className="rounded-2xl border border-red-200 bg-red-50/80 p-6 md:p-8 shadow-sm ring-1 ring-red-100">
            <h3 className="text-lg md:text-xl font-semibold text-red-800">
              Lo que duele hoy
            </h3>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-red-700 marker:text-red-600">
              <li>Cobros atrasados y flujo roto.</li>
              <li>No-shows por citas olvidadas.</li>
              <li>Respuestas lentas en WhatsApp → leads perdidos.</li>
              <li>Demasiadas apps desconectadas y errores.</li>
            </ul>
          </div>

          {/* Bloque VERDE: Cómo lo resolvemos */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 md:p-8 shadow-sm ring-1 ring-emerald-100">
            <h3 className="text-lg md:text-xl font-semibold text-emerald-800">
              Cómo lo resolvemos
            </h3>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-emerald-700 marker:text-emerald-600">
              <li>Pagos automáticos con recordatorios.</li>
              <li>Agenda inteligente con reprogramación.</li>
              <li>Bot 24/7 que responde y captura datos.</li>
              <li>Reportes claros y mini coaching mensual.</li>
            </ul>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
