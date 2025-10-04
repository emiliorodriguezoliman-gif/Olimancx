// app/components/Hero.jsx
import Image from "next/image";
import CentralContainer from "./layout/CentralContainer";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[linear-gradient(180deg,#fff,rgba(30,86,160,0.04))]"
    >
      <CentralContainer>
        <div className="text-center max-w-3xl mx-auto">
          <Image
            src="/brand/oi.png"
            alt="OI - Oliman CX"
            width={144}
            height={144}
            priority
            className="mx-auto h-36 w-36 object-contain"
          />

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#002B5B]">
            Automatizamos tu negocio para que ahorres tiempo y vendas más
          </h1>

          <p className="mt-4 text-lg text-[#6C757D]">
            Pagos, agendas y respuestas 24/7 con WhatsApp API incluido.
            Reportes claros + coaching humano para mejorar ventas y atención.
          </p>

          <a
            href="https://wa.me/522228208051"
            className="inline-block mt-6 rounded-md bg-[#1E56A0] px-6 py-3 text-white font-medium transition hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1E56A0]/50 focus:ring-offset-2"
          >
            Quiero empezar por WhatsApp
          </a>
        </div>
      </CentralContainer>
    </section>
  );
}
