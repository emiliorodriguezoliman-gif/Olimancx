export default function CentralContainer({ className = "", children, id }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        {children}
      </div>
    </section>
  );
}
