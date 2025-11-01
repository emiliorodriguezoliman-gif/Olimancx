// app/components/Footer.jsx
import Image from "next/image";
import CentralContainer from "./layout/CentralContainer";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-12 pb-14">
      <CentralContainer className="text-center">
        {/* LOGO: usar favicon (hexágono) */}
        <div className="mb-3 flex justify-center">
          <Image
            src="/brand/favicon.png"     // <- favicon, no OI
            alt="Oliman CX"
            width={42}
            height={42}
            priority
          />
        </div>

        <h3 className="text-xl font-semibold text-primary">Oliman CX</h3>

        <p className="mt-3 text-muted-foreground">
          © 2025 Oliman CX — Eficiencia con toque humano.
        </p>

        <p className="mt-1 text-muted-foreground">
          WhatsApp API con cuota incluida y excedente transparente.
          <span className="mx-2">·</span>
          <a href="/robots.txt" className="underline">robots.txt</a>
          <span className="mx-2">·</span>
          <a href="/sitemap.xml" className="underline">sitemap.xml</a>
          <span className="mx-2">·</span>
          <a href="#contacto" className="underline">Contacto</a>
        </p>

        <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
          Aviso legal: Los planes incluyen licencias base y mantenimiento.
          Excedentes por consumo de WhatsApp y comisiones de pasarela se cobran
          aparte cuando aplique. La información mostrada no constituye oferta
          irrevocable y puede cambiar.
        </p>
<div className="mt-2">
  <a
    href="/legal/aviso-privacidad"
    className="text-sm text-[#1E56A0] underline hover:text-[#002B5B]"
  >
    Aviso de privacidad
  </a>
</div>     
 </CentralContainer>
    </footer>
  );
}
