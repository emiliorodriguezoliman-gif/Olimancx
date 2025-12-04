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
          En Oliman CX somos una consultoría especializada en diagnóstico, diseño de procesos y optimización de ventas para pymes. Combinamos metodología, experiencia operativa y acompañamiento humano para lograr claridad, orden y resultados reales.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#E2E8F0] p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="font-semibold text-[#002B5B]">Misión</h3>
            <p className="mt-2 text-sm text-[#6C757D]">
              Ayudar a las pymes a obtener claridad, orden y procesos que les permitan vender mejor y operar con menos caos.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="font-semibold text-[#002B5B]">Visión</h3>
            <p className="mt-2 text-sm text-[#6C757D]">
              Convertirnos en un aliado estratégico para negocios que buscan orden, claridad y crecimiento real.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="font-semibold text-[#002B5B]">Diferenciador</h3>
            <p className="mt-2 text-sm text-[#6C757D]">
              Consultoría real y humana: analizamos tu operación, diseñamos procesos claros y te acompañamos paso a paso para que tu negocio avance con estructura.
            </p>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
