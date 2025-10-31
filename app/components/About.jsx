import Central from "./layout/CentralContainer";

export default function About(){
  return (
    <Central id="about" className="py-14 md:py-18">
      <h2 className="text-3xl md:text-4xl font-bold">Quiénes somos</h2>
      <p className="mt-4 max-w-3xl text-[17px] text-[var(--text-sub)]">
        En Oliman CX unimos tecnología y enfoque humano. Nuestro símbolo —un
        hexágono que envuelve un círculo— representa equilibrio: estructura
        tecnológica para automatizar procesos y un centro humano que guía
        decisiones.
      </p>
    </Central>
  );
}
