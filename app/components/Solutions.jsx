// app/components/Solutions.jsx
import CentralContainer from "./layout/CentralContainer";

const items = [
  { emoji: "💳", title: "Pagos Automáticos", text: "Links de pago, recordatorios y confirmación automática para cobrar a tiempo." },
  { emoji: "📆", title: "Agendas Inteligentes", text: "Reservas online con recordatorios y reprogramación que reduce no-shows." },
  { emoji: "🤖", title: "Respuestas 24/7", text: "Bot en WhatsApp o web para FAQ y captura de leads, con escalamiento a humano." },
];

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="scroll-mt-28 md:scroll-mt-32 bg-white py-16 md:py-20"
    >
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Soluciones
        </h2>
        <p className="mt-4 text-[#6C757D] max-w-3xl mx-auto text-center">
          Tecnología + coaching humano para resultados medibles.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-3xl">{it.emoji}</div>
              <h3 className="mt-3 text-xl font-semibold text-[#002B5B]">{it.title}</h3>
              <p className="mt-2 text-[#334155]">{it.text}</p>
            </div>
          ))}
        </div>
      </CentralContainer>
    </section>
  );
}
