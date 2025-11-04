// app/components/Footer.jsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      {/* Cintilla sutil para separar (opcional, visual premium) */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Bloque superior: Marca / Contacto / Legal */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/favicon.png"   // usa tu favicon real
                alt="Oliman CX"
                width={40}
                height={40}
                className="rounded-md"
                priority
              />
              <h3 className="text-lg font-semibold text-[#0F1E3B]">Oliman CX</h3>
            </div>
            <p className="mt-3 text-[#475569]">
              Eficiencia con toque humano: automatizamos pagos, agendas y
              respuestas 24/7 con reportes claros + coaching aplicado.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold text-[#0F1E3B]">Contacto</h4>
            <ul className="mt-3 space-y-2 text-[#334155]">
              <li>
                <a
                  href="https://wa.me/522228208051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1E56A0] underline-offset-4 hover:underline"
                >
                  +52 222 820 8051
                </a>
              </li>
              <li>
                <a
                  href="mailto:oibot@olimancx.com"
                  className="hover:text-[#1E56A0] underline-offset-4 hover:underline"
                >
                  oibot@olimancx.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-[#0F1E3B]">Legal</h4>
            <ul className="mt-3 space-y-2 text-[#334155]">
              <li>
                <Link
                  href="/aviso-de-privacidad"
                  className="hover:text-[#1E56A0] underline-offset-4 hover:underline"
                >
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="hover:text-[#1E56A0] underline-offset-4 hover:underline"
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <hr className="my-10 border-[#E2E8F0]" />

        {/* Tira inferior */}
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-[#475569]">
            © {new Date().getFullYear()} Oliman CX — Eficiencia con toque humano.
          </p>
          <p className="text-xs text-[#64748B]">
            WhatsApp API con cuota incluida y excedente transparente.
          </p>
        </div>
      </div>
    </footer>
  );
}
