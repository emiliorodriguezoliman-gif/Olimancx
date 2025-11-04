// app/components/About.jsx
import CentralContainer from "./layout/CentralContainer";

export default function About() {
  return (
   <section id="quienes" className="section-pad surface-soft">
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Quiénes somos
        </h2>
        <p className="mt-4 text-[#6C757D] max-w-3xl mx-auto text-center">
          En Oliman CX unimos tecnología y enfoque humano. Nuestro símbolo —un
          hexágono que envuelve un círculo— representa equilibrio: estructura
          tecnológica para automatizar procesos y un centro humano que guía decisiones.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#E2E8F0] p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="font-semibold text-[#002B5B]">Misión</h3>
            <p className="mt-2 text-sm text-[#6C757D]">
              Automatizar con equilibrio: ahorrar tiempo y dinero con tecnología clara,
              reportes útiles y coaching aplicado.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="font-semibold text-[#002B5B]">Visión</h3>
            <p className="mt-2 text-sm text-[#6C757D]">
              Ser el aliado estratégico que combina estructura tecnológica con cercanía humana,
              potenciando a profesionales con automatizaciones inteligentes.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="font-semibold text-[#002B5B]">Diferenciador</h3>
            <p className="mt-2 text-sm text-[#6C757D]">
              Tecnología + coaching: implementamos y acompañamos con reportes claros
              y mini-sesiones de mejora continua.
            </p>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
