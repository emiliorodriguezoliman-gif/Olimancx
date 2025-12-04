// app/components/Packages.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Packages() {
  return (
    <section id="paquetes" className="section-pad surface-white">
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Paquetes Oliman CX
        </h2>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Paquete 1 */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#002B5B]">
              Diagnóstico Claro · Rumbo Claro
            </h3>
            <p className="mt-2 text-[#334155] text-sm leading-relaxed">
              Identificamos qué está frenando tu negocio, qué procesos faltan y cuál es el orden correcto para mejorar.
              <br /> <br />
              Totalmente personalizado según tu sector y tamaño.
            </p>
            <a
              href="https://wa.me/522228208051?text=Quiero%20el%20Diagn%C3%B3stico%20Claro"
              className="mt-6 inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
            >
              Solicitar información
            </a>
          </div>

          {/* Paquete 2 */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#002B5B]">
              Procesos Claros · Ventas Claras
            </h3>
            <p className="mt-2 text-[#334155] text-sm leading-relaxed">
              Diseñamos e implementamos procesos reales para atención, ventas y operación. 
              <br /><br />
              Incluye herramientas prácticas y capacitación, adaptado completamente a las necesidades de tu negocio.
            </p>
            <a
              href="https://wa.me/522228208051?text=Quiero%20Procesos%20Claros%20y%20Ventas%20Claras"
              className="mt-6 inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
            >
              Solicitar información
            </a>
          </div>

          {/* Fase 3 */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#002B5B]">
              Acompañamiento Mensual Personalizado
            </h3>
            <p className="mt-2 text-[#334155] text-sm leading-relaxed">
              Te acompañamos mes a mes para mantener orden, corregir desviaciones y mejorar resultados.
              <br /><br />
              Cada mes se ajusta según las necesidades reales de tu empresa.
            </p>
            <a
              href="https://wa.me/522228208051?text=Quiero%20Acompa%C3%B1amiento%20Mensual%20Personalizado"
              className="mt-6 inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
            >
              Solicitar información
            </a>
          </div>

        </div>
      </CentralContainer>
    </section>
  );
}
