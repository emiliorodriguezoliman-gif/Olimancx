// app/components/FloatingWhatsapp.jsx
export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/522228208051"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition animate-[pulse_2s_ease-in-out_infinite]"
      aria-label="Abrir WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}
