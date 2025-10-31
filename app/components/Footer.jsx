export default function Footer(){
  return (
    <footer className="pt-10">
      <div className="hr-soft" />
      <div className="mx-auto max-w-6xl px-5 md:px-6 py-8 grid md:grid-cols-3 gap-6 text-[15px]">
        <div>
          <div className="font-semibold">Oliman CX</div>
          <p className="mt-2 text-[var(--text-sub)]">
            Eficiencia con toque humano: automatizamos pagos, agendas y respuestas 24/7.
          </p>
        </div>
        <div>
          <div className="font-semibold">Contacto</div>
          <p className="mt-2">
            WhatsApp: <a className="underline" href="https://wa.me/522228208051">+52 222 820 8051</a><br/>
            Email: <a className="underline" href="mailto:oibot@olimancx.com">oibot@olimancx.com</a>
          </p>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <p className="mt-2 space-x-3">
            <a className="underline" href="/aviso-de-privacidad">Aviso de privacidad</a>
            <a className="underline" href="/terminos-y-condiciones">Términos y condiciones</a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-[var(--text-sub)] pb-6">
        WhatsApp API con cuota incluida y excedente transparente.
      </div>
    </footer>
  );
}
