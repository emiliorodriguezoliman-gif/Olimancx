import Central from "./layout/CentralContainer";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-[var(--oi-border)]">
      <Central className="flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-2">
          <img src="/brand/favicon.png" alt="Oliman CX" className="h-5 w-5" />
          <span className="font-semibold">Oliman CX</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#quienes-somos" className="nav-link">Quiénes somos</a>
          <a href="#soluciones" className="nav-link">Soluciones</a>
          <a href="#beneficios" className="nav-link">Beneficios</a>
          <a href="#paquetes" className="nav-link">Paquetes</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <a
          href="https://wa.me/522228208051?text=Hola%20Oliman%20CX,%20quisiera%20empezar"
          target="_blank"
          className="btn-oi hidden md:inline-flex h-9 px-4"
        >
          WhatsApp
        </a>
      </Central>
    </header>
  );
}
