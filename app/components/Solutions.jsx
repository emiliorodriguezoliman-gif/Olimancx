import Central from "./layout/CentralContainer";

const items = [
  {
    emoji: "💳",
    title: "Pagos Automáticos",
    text: "Links de pago, recordatorios y confirmación automática para cobrar a tiempo."
  },
  {
    emoji: "📅",
    title: "Agendas Inteligentes",
    text: "Reservas online con recordatorios y reprogramación que reduce no-shows."
  },
  {
    emoji: "🤖",
    title: "Respuestas 24/7",
    text: "Bot en WhatsApp o web para FAQ y captura de leads, con escalamiento a humano."
  },
];

export default function Solutions(){
  return (
    <Central id="solutions" className="py-14 md:py-18 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Soluciones</h2>
        <p className="mt-2 text-[17px] text-[var(--text-sub)]">
          Tecnología + coaching humano para resultados medibles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((c,i)=>(
          <div key={i} className="card p-6 md:p-7">
            <div className="text-4xl">{c.emoji}</div>
            <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-[var(--text-sub)]">{c.text}</p>

            <a href="#contacto" className="btn-primary mt-6 w-full md:w-auto">
              Quiero este servicio
            </a>
          </div>
        ))}
      </div>
    </Central>
  );
}
