// app/components/Navbar.jsx
"use client";
import Link from "next/link";
import CentralContainer from "./layout/CentralContainer";

export default function Navbar() {
  const linkCls =
    "text-[#0F2442] hover:text-[#1E3668] transition-colors text-sm md:text-base";
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <CentralContainer className="h-14 md:h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <img src="/brand/favicon.png" alt="" className="h-5 w-5" />
          <span className="font-semibold text-[#0F2442]">Oliman CX</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#quienes" className={linkCls}>Quiénes somos</a>
          <a href="#soluciones" className={linkCls}>Soluciones</a>
          <a href="#beneficios" className={linkCls}>Beneficios</a>
          <a href="#paquetes" className={linkCls}>Paquetes</a>
          <a href="#contacto" className={linkCls}>Contacto</a>
        </nav>
        <a
          href="https://wa.me/522228208051"
          target="_blank"
          className="rounded-md px-4 py-2 text-white bg-[#2F5197]"
        >
          WhatsApp
        </a>
      </CentralContainer>
    </header>
  );
}
