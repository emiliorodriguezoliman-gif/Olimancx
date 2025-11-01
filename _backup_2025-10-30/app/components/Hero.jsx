// app/components/Hero.jsx
import CentralContainer from "./layout/CentralContainer";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-28 md:pt-36 pb-16 md:pb-20 bg-white text-center"
    >
      <CentralContainer>
        <div className="flex justify-center">
          <Image
            src="/brand/oi.png"
            alt="OI — Oliman CX"
            width={144}
            height={144}
            priority
          />
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-[#0B1E42]">
          Automatizamos tu negocio para
          <br className="hidden md:block" />
          que ahorres tiempo y vendas más
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-[#5A6473] text-lg">
          Pagos, agendas y respuestas 24/7 con WhatsApp API incluido.
          Reportes claros + coaching humano para mejorar ventas y atención.
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/522228208051?text=Quiero%20automatizar%20mi%20negocio"
            className="inline-block rounded-lg bg-[#2C3E94] px-6 py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Quiero empezar por WhatsApp
          </a>
        </div>
      </CentralContainer>
    </section>
  );
}
