// app/components/Hero.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Hero() {
  return (
    <section id="top" className="bg-white py-12 md:py-16 border-b border-[#E2E8F0]">
      <CentralContainer className="text-center">
        <img
          src="/brand/oi.png"
          alt="OI"
          width={144}
          height={144}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
          Automatizamos tu negocio para que ahorres tiempo y vendas más
        </h1>
        <p className="mt-4 text-lg text-[#6C757D]">
          Pagos, agendas y respuestas 24/7 con WhatsApp API incluido.
          Reportes claros + coaching humano para mejorar ventas y atención.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://wa.me/522228208051"
            className="inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 md:px-6 py-3 rounded-md text-sm md:text-base"
          >
            Quiero empezar por WhatsApp
          </a>
          <a
            href="#paquetes"
            className="inline-flex items-center justify-center border border-[#1E56A0] text-[#1E56A0] px-5 md:px-6 py-3 rounded-md text-sm md:text-base"
          >
            Ver Paquetes
          </a>
        </div>
      </CentralContainer>
    </section>
  );
}
