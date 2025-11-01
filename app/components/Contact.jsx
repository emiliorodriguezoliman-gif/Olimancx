// app/components/Contact.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-28 md:scroll-mt-32 bg-white py-16 md:py-20"
    >
      <CentralContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] text-center">
          Contacto
        </h2>
        <p className="mt-4 text-[#6C757D] max-w-2xl mx-auto text-center">
          ¿Listo para automatizar? Escríbenos por WhatsApp o envíanos tu correo.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://wa.me/522228208051"
            className="inline-flex items-center justify-center bg-[#1E56A0] text-white px-5 py-3 rounded-md"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="mailto:oibot@olimancx.com"
            className="inline-flex items-center justify-center border border-[#1E56A0] text-[#1E56A0] px-5 py-3 rounded-md"
          >
            Enviar correo
          </a>
        </div>
      </CentralContainer>
    </section>
  );
}
