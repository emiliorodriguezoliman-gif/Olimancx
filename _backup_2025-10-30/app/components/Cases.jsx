// app/components/Cases.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Cases() {
  return (
    <section id="cases" className="bg-white">
      <CentralContainer>
        <h2 className="text-2xl md:text-3xl font-bold text-[#002B5B]">
          Casos de éxito
        </h2>
        <p className="mt-3 text-[#6C757D]">
          Resultados reales al automatizar pagos, agendas y respuestas 24/7.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Testimonio 1 */}
          <figure className="rounded-lg border p-5 bg-white">
            <blockquote className="text-[#002B5B] font-medium">
              “En 2 semanas reduje 70% los no-shows. Cobro antes y duermo mejor.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-[#6C757D]">
              Coach de Vida
            </figcaption>
          </figure>

          {/* Testimonio 2 */}
          <figure className="rounded-lg border p-5 bg-white">
            <blockquote className="text-[#002B5B] font-medium">
              “Dejé de perseguir pagos. Mis clientes lo agradecen.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-[#6C757D]">
              Abogado Fiscal
            </figcaption>
          </figure>
        </div>
      </CentralContainer>
    </section>
  );
}