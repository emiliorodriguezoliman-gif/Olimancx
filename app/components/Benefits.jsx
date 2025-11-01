// app/components/Benefits.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="scroll-mt-28 md:scroll-mt-32 bg-white py-16 md:py-20"
    >
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Beneficios para ti
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#E2E8F0] p-6">
            <h3 className="font-semibold text-[#002B5B]">Lo que duele hoy</h3>
            <ul className="mt-3 space-y-2 text-[#6C757D]">
              <li>• Cobros atrasados y flujo roto.</li>
              <li>• No-shows por citas olvidadas.</li>
              <li>• Respuestas lentas en WhatsApp → leads perdidos.</li>
              <li>• Demasiadas apps desconectadas y errores.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] p-6">
            <h3 className="font-semibold text-[#002B5B]">Cómo lo resolvemos</h3>
            <ul className="mt-3 space-y-2 text-[#6C757D]">
              <li>• Pagos automáticos con recordatorios.</li>
              <li>• Agenda inteligente con recordatorios y reprogramación.</li>
              <li>• Bot 24/7 que responde y captura datos.</li>
              <li>• Reportes claros y mini coaching mensual.</li>
            </ul>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
