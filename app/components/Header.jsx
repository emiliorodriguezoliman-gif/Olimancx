"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll=()=> setScrolled(window.scrollY>4);
    onScroll(); window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur bg-white/85 border-b ${scrolled ? "border-[#E7ECF4]" : "border-transparent"}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-6 h-16 md:h-18 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <img src="/brand/favicon.png" alt="Oliman CX" className="h-6 w-6"/>
          <span className="font-semibold">Oliman CX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <a href="#about" className="hover:opacity-80">Quiénes somos</a>
          <a href="#solutions" className="hover:opacity-80">Soluciones</a>
          <a href="#benefits" className="hover:opacity-80">Beneficios</a>
          <a href="#paquetes" className="hover:opacity-80">Paquetes</a>
          <a href="#contacto" className="hover:opacity-80">Contacto</a>
          <a href="https://wa.me/522228208051" target="_blank" className="btn-primary">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
