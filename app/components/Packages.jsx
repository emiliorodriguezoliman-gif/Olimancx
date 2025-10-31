import Central from "./layout/CentralContainer";

function Card({title, price, bullets, buttonHref}){
  return (
    <div className="card p-6 md:p-7 flex flex-col">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-3xl font-extrabold text-[var(--brand-primary)]">
        {price}
      </p>

      <ul className="mt-4 space-y-2 text-[var(--text-sub)]">
        {bullets.map((b,i)=><li key={i}>• {b}</li>)}
      </ul>

      <a href={buttonHref} target="_blank" className="btn-primary mt-6">
        Contratar por WhatsApp
      </a>
    </div>
  );
}

export default function Packages(){
  return (
    <Central id="paquetes" className="py-14 md:py-18">
      <h2 className="text-3xl md:text-4xl font-bold">Paquetes Oliman CX</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card
          title="Starter"
          price="$4,900 MXN / mes"
          buttonHref="https://wa.me/522228208051?text=Quiero%20Starter"
          bullets={[
            "WhatsApp API incluido (hasta 100 conversaciones/mes).",
            "Auto-respuesta 24/7, agenda básica y recordatorios.",
            "1 plantilla de cobro.",
            "Soporte estándar (SLA < 24h).",
          ]}
        />
        <Card
          title="Pro"
          price="$7,900 MXN / mes"
          buttonHref="https://wa.me/522228208051?text=Quiero%20Pro"
          bullets={[
            "Todo Starter + router de intentos (multicanal).",
            "Lead-scoring, dashboards, fidelización (re-contactos).",
            "Catálogo básico.",
            "WhatsApp hasta 300 conversaciones/mes.",
            "Soporte prioritario (SLA < 12h) + 1 sesión mensual (30 min).",
          ]}
        />
        <Card
          title="Elite"
          price="$11,900 MXN / mes"
          buttonHref="https://wa.me/522228208051?text=Quiero%20Elite"
          bullets={[
            "Todo Pro + catálogos completos y flujos de pago avanzados.",
            "Plantillas premium y entrenamiento al equipo.",
            "WhatsApp hasta 600 conversaciones/mes.",
            "Soporte premium (SLA < 6h) + revisión ejecutiva (60 min) + asesoría ligera.",
          ]}
        />
      </div>

      <p className="mt-6 text-xs text-[var(--text-sub)]">
        * Excedentes de WhatsApp: upgrade de plan o cargo por bloques.
        Comisiones de Stripe/MercadoPago las asume el cliente. Google Calendar sin
        costo adicional. Hosting + mantenimiento incluidos. “Con Oliman CX
        siempre sabes lo que pagas: setup, mantenimiento, licencias e IVA incluidos.”
      </p>
    </Central>
  );
}
