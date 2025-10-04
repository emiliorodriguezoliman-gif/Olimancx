// app/components/Contact.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Contact() {
  return (
    <section id="contacto" className="bg-white">
      <CentralContainer>
        <h2 className="text-3xl font-bold text-[#002B5B]">Contacto</h2>
        <p className="mt-2 text-[#6C757D]">¿Listo para automatizar? Escríbenos por WhatsApp o envíanos tu correo.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/522228208051" className="rounded-md bg-emerald-600 text-white px-6 py-3 text-center hover:opacity-90">
            Hablar por WhatsApp
          </a>
          <a href="mailto:emilio.rodriguez.oliman@gmail.com" className="rounded-md bg-[#1E56A0] text-white px-6 py-3 text-center hover:opacity-90">
            Enviar correo
          </a>
        </div>
      </CentralContainer>
    </section>
  );
}
