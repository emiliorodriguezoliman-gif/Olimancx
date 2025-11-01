// app/components/Contact.jsx
"use client";
import { useState } from "react";

export default function Contact() {
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID; // opcional
  const actionUrl = FORMSPREE_ID
    ? `https://formspree.io/f/${FORMSPREE_ID}`
    : "mailto:oibot@olimancx.com?subject=Contacto%20Oliman%20CX";

  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-[#002B5B] text-center">Contacto</h2>
        <p className="mt-3 text-[#6C757D] text-center">
          ¿Listo para automatizar? Déjanos tus datos y te contactamos.
        </p>

        <form
          action={actionUrl}
          method={FORMSPREE_ID ? "POST" : "GET"}
          className="mt-8 grid grid-cols-1 gap-4"
          onSubmit={() => setSent(true)}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="nombre"
              required
              placeholder="Nombre completo"
              className="rounded-xl border p-3"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="rounded-xl border p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="whatsapp"
              placeholder="WhatsApp (+52...)"
              className="rounded-xl border p-3"
            />
            <select name="interes" className="rounded-xl border p-3">
              <option value="">Interés</option>
              <option>Pagos Automáticos</option>
              <option>Agendas Inteligentes</option>
              <option>Respuestas 24/7</option>
              <option>Paquete Básico</option>
              <option>Paquete Pro</option>
              <option>Paquete Total</option>
            </select>
          </div>

          <textarea
            name="mensaje"
            rows={4}
            placeholder="Cuéntanos brevemente tu caso"
            className="rounded-xl border p-3"
          />

          <button
            type="submit"
            className="mt-2 bg-[#1E56A0] text-white px-6 py-3 rounded-xl hover:opacity-90 focus:outline-[#1E56A0]"
          >
            Enviar
          </button>

          {sent && FORMSPREE_ID && (
            <p className="text-sm text-green-600 mt-2">
              ¡Gracias! Recibimos tu mensaje.
            </p>
          )}
        </form>

        <div className="mt-6 flex flex-col md:flex-row gap-3 items-center justify-center">
          <a
            href="https://wa.me/522228208051?text=Hola%20Oliman%20CX,%20quisiera%20informaci%C3%B3n"
            className="underline"
          >
            Hablar por WhatsApp
          </a>
          <span className="hidden md:inline text-[#6C757D]">•</span>
          <a href="mailto:oibot@olimancx.com" className="underline">
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  );
}
