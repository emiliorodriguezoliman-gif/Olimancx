import Central from "./layout/CentralContainer";

export default function Contact(){
  return (
    <Central id="contacto" className="py-14 md:py-18 bg-[var(--bg-soft)]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
      <p className="text-[17px] text-[var(--text-sub)]">
        ¿Listo para automatizar? Escríbenos por WhatsApp o envíanos tu correo.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a className="btn-primary" target="_blank" href="https://wa.me/522228208051">
          Hablar por WhatsApp
        </a>
        <a className="btn-outline" href="mailto:oibot@olimancx.com">
          Enviar correo
        </a>
      </div>
    </Central>
  );
}
