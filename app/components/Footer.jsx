// app/components/Footer.jsx
import CentralContainer from "./layout/CentralContainer";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <CentralContainer>
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <h4 className="font-semibold text-[#002B5B]">Oliman CX</h4>
            <p className="mt-2 text-[#6C757D]">
              Eficiencia con toque humano: automatizamos pagos, agendas y respuestas 24/7.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#002B5B]">Contacto</h4>
            <ul className="mt-2 space-y-1 text-[#6C757D]">
              <li>WhatsApp: <a className="text-[#1E56A0]" href="https://wa.me/522228208051">+52 222 820 8051</a></li>
              <li>Email: <a className="text-[#1E56A0]" href="mailto:emilio.rodriguez.oliman@gmail.com">emilio.rodriguez.oliman@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#002B5B]">Legal</h4>
            <ul className="mt-2 space-y-1 text-[#6C757D]">
              <li><a className="hover:text-[#1E56A0]" href="#">Aviso de privacidad</a></li>
              <li><a className="hover:text-[#1E56A0]" href="#">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-xs text-[#6C757D] flex flex-col md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Oliman CX</span>
          <span>WhatsApp API con cuota incluida y excedente transparente.</span>
        </div>
      </CentralContainer>
    </footer>
  );
}
