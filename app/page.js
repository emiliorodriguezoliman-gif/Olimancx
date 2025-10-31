import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Benefits from "./components/Benefits";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function Page(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Benefits />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
