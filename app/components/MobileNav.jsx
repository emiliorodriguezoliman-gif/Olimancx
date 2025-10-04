// app/components/MobileNav.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="md:hidden rounded-md border px-3 py-2 text-sm text-[#002B5B]"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)}>
          <nav
            className="absolute right-0 top-0 h-full w-64 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#002B5B]">Oliman CX</span>
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)} className="text-2xl leading-none">
                ×
              </button>
            </div>

            <ul className="mt-6 space-y-4 text-[#002B5B]">
              <li><Link href="#quienes" onClick={() => setOpen(false)}>Quiénes somos</Link></li>
              <li><Link href="#soluciones" onClick={() => setOpen(false)}>Soluciones</Link></li>
              <li><Link href="#beneficios" onClick={() => setOpen(false)}>Beneficios</Link></li>
              <li><Link href="#paquetes" onClick={() => setOpen(false)}>Paquetes</Link></li>
              <li><Link href="#contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
            </ul>

            <a
              href="https://wa.me/522228208051"
              className="mt-6 inline-block w-full rounded-md bg-[#1E56A0] px-4 py-2 text-center text-white"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
