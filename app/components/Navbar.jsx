"use client";

import CentralContainer from "./layout/CentralContainer";

export default function Navbar() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-line"
    >
      <CentralContainer className="flex items-center justify-between h-14">
        {/* Marca */}
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/favicon.ico"
            alt="Oliman CX favicon"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="font-semibold text-[#002B5B]">Oliman CX</span>
        </a>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] text-slate-700">
          <a href="#quienes" className="hover:text-[#1E3A8A]">Quiénes</a>
          <a href="#soluciones" className="hover:text-[#1E3A8A]">Qué hacemos</a>
          <a href="#beneficios" className="hover:text-[#1E3A8A]">Beneficios</a>
          <a href="#paquetes" className="hover:text-[#1E3A8A]">Servicios</a>
          <a href="#contacto" className="hover:text-[#1E3A8A]">Contacto</a>
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-block px-4 py-2 rounded-lg bg-[#294F8A] text-white"
        >
          WhatsApp
        </a>
      </CentralContainer>
    </header>
  );
}
