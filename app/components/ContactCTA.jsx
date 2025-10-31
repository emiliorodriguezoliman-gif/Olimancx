// app/components/ContactCTA.jsx
import CentralContainer from "./layout/CentralContainer";

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-[#F6F8FB]">
      <CentralContainer className="py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2442]">Contacto</h2>
        <p className="mt-2 text-[#5A6472]">
          ¿Listo para automatizar? Escríbenos por WhatsApp o envíanos tu correo.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/522228208051"
            target="_blank"
            className="rounded-md px-5 py-3 text-white"
            style={{ backgroundColor: "#2F5197" }}
          >
            Hablar por WhatsApp
          </a>
          <a
            href="mailto:oibot@olimancx.com"
            className="rounded-md px-5 py-3 border border-[#2F5197] text-[#2F5197]"
          >
            Enviar correo
          </a>
        </div>
      </CentralContainer>
    </section>
  );
}
