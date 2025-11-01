// app/components/Benefits.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white">
      <CentralContainer>
        <h2 className="text-3xl font-bold text-[#002B5B]">Beneficios para ti</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl p-5 bg-[#FDECEC]">
            <h3 className="font-semibold text-red-700">Lo que duele hoy</h3>
            <ul className="mt-2 text-sm text-red-800 space-y-1">
              <li>• Cobros atrasados y flujo roto.</li>
              <li>• No-shows por citas olvidadas.</li>
              <li>• Respuestas lentas en WhatsApp → leads perdidos.</li>
              <li>• Demasiadas apps desconectadas y errores humanos.</li>
            </ul>
          </div>

          <div className="rounded-xl p-5 bg-[#E6F9F0]">
            <h3 className="font-semibold text-emerald-800">Cómo lo resolvemos</h3>
            <ul className="mt-2 text-sm text-emerald-900 space-y-1">
              <li>✔ Pagos automáticos con recordatorios.</li>
              <li>✔ Agenda inteligente con recordatorios y reprogramación.</li>
              <li>✔ Bot 24/7 que responde y captura datos.</li>
              <li>✔ Reportes claros y mini coaching para mejorar cada mes.</li>
            </ul>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
