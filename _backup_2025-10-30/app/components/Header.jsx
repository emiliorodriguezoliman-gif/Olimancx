// app/components/Header.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import CentralContainer from "./layout/CentralContainer";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <CentralContainer className="flex items-center justify-between h-16">
        {/* Logo + nombre */}
        <Link href="#" className="flex items-center gap-2">
          <img
            src="/brand/favicon.png"
            alt="Oliman CX"
            className="h-7 w-7 md:h-8 md:w-8" /* 👈 un poco más grande */
          />
          <span className="font-semibold text-slate-800">Oliman CX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#quienes" className="hover:text-slate-900">Quiénes somos</a>
          <a href="#soluciones" className="hover:text-slate-900">Soluciones</a>
          <a href="#beneficios" className="hover:text-slate-900">Beneficios</a>
          <a href="#paquetes" className="hover:text-slate-900">Paquetes</a> {/* 👈 */}
          <a href="#contacto" className="hover:text-slate-900">Contacto</a>
          <a
            href="https://wa.me/522228208051"
            target="_blank"
            className="inline-flex items-center rounded-md bg-[#1E56A0] px-4 py-2 font-medium text-white hover:bg-[#153E73]"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </CentralContainer>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-slate-800">Oliman CX</span>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 inline-flex items-center justify-center border border-slate-200 rounded-md"
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-slate-700">
              <a href="#quienes" onClick={() => setOpen(false)}>Quiénes somos</a>
              <a href="#soluciones" onClick={() => setOpen(false)}>Soluciones</a>
              <a href="#beneficios" onClick={() => setOpen(false)}>Beneficios</a>
              <a href="#paquetes" onClick={() => setOpen(false)}>Paquetes</a> {/* 👈 */}
              <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
              <a
                href="https://wa.me/522228208051"
                target="_blank"
                className="mt-2 inline-flex items-center rounded-md bg-[#1E56A0] px-4 py-2 font-medium text-white hover:bg-[#153E73]"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
