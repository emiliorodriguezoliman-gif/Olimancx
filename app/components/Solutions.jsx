// app/components/Solutions.jsx
import CentralContainer from "./layout/CentralContainer";

const cards = [
  {
    title: "Pagos Automáticos",
    emoji: "💳",
    desc: "Links de pago, recordatorios y confirmación automática para cobrar a tiempo.",
  },
  {
    title: "Agendas Inteligentes",
    emoji: "📅",
    desc: "Reservas online con recordatorios y reprogramación que reduce no-shows.",
  },
  {
    title: "Respuestas 24/7",
    emoji: "🤖",
    desc: "Bot en WhatsApp o web para FAQ y captura de leads, con escalamiento a humano.",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-[#F5F5F5]">
      <CentralContainer>
        <h2 className="text-3xl font-bold text-[#002B5B]">Soluciones</h2>
        <p className="mt-2 text-[#6C757D]">Tecnología + coaching humano para resultados medibles.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl">{c.emoji}</div>
              <h3 className="mt-3 font-semibold text-[#002B5B]">{c.title}</h3>
              <p className="mt-2 text-sm text-[#6C757D]">{c.desc}</p>
              <a
                href="https://wa.me/522228208051"
                className="inline-block mt-4 text-sm rounded-md bg-[#1E56A0] text-white px-4 py-2 hover:opacity-90"
              >
                Quiero este servicio
              </a>
            </div>
          ))}
        </div>
      </CentralContainer>
    </section>
  );
}
