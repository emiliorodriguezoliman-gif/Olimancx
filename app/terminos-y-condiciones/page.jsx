// app/terminos-y-condiciones/page.jsx
export const metadata = {
  title: "Términos y Condiciones — Oliman CX",
  description:
    "Condiciones de uso y contratación de servicios de Oliman CX.",
};

export default function TerminosPage() {
  return (
    <main className="bg-white">
      <section className="max-w-[1100px] mx-auto px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
          Términos y Condiciones
        </h1>

        <p className="mt-4 text-[#334155]">
          Este documento establece las condiciones de uso y contratación de los servicios
          ofrecidos por <strong>Oliman CX</strong>. Al contratar o utilizar nuestros servicios,
          aceptas estas condiciones.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Servicios</h2>
        <p className="mt-2 text-[#334155]">
          Brindamos servicios de automatización (pagos, agendas, respuestas 24/7), soporte y mantenimiento,
          conforme a los alcances y planes publicados en nuestro sitio.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Pagos y facturación</h2>
        <p className="mt-2 text-[#334155]">
          Los precios incluyen licencias indicadas y el IVA cuando aplique. Los excedentes (p. ej. mensajería)
          se cobrarán según política vigente. Comisiones de Stripe/Mercado Pago las asume el cliente.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Soporte</h2>
        <p className="mt-2 text-[#334155]">
          El soporte se brinda según el plan contratado (SLA, sesiones de optimización, etc.).
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Propiedad intelectual</h2>
        <p className="mt-2 text-[#334155]">
          La marca y materiales propios de Oliman CX son de nuestra titularidad. El cliente conserva
          la titularidad de su información y cuentas de terceros.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-[#002B5B]">Vigencia y terminación</h2>
        <p className="mt-2 text-[#334155]">
          La contratación es mensual (o según acuerdo) y podrá terminarse conforme a los términos
          pactados o por incumplimiento.
        </p>

        <p className="mt-8 text-[#6C757D]">Última actualización: Noviembre 2025</p>
      </section>
    </main>
  );
}
