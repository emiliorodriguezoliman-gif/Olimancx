// app/components/WhatsAppButton.jsx
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/522228208051"
      className="fixed bottom-5 right-5 bg-[#25D366] text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:opacity-95"
      aria-label="Chatear por WhatsApp"
      target="_blank"
    >
      WhatsApp
    </a>
  );
}