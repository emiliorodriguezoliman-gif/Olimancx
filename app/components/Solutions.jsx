// app/components/Solutions.jsx
import CentralContainer from "./layout/CentralContainer";

const items = [
  { emoji: "🧭", title: "Diagnóstico Claro", text: "Identificamos qué está frenando tu negocio y cuál es el orden correcto para mejorar." },
  { emoji: "📋", title: "Procesos Claros", text: "Diseñamos e implementamos procesos simples y humanos para atención, ventas y operación." },
  { emoji: "🤝", title: "Acompañamiento", text: "Te guiamos paso a paso para mantener el orden, corregir desviaciones y mejorar resultados." },
];

export default function Solutions() {
  return (
   <section id="soluciones" className="section-pad surface-white">
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Soluciones
        </h2>
        <p className="mt-4 text-[#6C757D] max-w-3xl mx-auto text-center">
          Consultoría humana y práctica para ordenar tu operación, fortalecer tus ventas y darte claridad.
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
