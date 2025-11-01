export const metadata = { title: "Términos y Condiciones — Oliman CX" };

export default function Terminos() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#002B5B]">Términos y Condiciones</h1>
      <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
        <li>Los servicios se prestan conforme al plan contratado y al alcance documentado con el cliente.</li>
        <li>Las integraciones con terceros (WhatsApp, Stripe, Mercado Pago, Google) dependen de sus políticas y disponibilidad.</li>
        <li>Los tiempos de respuesta (SLA) aplican en horario hábil y según plan.</li>
        <li>Los pagos de implementación son no reembolsables una vez iniciados los trabajos.</li>
        <li>Los cargos por uso o excedentes de WhatsApp se facturan según corresponda.</li>
        <li>Jurisdicción: Ciudad de México, salvo pacto por escrito en contrario.</li>
      </ul>
      <p className="mt-6 text-sm text-slate-500">Última actualización: {new Date().toLocaleDateString("es-MX")}</p>
    </main>
  );
}
