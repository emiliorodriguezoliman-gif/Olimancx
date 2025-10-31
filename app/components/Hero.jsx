// app/components/Hero.jsx
import Central from "./layout/CentralContainer";

export default function Hero(){
  return (
    <Central id="top" className="bg-[var(--bg-soft)]">
      <div className="flex flex-col items-center text-center py-16 md:py-20">
        <img src="/brand/oi.png" alt="OI" className="h-24 w-24 mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Automatizamos tu negocio para que ahorres tiempo y vendas más
        </h1>
        <p className="mt-5 max-w-3xl text-lg md:text-xl text-[var(--text-sub)]">
          Pagos, agendas y respuestas 24/7 con WhatsApp API incluido.
          Reportes claros + coaching humano para mejorar ventas y atención.
        </p>

        <a href="https://wa.me/522228208051" target="_blank" className="btn-primary mt-8">
          Quiero empezar por WhatsApp
        </a>
      </div>
    </Central>
  );
}
