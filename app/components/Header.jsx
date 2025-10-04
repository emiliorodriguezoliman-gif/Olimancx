// app/components/Header.jsx
import Image from "next/image";
import CentralContainer from "./layout/CentralContainer";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <CentralContainer>
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 py-3">
            <Image src="/brand/favicon.png" alt="Oliman CX" width={28} height={28} className="object-contain" priority />
            <span className="font-semibold text-[#002B5B]">Oliman CX</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#quienes" className="hover:text-[#1E56A0]">Quiénes somos</a>
            <a href="#soluciones" className="hover:text-[#1E56A0]">Soluciones</a>
            <a href="#beneficios" className="hover:text-[#1E56A0]">Beneficios</a>
            <a href="#paquetes" className="hover:text-[#1E56A0]">Paquetes</a>
            <a href="#contacto" className="hover:text-[#1E56A0]">Contacto</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/522228208051"
            className="hidden md:inline-block rounded-md bg-[#1E56A0] text-white px-4 py-2 text-sm hover:opacity-90"
          >
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </CentralContainer>
    </header>
  );
}
