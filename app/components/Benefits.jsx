import Central from "./layout/CentralContainer";

export default function Benefits(){
  return (
    <Central id="benefits" className="py-14 md:py-18 bg-[var(--bg-soft)]">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Beneficios para ti</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white p-6 border border-[#E2E8F0]">
          <h3 className="font-semibold text-[#B42318]">Lo que duele hoy</h3>
          <ul className="mt-3 space-y-2 text-[var(--text-sub)]">
            <li>• Cobros atrasados y flujo roto.</li>
            <li>• No-shows por citas olvidadas.</li>
            <li>• Respuestas lentas en WhatsApp → leads perdidos.</li>
            <li>• Demasiadas apps desconectadas y errores humanos.</li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-6 border border-[#E2E8F0]">
          <h3 className="font-semibold text-[#065F46]">Cómo lo resolvemos</h3>
          <ul className="mt-3 space-y-2 text-[var(--text-sub)]">
            <li>✔ Pagos automáticos con recordatorios.</li>
            <li>✔ Agenda inteligente con reprogramación.</li>
            <li>✔ Bot 24/7 que responde y captura datos.</li>
            <li>✔ Reportes claros y mini coaching para mejorar cada mes.</li>
          </ul>
        </div>
      </div>
    </Central>
  );
}
