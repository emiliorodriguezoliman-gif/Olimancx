// app/page.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Benefits from "./components/Benefits";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />        {/* Quiénes antes de Soluciones */}
        <Solutions />
        <Benefits />
        <Packages />
        {/* <Cases /> */}  {/* comenta si aún no quieres casos */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
