// app/components/Packages.jsx
import CentralContainer from "./layout/CentralContainer";

const Card = ({ title, price, features, highlight = false, ctaHref }) => {
  return (
    <div
      className={
        "relative rounded-2xl border p-6 transition " +
        (highlight
          ? "border-[#1E56A0] shadow-md hover:shadow-lg hover:-translate-y-0.5"
          : "hover:shadow-md hover:-translate-y-0.5")
      }
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1E56A0] px-3 py-1 text-xs text-white">
          Más popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-[#002B5B]">{title}</h3>
      <p className="mt-1 text-2xl font-bold text-[#002B5B]">{price}</p>

      <ul className="mt-4 space-y-2 text-sm text-[#6C757D]">
        {features.map((f, i) => (
          <li key={i} className="leading-relaxed">
            • {f}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={
          "mt-6 inline-block rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 " +
          (highlight
            ? "bg-[#1E56A0] text-white hover:opacity-90 focus:ring-[#1E56A0]/50"
            : "border border-[#1E56A0] text-[#1E56A0] hover:bg-[#1E56A0] hover:text-white focus:ring-[#1E56A0]/30")
        }
      >
        Contratar por WhatsApp
      </a>
    </div>
  );
};

export default function Packages() {
  return (
    <section id="paquetes" className="bg-white">
      <CentralContainer>
        <h2 className="text-3xl font-bold text-[#002B5B] text-center">Paquetes</h2>
        <p className="mt-2 text-[#6C757D] text-center">
          Precios cerrados con licencias e IVA incluidos. El excedente de WhatsApp se cobra por mensaje adicional.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            title="Básico"
            price="$3,900 MXN/mes"
            features={[
              "1 automatización (Pagos o Agenda).",
              "Setup y mantenimiento incluidos.",
              "Licencias básicas incluidas.",
              "WhatsApp API: 200 mensajes/mes (excedente $0.10).",
              "Reporte mensual básico."
            ]}
            ctaHref="https://wa.me/522228208051"
          />

          <Card
            title="Pro"
            price="$6,900 MXN/mes"
            highlight
            features={[
              "2 automatizaciones.",
              "Setup y mantenimiento incluidos.",
              "Licencias intermedias incluidas.",
              "WhatsApp API: 500 mensajes/mes (excedente $0.10).",
              "Reporte + mini coaching (15 min)."
            ]}
            ctaHref="https://wa.me/522228208051"
          />

          <Card
            title="Total"
            price="$9,900 MXN/mes"
            features={[
              "3 automatizaciones (Pagos + Agenda + Respuestas 24/7).",
              "Setup y mantenimiento incluidos.",
              "Licencias avanzadas incluidas.",
              "WhatsApp API: 1,000 mensajes/mes (excedente $0.10).",
              "Reporte avanzado + coaching (30 min)."
            ]}
            ctaHref="https://wa.me/522228208051"
          />
        </div>
      </CentralContainer>
    </section>
  );
}
